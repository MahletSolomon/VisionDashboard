export type PaymentStatus = "paid" | "in review" | "overdue";
export type PromotionStatus = "approved" | "pending" | "declined";

export interface Student {
  id: number;
  name: string;
  marks: number;
  attendance: boolean;
  gender: "M" | "F";
  age: number;
  paymentStatus: PaymentStatus;
  promotionStatus: PromotionStatus;
  totalAverage: number;
}

