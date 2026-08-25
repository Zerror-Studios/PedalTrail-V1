import "../styles/globals.css";
import "../styles/fonts.css";
import SiteLayout from "@/components/common/SiteLayout";
import { createRootMetadata } from "@/lib/seo";
import PasswordProtector from "@/components/common/PasswordProtector";

export const experimental = {
  viewTransition: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <PasswordProtector>

        <SiteLayout>
          {children}
        </SiteLayout>
        </PasswordProtector>
      </body>
    </html>
  );
}

export const metadata = createRootMetadata();
