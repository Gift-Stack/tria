"use client";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "@/wallet/config";
import { FC, PropsWithChildren } from "react";

const queryClient = new QueryClient();

const WalletProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <WagmiProvider reconnectOnMount={false} config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default WalletProvider;
