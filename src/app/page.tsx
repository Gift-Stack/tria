import TriaCard from "@/components/card";
import Image from "next/image";
import { socials, eoas } from "@/data/socials";
import SocialsList from "@/components/options/socials";
import TriaCardOptions from "@/components/options";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#101010] p-5 md:p-24">
      <TriaCard>
        <TriaCardOptions />
      </TriaCard>
    </main>
  );
}
