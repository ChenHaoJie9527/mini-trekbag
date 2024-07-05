import React from "react";
import Button from "./base/Button";

export default function Complete() {
  return (
    <ul className="w-full space-y-2 list-none flex flex-col">
      <li className="w-full">
        <Button>Mark all as complete</Button>
      </li>
      <li>
        <Button>Mark all as incomplete</Button>
      </li>
      <li>
        <Button>Reset to initial</Button>
      </li>
      <li>
        <Button>remove all items</Button>
      </li>
    </ul>
  );
}
