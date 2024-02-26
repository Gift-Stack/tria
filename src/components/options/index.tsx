"use client";
import React, { useState } from "react";
import { socials, eoas } from "@/data/socials";
import Lottie from "react-lottie";
import gridLoaderAnimationData from "@/lotties/loader-grid.json";
import SocialsList from "./socials";
import TriaName from "./name";

enum ActiveState {
  SOCIALS = 0,
  NAME = 1,
  LOADING = 2,
}

const TriaCardOptions = () => {
  const [active, setActive] = useState(ActiveState.SOCIALS);

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
      {active === ActiveState.SOCIALS && (
        <SocialsList
          key={ActiveState.SOCIALS}
          socials={socials}
          eoas={eoas}
          maxList={2}
          nextPage={() => setActive(ActiveState.NAME)}
        />
      )}

      {active === ActiveState.NAME && (
        <TriaName
          key={ActiveState.NAME}
          nextPage={() => setActive(ActiveState.LOADING)}
        />
      )}
    </div>
  );
};

export default TriaCardOptions;
