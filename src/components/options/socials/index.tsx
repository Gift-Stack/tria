import React from "react";
import { Eoa as TEoa, Social as TSocial } from "@/data/socials";
import Image from "next/image";
import GradientButton from "@/components/buttons/gradient";

interface SocialsListProps {
  socials: Readonly<TSocial[]>;
  eoas: Readonly<TEoa[]>;
  maxList: 2;
  nextPage: () => void;
}

type SingleSocial =
  | { social: TSocial; others?: never }
  | { social?: never; others: TSocial[] };

const SocialsList = (props: SocialsListProps) => {
  const { eoas, socials, maxList, nextPage } = props;
  const postMax = socials.slice(maxList);
  return (
    <>
      <div className="flex flex-col gap-3">
        {socials.slice(0, maxList).map((social) => (
          <Social social={social} key={social.name} />
        ))}
        <Social others={postMax} />
      </div>

      <div className="relative flex items-center gap-2 py-3 md:py-5">
        <div className="bg-light-10 h-px w-full md:h-0.5" />
        <p className="text-light-tertiary px-2 text-xs font-semibold">OR</p>
        <div className="bg-light-10 h-px w-full md:h-0.5" />
      </div>

      <div className="flex gap-1.5 md:gap-3">
        {eoas.map((eoa) => (
          <Eoa key={eoa.name} eoa={eoa} goToNextPage={nextPage} />
        ))}
      </div>
    </>
  );
};

const Social = ({ social, others }: SingleSocial) => {
  const isGoogle = social?.name === "Google";
  return (
    <GradientButton
      borderRadius="2xl"
      gradientBorder={isGoogle ? "google-button" : "light-800"}
      borderWidth="0.5"
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

const Eoa = ({
  eoa,
  goToNextPage,
}: {
  eoa: TEoa;
  goToNextPage: () => void;
}) => (
  <div
    role="button"
    key={eoa.name}
    className="border-light-primary hover:shadow-social-item-active flex flex-1 items-center justify-center gap-1 rounded-2xl border p-2 md:gap-2 md:p-3"
    onClick={goToNextPage}
  >
    <Image
      src={eoa.icon}
      alt={eoa.name}
      height={28}
      width={28}
      className="rounded-full"
    />
    <p className="text-light-80 text-sm font-medium md:text-base">{eoa.name}</p>
  </div>
);

export default SocialsList;
