import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Apoorva Chandanshive | Data Engineer",
  description: "Portfolio of Apoorva Chandanshive - Data Engineer with expertise in AWS, Kafka, PySpark, and real-time data pipelines",
  keywords: ["Data Engineer", "AWS", "Kafka", "PySpark", "Python", "BigQuery", "ETL"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
