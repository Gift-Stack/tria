"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();

  return (
    <div
      role="button"
      className={`hover:bg-surface-900 absolute flex h-9 w-9 items-center justify-center rounded-lg p-2 opacity-40 transition-opacity duration-200 ease-in-out hover:opacity-100 ${className}`}
      onClick={() => router.back()}
    >
      <Image
        src="/icons/arrow-left.svg"
        alt="arrow left"
        height={20}
        width={20}
      />
    </div>
  );
};

export default BackButton;
