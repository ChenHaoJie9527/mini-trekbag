import { PaymentType } from "@/types";

export const tableSources: PaymentType[] = [
    {
        id: "1",
        amount: 100,
        status: "pending",
        email: "john@example.com"
    },
    {
        id: "2",
        amount: 500,
        status: "paid",
        email: "jane@example.com"
    },
    {
        id: "3",
        amount: 200,
        status: "failed",
        email: "sarah@example.com"
    }
]