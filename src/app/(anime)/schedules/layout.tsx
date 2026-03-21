import BaseLayout from "@/components/layout/base-layout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Schedules | Otakunime",
  description: "Schedules Page Otakunime. Build by LyntharxDev",
};

export default function SchedulesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BaseLayout>{children}</BaseLayout>;
}