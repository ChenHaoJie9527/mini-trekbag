import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Status from "./base/Status";

export default function TrekCard() {
  return (
    <Card className=" shadow-xl border-none ">
      <CardHeader className="bg-[#c9f299] rounded-t-lg p-4">
        <CardTitle>
          <Status className="bg-[#e0eec6]" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
}
