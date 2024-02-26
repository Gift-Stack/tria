import React from "react";
import { Eoa as TEoa, Social as TSocial } from "@/data/socials";
import { Social } from "./single-social";
import { Eoa } from "./eoa";
import { CreateConnectorFn } from "wagmi";

interface SocialsListProps {
  socials: Readonly<TSocial[]>;
  eoas: Readonly<TEoa[]>;
  maxList: 2;
  nextPage: (connector: CreateConnectorFn | null) => Promise<void>;
  className: string;
}

const SocialsList = (props: SocialsListProps) => {
  const { className, eoas, socials, maxList, nextPage } = props;
  const postMax = socials.slice(maxList);
  return (
    <div className={className}>
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
    </div>
  );
};

export default SocialsList;
