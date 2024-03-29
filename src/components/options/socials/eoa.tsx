import Image from "next/image";
import { Eoa as TEoa } from "@/data/socials";
import { CreateConnectorFn } from "wagmi";

export const Eoa = ({
  eoa,
  goToNextPage,
}: {
  eoa: TEoa;
  goToNextPage: (connector: CreateConnectorFn | null) => void;
}) => (
  <div
    role="button"
    key={eoa.name}
    className="border-light-primary hover:shadow-social-item-active flex flex-1 items-center justify-center gap-1 rounded-2xl border p-2 md:gap-2 md:p-3"
    onClick={() => goToNextPage(eoa.connector)}
  >
    <div
      className="flex h-7 w-7 items-center justify-center rounded-full"
      style={{ background: eoa.color }}
    >
      <Image src={eoa.icon} alt={eoa.name} height={21} width={21} />
    </div>
    <p className="text-light-80 text-sm font-medium md:text-base">{eoa.name}</p>
  </div>
);
