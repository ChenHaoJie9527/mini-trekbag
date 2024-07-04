import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

type Options = {
  id: string;
  value: string;
};

interface Props {
  options: Options[];
  defaultName?: string;
  className?: string;
}
export default function Select({ options, defaultName, className }: Props) {
  const [value, setValue] = useState(defaultName);
  return (
    <Listbox
      value={value}
      as="div"
      className={`relative max-w-[450px] ${className}`}
      onChange={setValue}
    >
      <ListboxButton className="border p-1 rounded w-full flex items-center justify-between">
        {value}
        <ChevronDownIcon size={16} className=" opacity-80" />
      </ListboxButton>
      <ListboxOptions
        transition
        anchor="bottom start"
        className="min-w-[450px] lg:[--anchor-gap:4px] bg-white border rounded shadow-lg max-h-60 overflow-auto origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {options.map((option) => (
          <ListboxOption
            key={option.id}
            value={option.value}
            className={({ focus, selected }) =>
              `cursor-pointer select-none relative  p-2 ${
                focus ? "bg-blue-100" : ""
              } ${selected ? "font-bold" : ""}`
            }
          >
            {({ selected }) => (
              <span className={`block truncate ${selected ? "font-bold" : ""}`}>
                {option.value}
              </span>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
