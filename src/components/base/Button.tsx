import React from "react";
import { Button as HeadlessButton } from "@headlessui/react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: Props) {
  return (
    <HeadlessButton
      onClick={onClick}
      className="rounded w-full bg-[#b8dc7e] py-2 text-white px-4 text-sm  data-[hover]:bg-[#cde6a6] data-[active]:bg-[#cde6a6]"
    >
      {children}
    </HeadlessButton>
  );
}
