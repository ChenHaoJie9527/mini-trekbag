import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Status from "./base/Status";
import Packed from "./base/Packed";
import Select from "./base/Select";
import List from "./List";
import { listSources } from "@/lib/list";
import { useMemo, useState } from "react";
import { head } from "lodash";
// import DataTable from "./Table";
// import { columns } from "@/lib/columns";
// import { tableSources } from "@/lib/data";

export default function TrekCard() {
  const [list, setList] = useState(listSources);
  const [currentItem, setCurrentItem] = useState(0);
  const firstItem = head(list);
  const targetList = useMemo(() => {
    return list.filter(item => item.id !== '0')
  }, [list]);
  return (
    <Card className=" shadow-xl border-none min-w-[740px] relative -top-12">
      <CardHeader className="bg-[#c9f299] rounded-t-lg p-4">
        <CardTitle className="flex items-center justify-between">
          <Status className="bg-[#e2fcef]" />
          <Packed total={targetList.length} current={currentItem} />
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-[#f7f7f2] rounded-b-lg flex p-0 min-h-[400px] ">
        {/* <DataTable columns={columns} data={tableSources} /> */}
        <div className="w-full flex items-center  flex-[70%] border-r flex-col">
          <div className="w-full p-2 flex items-center justify-center border-b">
            <Select
              options={targetList}
              className="w-[95%]"
              defaultName={firstItem?.content}
            />
          </div>
          <div className="w-full">
            <List
              list={targetList}
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
