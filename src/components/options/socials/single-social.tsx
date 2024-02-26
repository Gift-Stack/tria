import GradientButton from "@/components/buttons/gradient";
import Image from "next/image";

import { Social as TSocial } from "@/data/socials";

type SingleSocial =
  | { social: TSocial; others?: never }
  | { social?: never; others: TSocial[] };

export const Social = ({ social, others }: SingleSocial) => {
  const isGoogle = social?.name === "Google";
  return (
    <GradientButton
      borderRadius="rounded-2xl"
      gradientBorder={isGoogle ? "bg-google-button" : "bg-light-800"}
      borderWidth="border-0.5"
      className={`${isGoogle ? "hover:bg-google-button-active hover:text-dark-40" : "hover:shadow-social-item-active"} rounded-2xl- flex items-center gap-3 p-1.5 transition-all duration-200 ease-in-out md:p-2.5`}
    >
      {others ? (
        others.map((social, index) => (
          <div
            key={social.name}
            className={`border-light-primary bg-surface-700 flex h-9 w-9 items-center justify-center rounded-full border ${index !== 0 ? "-ml-[22px]" : ""}`}
          >
            <Image src={social.icon} alt={social.name} height={14} width={20} />
          </div>
        ))
      ) : (
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <Image src={social.icon} alt={social.name} height={24} width={24} />
        </div>
      )}
      <p className="text-light text-sm font-semibold md:text-base">
        Continue with {others ? "others" : social.name}
      </p>
    </GradientButton>
  );
};
