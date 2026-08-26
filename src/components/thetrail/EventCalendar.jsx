export default function EventCalendar() {
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const calendarDays = [
    // Week 1 (Inactive/Faded)
    { date: "11", muted: true },
    { date: "12", muted: true },
    { date: "13", muted: true },
    { date: "14", muted: true },
    { date: "15", muted: true },
    { date: "16", muted: true },
    { date: "17", muted: true },

    // Week 2
    { date: "18" },
    { date: "19" },
    { date: "20" },
    { date: "21" },
    { date: "22", text: "Arrive in Spain" },
    { date: "23", text: "Coach: Train together." },
    { date: "24", text: "Competition begins", circled: true },

    // Week 3
    { date: "25", text: "Explore: Experience Spain beyond the court." },
    { date: "26", text: "Local Club Play" },
    { date: "27", text: "Compete: The tournament moves forward." },
    { date: "28", text: "Semi Finals" },
    { date: "29", text: "THE FINAL MATCH", highlighted: true },
    { date: "30", text: "Depart: The Trail comes to an end." },
    { date: "31" },
  ];

  return (
    <section className="w-full h-fit bg-[#f4f4f4] text-black min-h-screen px-6 py-12 md:px-16 md:py-20 flex flex-col justify-center">
      <div className="mx-auto w-full">
        
        {/* Header Section */}
        <div className="mb-12">
          <h3 className="NeueR text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.1] text-[#1a1a1a] max-w-2xl">
            A curated path through competition and culture.
          </h3>
          <p className="NeueR text-xs sm:text-sm font-semibold tracking-wider text-neutral-600 uppercase mt-8">
            OCTOBER 23 - 31/2026
          </p>
        </div>

        {/* Calendar Grid Container */}
        <div className="bg-white border border-neutral-200 rounded-sm overflow-x-auto shadow-sm">
          <div className="min-w-[700px]">
            
            {/* Days Header */}
            <div className="grid grid-cols-7 border-b border-neutral-200 bg-white">
              {daysOfWeek.map((day, idx) => (
                <div
                  key={idx}
                  className="py-3 text-center text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-500 uppercase border-r border-neutral-200 last:border-r-0"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Cells Grid */}
            <div className="grid grid-cols-7 h-[70vh]">
              {calendarDays.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative p-3 sm:p-4 min-h-[110px] sm:min-h-[140px] flex flex-col justify-between border-b border-r border-neutral-200 transition-colors ${
                    idx % 7 === 6 ? "border-r-0" : ""
                  } ${
                    idx >= 14 ? "border-b-0" : ""
                  } ${
                    item.highlighted
                      ? "BGORG text-white"
                      : item.muted
                      ? "bg-[#f8f8f8]"
                      : "bg-white"
                  }`}
                >
                  {/* Top Date Header */}
                  <div className="flex items-center">
                    {item.circled ? (
                      <h5 className="w-fit h-fit p-2 rounded-full border border-[#FF6000] text-[#FF6000] flex items-center justify-center text-sm sm:text-base font-normal">
                        {item.date}
                      </h5>
                    ) : (
                      <h5
                        className={`text-sm sm:text-base ${
                          item.muted
                            ? "text-neutral-400 font-light"
                            : item.highlighted
                            ? "text-white font-medium"
                            : "text-neutral-900 font-normal"
                        }`}
                      >
                        {item.date}
                      </h5>
                    )}
                  </div>

                  {/* Event Text Description */}
                  {item.text && (
                    <p
                      className={`text-[11px] sm:text-xs leading-snug mt-2 ${
                        item.highlighted
                          ? "text-white font-semibold uppercase"
                          : "text-neutral-800 font-normal"
                      }`}
                    >
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}