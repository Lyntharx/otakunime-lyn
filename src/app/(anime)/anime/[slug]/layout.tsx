import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;

  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} | Otakunime`,
    description: `Anime Page for ${formattedTitle} | Otakunime. Build by LyntharxDev`,
  };
}

export default function AnimeSlug({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
