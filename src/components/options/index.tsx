"use client";
import React, { useState } from "react";
import { socials, eoas } from "@/data/socials";
import Lottie from "react-lottie";
import gridLoaderAnimationData from "@/lotties/loader-grid.json";
import SocialsList from "./socials";
import TriaName from "./name";
import { CreateConnectorFn, useConnect } from "wagmi";

enum ActiveState {
  SOCIALS = 0,
  NAME = 1,
  LOADING = 2,
}

const TriaCardOptions = () => {
  const [active, setActive] = useState(ActiveState.SOCIALS);
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
    return (
      <Lottie
        key={ActiveState.LOADING}
        speed={2}
        options={{ animationData: gridLoaderAnimationData }}
        width="100%"
        style={{
          borderRadius: 20,
          position: "absolute",
          top: "0",
          left: "0",
          cursor: "auto",
        }}
      />
    );
  return (
    <div className="bg-light-400 h-full rounded-2xl p-2 md:p-4">
      <SocialsList
        key={ActiveState.SOCIALS}
        socials={socials}
        eoas={eoas}
        maxList={2}
        nextPage={connectWallet}
        className={`${active === ActiveState.SOCIALS ? "block" : "hidden"}`}
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
