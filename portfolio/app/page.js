import { TypingEffectComponent } from "@/components/tools/TypingEffect";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex flex-col justify-center w-1/2 min-h-[80vh] space-y-2">
            <TypingEffectComponent fullText="Seebastián Amin, Fariña" />
            <p>Web Developer</p>
            <button className="bg-white text-black w-1/2 hover:bg-black hover:text-white hover:border-white border font-bold" >
              Download CV
            </button>
          </div>
          <div className="flex flex-col justify-center items-center bg-white w-1/2 min-h-[80vh]">
            <Image src="/next.svg" width={500} height={500} />
          </div>
        </div>
      </div>
    </main>
  );
}
