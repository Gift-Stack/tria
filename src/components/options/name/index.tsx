import Image from "next/image";
import React, { useState } from "react";
import { Inter, Montserrat } from "next/font/google";
import Lottie from "react-lottie";
import littleHeartsAnimationData from "@/lotties/little-hearts.json";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

type TriaNameProps = {
  nextPage: () => void;
};

const recommendedName = ["kunaaal123", "samuel213", "thenameisgifted"];

const TriaName = (props: TriaNameProps) => {
  const [name, setName] = useState("");

  const handleSubmitName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name) return;
    props.nextPage();
  };

  return (
    <form onSubmit={handleSubmitName}>
      <p className="text-light-secondary py-2 text-lg font-semibold leading-[26.4px] md:text-[22px]">
        Create your Tria name
      </p>

      <div className="flex items-center gap-1.5 py-2 md:gap-2">
        <div className="bg-input-gradient flex-1 rounded-xl p-0.5">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-light-80 bg-light-400 w-full rounded-xl px-4 py-2 font-semibold outline-none md:py-3"
          />
        </div>
        <button
          disabled={!name}
          className="bg-google-button-active w-24 rounded-2xl px-3 py-2.5 font-semibold text-[#FAFAFA] md:w-[120px] md:py-3.5"
        >
          Next
        </button>
      </div>

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

      <div className="flex flex-wrap items-center gap-2 pb-5 pt-3">
        {recommendedName.map((name, index) => (
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

      <div className="border-light-800 flex items-center gap-2.5 rounded-xl border p-4">
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
      </div>
    </form>
  );
};

export default TriaName;
