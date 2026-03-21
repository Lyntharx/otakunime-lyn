import { type Metadata } from "next";
import BaseLayout from "@/components/layout/base-layout";

export const metadata: Metadata = {
  title: "Comics | Otakunime",
  description: "Comics Page Otakunime. Build by LyntharxDev",
};

export default function ComicsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <BaseLayout>
      {children}
    </BaseLayout>
  );
}