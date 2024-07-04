import { ListType } from "@/types";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

interface Props {
  options: ListType[];
  defaultName?: string;
  className?: string;
}
export default function Select({ options, className, defaultName }: Props) {
  const [value, setValue] = useState(defaultName);
  return (
    <Listbox
      value={value}
      as="div"
      className={`relative max-w-[500px] ${className}`}
      onChange={setValue}
    >
      <ListboxButton className="border p-1 rounded w-full flex items-center justify-between">
        {value}
        <ChevronDownIcon size={16} className=" opacity-80" />
      </ListboxButton>
      <ListboxOptions
        transition
        anchor="bottom start"
        className="min-w-[495px] lg:[--anchor-gap:4px] bg-white border rounded shadow-lg max-h-60 overflow-auto origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {options.map((option) => (
          <ListboxOption
            key={option.id}
            value={option.content}
            className={({ focus, selected }) =>
              `cursor-pointer select-none relative  p-2 ${
                focus ? "bg-[#d3f7d1]" : ""
              } ${selected ? "font-bold" : ""}`
            }
          >
            {({ selected }) => (
              <span className={`block truncate ${selected ? "font-bold" : ""}`}>
                {option.content}
              </span>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
