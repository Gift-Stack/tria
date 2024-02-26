import { ActiveState } from "@/data/socials";
import Image from "next/image";
import React, { FC, PropsWithChildren } from "react";
import BackButton from "../buttons/back";

const TriaCard: FC<PropsWithChildren<{ active: ActiveState }>> = ({
  active,
  children,
}) => {
  return (
    <div className="shadow-card-parent bg-card rounded-2.5xl w-full max-w-[458px] p-0.5 md:scale-90">
      <div className="bg-surface-black rounded-2.5xl relative h-[95vh] min-h-[550px] w-full pb-2 md:h-[80vh] md:min-h-[840px] md:pb-4">
        {[ActiveState.LOADING, ActiveState.NAME].includes(active) && (
          <BackButton className="left-4 top-5 z-[15]" />
        )}
        <div className="flex h-full flex-col justify-between">
          <div className="before:bg-grid before:rounded-2.5xl relative flex h-full w-full flex-col items-center pt-10 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-cover before:bg-center before:bg-no-repeat before:opacity-50 md:pt-20">
            <div className="absolute z-10">
              <Image
                src="/tria-logo.svg"
                alt="Tria Logo"
                height={125}
                width={125}
                className="ml-[26px]"
              />
              <p className="text-light-secondary py-5 text-center text-base md:text-[22px] md:leading-[27.7px]">
                Login to <br /> <span className="font-bold">tria</span> Demo
              </p>
            </div>
          </div>

          <div className="rounded-2.5xl h-full- w-full px-4">{children}</div>
          <div className="flex items-center justify-center py-6">
            <a
              href="https://www.tria.so/"
              target="_blank"
              className="hover:bg-surface-900 flex items-center gap-2.5 rounded-2xl p-2.5 opacity-60 transition-all duration-200 ease-in-out hover:opacity-100"
            >
              <Image src="/tria.svg" alt="Tria" height={20} width={20} />
              <p className="text-light-100 text-sm font-semibold leading-4">
                Powered by Tria
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriaCard;
