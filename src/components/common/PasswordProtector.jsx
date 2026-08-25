"use client";

import { useState } from "react";

const ACCESS_PASSWORD = "1234";

export default function PasswordProtector({ children }) {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.trim() === ACCESS_PASSWORD) {
      setIsAuthenticated(true);
      return;
    }

    setError("Incorrect password. Please try again.");
    setPassword("");
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <main className="min-h-svh w-full overflow-hidden bg-black text-white relative">
      <img
        src="/images/home/HeroBG.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top opacity-70"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent" />

      <div className="relative z-10 flex min-h-svh w-full flex-col px-5 py-5 sm:px-10 sm:py-8">
        <header className="flex items-center justify-between">
          <div className="h-8 w-8">
            <img
              src="/svg/logo.svg"
              alt="Padel Trail"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <span className="Inter text-[0.7rem] leading-[0.7rem] uppercase text-white/80">
            Private Access
          </span>
        </header>

        <section className="flex flex-1 items-center justify-center py-16">
          <div className="grid w-full max-w-5xl gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div className="max-w-3xl">
              <span className="Inter text-[0.7rem] uppercase leading-[0.7rem] text-white/80 sm:text-[0.85rem]">
                Season 01 - Spain - Autumn 2026
              </span>
              <h1 className="NeueR mt-3 max-w-4xl uppercase text-white">
                The Padel Trail
              </h1>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full border border-white/20 bg-black/45 p-5 backdrop-blur-md sm:p-6"
            >
              <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                  <span className="Inter text-[0.7rem] uppercase leading-[0.7rem] text-white/60">
                    Invitation Gate
                  </span>
                  <h5 className="NeueM mt-3 uppercase text-white">
                    Enter Password
                  </h5>
                </div>

                <span className="RedBG Inter px-3 py-2 text-[0.65rem] uppercase leading-[0.65rem] text-white">
                  Members
                </span>
              </div>

              <label
                htmlFor="site-password"
                className="Inter mb-2 block text-[0.7rem] uppercase leading-[0.7rem] text-white/70"
              >
                Password
              </label>
              <input
                id="site-password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Enter access code"
                required
                autoFocus
                className="Inter w-full border-b border-white/30 bg-transparent pb-3 text-base text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#FE2115]"
              />

              <div className="mt-3 min-h-5">
                {error ? (
                  <p className="Inter text-sm leading-5 text-[#FE2115]">
                    {error}
                  </p>
                ) : (
                  <p className="Inter text-sm leading-5 text-white/45">
                    Access is reserved for invited players and partners.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="group mt-8 flex w-full items-stretch gap-1.5"
              >
                <span className="RedBG Inter flex min-h-12 flex-1 items-center justify-center px-5 text-[0.75rem] uppercase leading-[0.75rem] text-white transition-colors group-hover:bg-[#a0120b]">
                  Unlock Trail
                </span>
                <span className="RedBG flex aspect-square min-h-12 items-center justify-center transition-colors group-hover:bg-[#e0190e]">
                  <img
                    src="/svg/Arrow.svg"
                    alt=""
                    className="h-[45%] object-cover object-center"
                  />
                </span>
              </button>
            </form>
          </div>
        </section>

        <footer className="flex flex-col gap-3 text-white/80 sm:flex-row sm:items-end sm:justify-between">
          <p className="Inter max-w-xs text-[0.8rem] capitalize leading-[0.95rem]">
            A private padel, wellness and travel experience across Spain.
          </p>
          <p className="Inter text-[0.75rem] uppercase leading-[0.9rem] sm:text-right">
            32 players. 9 days. One invitation to remember.
          </p>
        </footer>
      </div>
    </main>
  );
}
