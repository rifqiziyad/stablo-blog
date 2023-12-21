import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        01Mate002 All Base🤙
      </h1>
      {/* <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div> */}

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.filter((data) => !data.name.includes(",")).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <>
            {/* <div> */}
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 mb-5">
              {/* <Link href={`/author/${author?.slug}`}> */}
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              {/* </Link> */}
            {/* </div> */}
              <h5 style={{position: 'absolute', bottom: 0, textAlign: "center", backgroundColor: "grey", color: "white", width: "100%", fontSize: "15px"}}>{author?.name}</h5>
            </div>
            </>
          );
        })}
      </div>

      {/* <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          We provide real-time connectivity to enable software
          providers and financial institutions to build integrated
          products for their small business customers.
        </p>
        <p>
          Our API infrastructure is leveraged by clients ranging from
          lenders to corporate card providers and business forecasting
          tools, with use cases including automatic reconciliation,
          business dashboarding, and loan decisioning.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div> */}
    </Container>
  );
}
