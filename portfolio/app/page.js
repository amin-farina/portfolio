import { TypingEffectComponent } from "@/components/tools/TypingEffect";
import Image from "next/image";
import { IconsTechnologies } from "@/components/tools/IconsTechnologies";
import "../public/assets/css/TypingEffect.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex flex-col justify-center w-1/2 min-h-[80vh] space-y-4">
            <span>Sebastián Amin, Fariña</span>
            <div className="italic">
              <p>
                I am Full Stack Developer, I have experience using modern
                technologies like React, Node.js and AWS.
              </p>
              <p>
                I'm continuously seeking new challenges to enhance my skills and
                contribute to innovative projects.
              </p>
            </div>

            <a
              href="/assets/files/CV - Sebastian Amin Fariña .pdf"
              download
              className="bg-white w-1/2 my-6 flex justify-center text center text-black py-2 hover:bg-black hover:text-white hover:border-white border font-bold rounded-lg"
            >
              Download CV
            </a>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2 min-h-[80vh] ">
            <Image
              src="/assets/img/personalPics/fotor-ai-1-removebg.png"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </div>
        <IconsTechnologies />
      </div>
    </main>
  );
}
