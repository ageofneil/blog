import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
        <div className="flex justify-center items-center h-48 w-48 mx-auto">
  <Avatar className="h-full w-full">
    <AvatarImage src="/avatar.png" alt={siteConfig.author} />
    <AvatarFallback>Neil Turner</AvatarFallback>
  </Avatar>
</div>
  <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-black leading-tight text-balance max-w-5xl mx-auto">
    The People Running Your Marketing Campaigns Shouldn’t Be Grading Their Own Work
  </h1>

  <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed text-balance max-w-4xl mx-auto">
    Hi, I’m Neil. When marketing owns both execution and reporting, it’s easy for things to get blurry. I bring in third-party measurement to help teams see what’s actually driving results.
  </p>

  <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed text-balance max-w-4xl mx-auto">
    Let’s figure out the right way to measure your marketing. Whether that’s Causal Impact, Media Mix Modeling, Incrementality Testing, or something else entirely.
  </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
