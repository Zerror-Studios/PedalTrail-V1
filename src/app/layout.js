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
          {/* Global Transition Overlay */}
          <div 
            id="transition-overlay" 
            className="fixed top-0 left-0 w-full h-[100vh] bg-[#0987D8] z-[9999] pointer-events-none translate-y-full flex justify-center items-center"
          >
            <img 
              id="transition-logo"
              src="/svg/logo.svg" 
              alt="Logo" 
              className="w-16 h-16 md:w-24 md:h-24 object-cover opacity-0 scale-75"
            />
          </div>
          <SiteLayout>
            {children}
          </SiteLayout>
        </PasswordProtector>
      </body>
    </html>
  );
}

export const metadata = createRootMetadata();
