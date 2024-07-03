import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

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
  return (
    <Listbox as="div" className={`relative ${className}`}>
      <ListboxButton className="border bg-[#eeeeee] p-1 rounded w-full text-left">
        {defaultName || "Select an option"}
      </ListboxButton>
      <ListboxOptions className="absolute mt-10 w-full bg-white border rounded shadow-lg max-h-60 overflow-auto">
        {options.map((option) => (
          <ListboxOption
            key={option.id}
            value={option.value}
            className={({ active, selected }) =>
              `cursor-pointer select-none relative p-2 ${
                active ? "bg-blue-100" : ""
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
