import { Button } from "@/components/atoms/button";
import { Separator } from "@/components/atoms/separator";
import Typography from "@/components/atoms/typography";
import Certification from "@/components/svg/certification";
import ReadingBook from "@/components/svg/reading-book";
import ReadingTime from "@/components/svg/reading-time";
import Teacher from "@/components/svg/teacher";

export default function Home() {
  return (
    <div className="flex w-full h-full flex-col px-6 justify-center items-center m-auto gap-4">
      <section className="min-h-[calc(100vh-4.438rem)] md:min-h-[calc(100vh-4.938rem)] flex flex-col md:grid md:grid-cols-2 w-full h-auto m-auto justify-center items-center gap-6 py-6 max-w-7xl">
        <ReadingTime className="max-w-lg m-auto mr-0" />
        <div className="flex flex-col max-w-md text-center md:text-left gap-8 justify-center md:justify-start align-middle items-center md:items-start grow">
          <div className="flex flex-col gap-1">
            <Typography as="h1" size={"xl"} className="text-foreground/90">
              Welcome to{" "}
              <span className="font-brand text-primary">Lingualoomm</span>
            </Typography>
            <Typography as="p" size={"sub"}>
              A platform for learning and teaching languages
            </Typography>
          </div>
          <Typography size={"xs"} color={"light"}>
            Unlock new cultures and opportunities with our live and online
            courses in English, French, Japanese, German, Tamil, Hindi, and
            more. Climb to fluency with expert instructors and interactive
            lessons. Join us and take your first step upward.
          </Typography>
          <Button className="md:w-auto w-full">Request a quote</Button>
        </div>
      </section>
      <Separator className="m-0 mb-12 md:mb-36 py-0" />
      <section className="flex flex-col gap-8 md:gap-24 max-w-6xl">
        <Typography as="h1" size={"xl"} className="text-center">
          Why learn a language with{" "}
          <span className="font-brand text-secondary">Lingualoomm</span>?
        </Typography>
        <div className="flex flex-col gap-8 md:gap-24 max-w-4xl">
          <div className="p-4 flex flex-col md:flex-row gap-8 items-center">
            <ReadingBook className="max-w-[200px] p-0" />
            <div className="flex flex-col gap-4 md:text-left text-center">
              <div className="flex flex-col">
                <Typography as="h4" size={"lg"} className="text-foreground/90">
                  Learn From Anywhere
                </Typography>
                <Typography as="p" size={"sub"}>
                  Study on Your Terms
                </Typography>
              </div>
              <Typography as="p" size={"xs"} className="text-foreground/80">
                Access high-quality lessons wherever life takes you. Our
                mobile-friendly platform lets you dive into interactive
                exercises and comprehensive resources anytime, ensuring your
                language learning journey remains uninterrupted—even on the go.
              </Typography>
            </div>
          </div>
          <div className="p-4 md:px-8 flex flex-col md:flex-row-reverse gap-2 items-center">
            <Teacher className="max-w-[200px] p-0" />
            <div className="flex flex-col gap-4 md:text-right text-center">
              <div className="flex flex-col">
                <Typography as="h4" size={"lg"} className="text-foreground/90">
                  Live Classes with Experts
                </Typography>
                <Typography as="p" size={"sub"}>
                  Engage in Real-Time
                </Typography>
              </div>
              <Typography as="p" size={"xs"} className="text-foreground/80">
                Experience the power of live, interactive sessions guided by
                seasoned professionals. Participate in dynamic discussions, ask
                questions on the spot, and receive personalized feedback that
                accelerates your learning progress.
              </Typography>
            </div>
          </div>
          <div className="p-4 flex flex-col md:flex-row gap-8 items-center">
            <Certification className="max-w-[200px] p-0" />
            <div className="flex flex-col gap-4 md:text-left text-center">
              <div className="flex flex-col">
                <Typography as="h4" size={"lg"} className="text-foreground/90">
                  Trusted Multilingual Instruction
                </Typography>
                <Typography as="p" size={"sub"}>
                  Global Expertise at Your Fingertips
                </Typography>
              </div>
              <Typography as="p" size={"xs"} className="text-foreground/80">
                Rely on our network of over 40 experienced tutors who specialize
                in multiple languages. With our trusted team, you&apos;ll
                receive tailored support and guidance, empowering you to excel
                in your language learning journey regardless of your chosen
                language.
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
