import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import Member from "./members";

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <Member settings={settings} authors={authors} />;
}

// export const revalidate = 60;
