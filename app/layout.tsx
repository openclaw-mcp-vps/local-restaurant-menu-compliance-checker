import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Menu Compliance Checker — Ensure Your Menu Meets Local Regulations",
  description: "Upload your restaurant menu and instantly scan for allergen disclosures, calorie requirements, and food labeling compliance violations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ca7f3608-0afb-4fa2-94a3-849494de390f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
