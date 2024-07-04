import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Status from "./base/Status";
import Packed from "./base/Packed";
import Select from "./base/Select";
import List from "./List";
import { listSources } from "@/lib/list";
import { useState } from "react";
// import DataTable from "./Table";
// import { columns } from "@/lib/columns";
// import { tableSources } from "@/lib/data";

const options = [
  {
    id: "1",
    value: "Active",
  },
  {
    id: "2",
    value: "Paused",
  },
];
export default function TrekCard() {
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <Card className=" shadow-xl border-none min-w-[740px] relative -top-12">
      <CardHeader className="bg-[#c9f299] rounded-t-lg p-4">
        <CardTitle className="flex items-center justify-between">
          <Status className="bg-[#e2fcef]" />
          <Packed total={listSources.length} current={currentItem} />
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-[#f7f7f2] rounded-b-lg flex p-0 min-h-[400px] ">
        {/* <DataTable columns={columns} data={tableSources} /> */}
        <div className="w-full flex items-center  flex-[70%] border-r flex-col">
          <div className="w-full p-2 flex items-center justify-center border-b">
            <Select
              options={options}
              className="w-[95%]"
              defaultName="Active"
            />
          </div>
          <div className="w-full">
            <List
              list={listSources}
              callback={(currentItem) => {
                setCurrentItem(currentItem);
              }}
            />
          </div>
        </div>
        <div className="flex-[25%]">add an item</div>
      </CardContent>
    </Card>
  );
}
