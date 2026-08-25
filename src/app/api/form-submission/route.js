import dotenv from "dotenv";
import { NextResponse } from "next/server";
import { sheets_v4 } from "@googleapis/sheets";
import { GoogleAuth } from "google-auth-library";
import { z } from "zod";

const spreadsheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
const clientEmail = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const privateKey = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  gender: z.string().min(1, "Gender is required"),
  dobMonth: z.string().min(1, "Required").max(2, "Invalid"),
  dobDay: z.string().min(1, "Required").max(2, "Invalid"),
  dobYear: z.string().min(4, "Required").max(4, "Invalid"),
  city: z.string().min(1, "City is required"),
  phone: z.string().min(10, "Valid phone is required"),
  email: z.string().email("Valid email is required"),
  instagram: z.string().optional(),
  tagSocials: z.string().min(1, "Required"),
  profession: z.string().min(1, "Profession is required"),
  sportingBackground: z.array(z.string()).optional(),
  sportingBackgroundOther: z.string().optional(),
  playingSince: z.string().min(1, "Required"),
  selfLevel: z.string().min(1, "Required"),
  acceptedTerms: z.literal(true),
});

function getAuth() {
  if (!clientEmail || !privateKey) return null;

  return new GoogleAuth({
    credentials: { client_email: clientEmail, private_key: privateKey },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));

    // Zod validation
    const validationResult = formSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    const dob = `${data.dobMonth}/${data.dobDay}/${data.dobYear}`;

    let sportingBackground = Array.isArray(data.sportingBackground)
      ? data.sportingBackground.join(", ")
      : (data.sportingBackground || "");

    if (data.sportingBackgroundOther?.trim()) {
      sportingBackground += sportingBackground
        ? `, ${data.sportingBackgroundOther.trim()}`
        : data.sportingBackgroundOther.trim();
    }

    if (!spreadsheetId) {
      return NextResponse.json({ error: "Contact spreadsheet ID missing" }, { status: 500 });
    }

    const auth = getAuth();
    if (!auth) {
      return NextResponse.json({ error: "Google credentials missing" }, { status: 500 });
    }

    const sheets = new sheets_v4.Sheets({ auth });

    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:N",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            formattedDate,           // Timestamp
            data.firstName.trim(),   // First Name
            data.lastName.trim(),    // Last Name
            data.gender,             // Gender
            dob,                     // Date of Birth
            data.city.trim(),        // City
            data.phone.trim(),       // Phone Number
            data.email.trim(),       // Email
            data.instagram?.trim() || "", // Instagram Handle
            data.tagSocials,         // Can we tag you on our socials?
            data.profession.trim(),  // Profession
            sportingBackground,      // Any sporting background?
            data.playingSince,       // Playing Padel since
            data.selfLevel,          // Self-assessed level?
          ],
        ],
      },
    });

    return NextResponse.json({ message: "Successfully Submitted" }, { status: 200 });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}