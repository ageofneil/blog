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
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Hello, I&apos;m Neil
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
          I solve marketing problems using data.
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
