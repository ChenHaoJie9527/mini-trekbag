export type PaymentType = {
    id: string;
    amount: number;
    status: string;
    email: string;
};

export type ListType = {
    id: string | number;
    content: string;
    checked: boolean;
    status: boolean;
}