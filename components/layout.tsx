import { Inter } from "next/font/google";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <div className={inter.className}>{children}</div>
    </div>
  );
}
