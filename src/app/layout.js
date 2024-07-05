import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "EA Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.className}>{children}</body>
    </html>
  );
}
