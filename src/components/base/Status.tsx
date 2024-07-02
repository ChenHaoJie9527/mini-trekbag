import React from "react";

interface Props {
    className?: string;
}
export default function Status({ className }: Props) {
  return (
    <ul className=" list-none flex items-center justify-start min-w-[200px] space-x-2">
      <li className={`w-5 h-5 ${className} rounded-[50%]`}></li>
      <li className={`w-5 h-5 ${className} rounded-[50%]`}></li>
      <li className={`w-5 h-5 ${className} rounded-[50%]`}></li>
    </ul>
  );
}
