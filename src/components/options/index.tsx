"use client";
import React from "react";
import { socials, eoas, ActiveState } from "@/data/socials";
import SocialsList from "./socials";
import TriaName from "./name";
import { CreateConnectorFn, useConnect } from "wagmi";
import Loader from "./loader";
import { useRouter, useSearchParams } from "next/navigation";

const TriaCardOptions = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("active");

  const setActive = (state: ActiveState) => {
    router.push(`?active=${state}`);
  };

  const { connectAsync } = useConnect();

  const connectWallet = async (connector: CreateConnectorFn | null) => {
    if (!connector) {
      alert(
        "Wallet connect isn't available for this app... Please use MetaMask",
      );
      return;
    }
    await connectAsync({ connector });
    setActive(ActiveState.NAME);
  };

  if (active === ActiveState.LOADING)
    return <Loader key={ActiveState.LOADING} />;
  return (
    <div className="bg-light-400 h-full rounded-2xl p-3 md:p-4">
      <SocialsList
        key={ActiveState.SOCIALS}
        socials={socials}
        eoas={eoas}
        maxList={2}
        nextPage={connectWallet}
        className={`${[ActiveState.SOCIALS as string, null].includes(active) ? "block" : "hidden"}`}
      />

      <TriaName
        key={ActiveState.NAME}
        nextPage={() => setActive(ActiveState.LOADING)}
        className={`${active === ActiveState.NAME ? "block" : "hidden"}`}
      />
    </div>
  );
};

export default TriaCardOptions;
