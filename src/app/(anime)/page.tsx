import BaseLayout from "@/components/layout/base-layout";
import HomeLayout from "@/app/(anime)/_components/home-layout";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Home | Otakunime",
  description: "Home Page Otakunime. Build by LyntharxDev",
};

export default function Home() {
  return (
    <BaseLayout>
      <HomeLayout />
    </BaseLayout>
  );
}
