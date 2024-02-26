import Image from "next/image";
import React, { useState } from "react";
import { Inter, Montserrat } from "next/font/google";
import Lottie from "react-lottie";
import littleHeartsAnimationData from "@/lotties/little-hearts.json";
import GradientButton from "@/components/buttons/gradient";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

type TriaNameProps = {
  nextPage: () => void;
  className: string;
};

const TriaName = (props: TriaNameProps) => {
  const [name, setName] = useState("");
  const [recommendedNames, setRecommendedNames] = useState<Array<string>>([]);

  const handleSubmitName = (
    event: React.FormEvent<HTMLFormElement | HTMLDivElement>,
  ) => {
    event.preventDefault();
    if (!name) {
      alert("Please enter a name");
      return;
    }

    // PS: This is a dummy workaround to display the "unavailable name" error message
    if (!name.toLowerCase().match(/(?:_1234|234|5678)$/)) {
      setRecommendedNames([`${name}_1234`, `${name}234`, `${name}5678`]);
      return;
    }
    props.nextPage();
  };

  return (
    <form onSubmit={handleSubmitName} className={props.className}>
      <p className="text-light-secondary py-2 text-lg font-semibold leading-[26.4px] md:text-[22px]">
        Create your Tria name
      </p>

      <div className="flex items-center gap-1.5 py-2 md:gap-2">
        <div className="bg-input-gradient flex-1 rounded-xl p-0.5">
          <div className="bg-surface-900 relative rounded-xl">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-light-80 bg-light-400 caret-surface-purple caret-2 w-full rounded-xl py-2 pl-4 pr-16 font-semibold outline-none md:py-3"
            />
            <p className="text-light-tertiary absolute right-4 top-[50%] -translate-y-1/2 font-semibold">
              @tria
            </p>
          </div>
        </div>
        <GradientButton
          borderRadius="rounded-2xl"
          gradientBorder="bg-google-button"
          borderWidth="border-0.5"
          onClick={handleSubmitName}
          role="button"
          className="hover:bg-google-button-active w-24 px-3 py-2.5 text-center font-semibold text-[#FAFAFA] md:w-[120px] md:py-3"
        >
          Next
        </GradientButton>
      </div>

      {!!recommendedNames.length && (
        <>
          <div className="flex items-center gap-1">
            <Image
              src="/icons/close-circle.svg"
              alt="Close button"
              height={24}
              width={24}
            />
            <p className="text-sm text-[#DA4343] md:text-base">
              Username not available
            </p>
          </div>

          <p className="text-light-50 pt-3 text-xs">Recommended:</p>

          <div className="flex flex-wrap items-center gap-2 pb-2 pt-3">
            {recommendedNames.map((name, index) => (
              <button
                key={`${name}-${index}`}
                type="button"
                onClick={() => setName(name)}
                className="rounded-2.5xl border-light-800 text-light-secondary bg-dark-500 border px-4 py-2 text-sm"
              >
                {name}
              </button>
            ))}
          </div>
        </>
      )}

      <div className="border-light-800 relative mt-3 flex items-center gap-2.5 overflow-hidden rounded-xl border p-4">
        <div className="h-8 w-8">
          <Lottie
            options={{ animationData: littleHeartsAnimationData }}
            height={32}
            width={32}
          />
        </div>
        <p className={`${montserrat.className} text-light-tertiary text-xs`}>
          Your{" "}
          <span className={`${inter.className} text-light-secondary font-bold`}>
            @tria
          </span>{" "}
          is like Gmail, for Web3. Pay, receive and log-in to apps on any
          device, and blockchain.
        </p>

        <Image
          src="/animation/glow.svg"
          alt=""
          height={208}
          width={280}
          className="animate-glow absolute top-0 h-full"
        />
      </div>
    </form>
  );
};

export default TriaName;
