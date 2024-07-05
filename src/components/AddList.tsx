import { Button, Input } from "@headlessui/react";
import React from "react";

export default function AddList() {
  return (
    <div className="w-full space-y-2">
      <p className="font-bold">Add an Item</p>
      <Input
        className="border rounded p-1 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        placeholder="add item"
      />
      <Button className="rounded w-full bg-[#b8dc7e] py-2 text-white px-4 text-sm  data-[hover]:bg-[#cde6a6] data-[active]:bg-[#cde6a6]">
        Add to List
      </Button>
    </div>
  );
}
