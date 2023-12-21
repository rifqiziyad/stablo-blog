import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default: "01mate002",
      // template: "%s | Stablo"
    },
    description:
      settings?.description ||
      "Stablo - popular open-source next.js and sanity blog template",
    keywords: ["Unpam", "Matematika", "01mate002"],
    authors: [{ name: "Rifqi Ziyad Imtinan" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url: "https://media-cgk1-1.cdn.whatsapp.net/v/t61.24694-24/370304405_616659050663819_5900385321440311476_n.jpg?ccb=11-4&oh=01_AdRhF1xd0-8biKIeV5GYswl6iU3KRqFjr1bRXOdzmXBE2Q&oe=6590ACE1&_nc_sid=e6ed6c&_nc_cat=111",
          width: 800,
          height: 600
        }
      ]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} logo={"https://media-cgk1-1.cdn.whatsapp.net/v/t61.24694-24/370304405_616659050663819_5900385321440311476_n.jpg?ccb=11-4&oh=01_AdRhF1xd0-8biKIeV5GYswl6iU3KRqFjr1bRXOdzmXBE2Q&oe=6590ACE1&_nc_sid=e6ed6c&_nc_cat=111"} />

      <div>{children}</div>

      {/* <Footer {...settings} /> */}
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
