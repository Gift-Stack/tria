import TriaCard from "@/components/card";
import TriaCardOptions from "@/components/options";
import { ActiveState } from "@/data/socials";

export default function Home({
  searchParams,
}: {
  searchParams: { active: ActiveState };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#101010] p-5 md:p-24">
      <TriaCard active={searchParams.active}>
        <TriaCardOptions />
      </TriaCard>
    </main>
  );
}
