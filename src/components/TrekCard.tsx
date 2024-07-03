import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Status from "./base/Status";
import Packed from "./base/Packed";
import DataTable from "./Table";
import { columns } from "@/lib/columns";
import { tableSources } from "@/lib/data";

export default function TrekCard() {
  return (
    <Card className=" shadow-xl border-none min-w-[740px] relative -top-12">
      <CardHeader className="bg-[#c9f299] rounded-t-lg p-4">
        <CardTitle className="flex items-center justify-between">
          <Status className="bg-[#e2fcef]" />
          <Packed />
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-[#eef4ed] rounded-b-lg flex p-0">
        <DataTable columns={columns} data={tableSources} />
      </CardContent>
    </Card>
  );
}
