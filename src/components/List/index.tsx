import { ListType } from "@/types";
import { X } from "lucide-react";
import { Checkbox } from "@headlessui/react";
import { useState } from "react";

interface Props {
  list: ListType[];
  callback?: (currentItem: number) => void;
}
export default function List({ list, callback }: Props) {
  const [targetList, setTargetList] = useState(list);
  const onCheckedChange = (id: string | number, checked: boolean) => {
    const filterTargetList = targetList.map((item) => {
      if (item.id === id) {
        item.checked = !checked;
      }
      return item;
    });
    const currentItem = filterTargetList.filter(
      (item) => item.checked === true
    );
    callback?.(currentItem.length);
    setTargetList(filterTargetList);
  };

  const removeChange = (id: number | string) => {
    const filterTargetList = targetList.filter((item) => item.id!== id);
    setTargetList(filterTargetList);
  };

  return (
    <ul className="w-full flex flex-col list-none">
      {Boolean(targetList.length) &&
        targetList.map((item) => {
          return (
            <li
              className={`flex items-center w-full min-h-12 px-6 border-b justify-between hover:bg-[#d3f7d1] 
                ${item.checked && "bg-[#d3f7d1]"}`}
              key={item.id}
            >
              <div className="flex items-center space-x-2">
                <Checkbox
                  as="div"
                  className="group size-5 rounded-[2px] bg-white/10 border p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
                  checked={item.checked}
                  onChange={() => {
                    onCheckedChange(item.id, item.checked);
                  }}
                >
                  {item.checked && (
                    <svg
                      className=" opacity-1 group-data-[checked]:opacity-100"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="#000"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Checkbox>
                <span>{item.content}</span>
              </div>
              <X
                size={16}
                color="#e70808"
                strokeWidth={3}
                onClick={() => {
                  removeChange(item.id);
                }}
                className=" cursor-pointer"
              />
            </li>
          );
        })}
    </ul>
  );
}
