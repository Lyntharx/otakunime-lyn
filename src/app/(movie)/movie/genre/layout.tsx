import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Genres | Otakunime",
  description:
    "Explore movies by genre. Find action, drama, comedy, thriller, and more. Built by LyntharxDev",
};

export default function MovieGenreLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
