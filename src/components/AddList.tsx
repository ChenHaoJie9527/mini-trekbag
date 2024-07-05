import { Input } from "@headlessui/react";
import Button from "./base/Button";
import { useState } from "react";
import { v4 } from "uuid";

interface Props {
  callback?: (value: unknown) => void;
}

function getAddItem(value: string) {
  return {
    id: v4(),
    content: value,
    status: false,
    checked: false,
  };
}

export default function AddList({ callback }: Props) {
  const [value, setValue] = useState("");
  const onAdd = () => {
    callback?.(getAddItem(value));
  };
  return (
    <div className="w-full space-y-2">
      <p className="font-bold">Add an Item</p>
      <Input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        className="border rounded p-1 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        placeholder="add item"
      />
      <Button onClick={onAdd}>Add to List</Button>
    </div>
  );
}
