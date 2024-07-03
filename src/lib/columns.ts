import { PaymentType } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<PaymentType>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

