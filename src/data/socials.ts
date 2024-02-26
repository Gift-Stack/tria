import { metaMask } from "wagmi/connectors";

export const socials = [
  {
    name: "Google",
    url: "https://google.com",
    icon: "/icons/google.svg",
  },
  {
    name: "X (formerly Twitter)",
    url: "https://twitter.com",
    icon: "/icons/x.svg",
  },
  {
    name: "Phone",
    url: "https://instagram.com",
    icon: "/icons/phone.svg",
  },
  {
    name: "Email",
    url: "https://instagram.com",
    icon: "/icons/mail.svg",
  },
] as const;

export const eoas = [
  {
    name: "Metamask",
    url: "https://metamask.io/",
    icon: "/icons/metamask.svg",
    connector: metaMask(),
    color: "white",
  },
  {
    name: "WalletConnect",
    url: "https://walletconnect.org/",
    icon: "/icons/walletconnect.svg",
    connector: null,
    color: "#3B99FC",
  },
] as const;

export type Social = (typeof socials)[number];
export type Eoa = (typeof eoas)[number];
export enum ActiveState {
  SOCIALS = "social",
  NAME = "name",
  LOADING = "loading",
}
