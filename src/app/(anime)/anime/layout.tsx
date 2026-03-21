import BaseLayout from "@/components/layout/base-layout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Search Anime | Otakunime",
  description: "Anime Page Otakunime. Build by LyntharxDev",
};

export default function AnimeSearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BaseLayout>{children}</BaseLayout>;
}
