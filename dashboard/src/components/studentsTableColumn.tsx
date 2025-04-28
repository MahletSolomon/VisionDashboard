import { Student } from "@/types/student";
import { ColumnDef } from "@tanstack/react-table";

export const StudentColumns: ColumnDef<Student>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "paymentStatus",
    header: "Payments",
  },
  {
    accessorKey: "average",
    header: "Total Average",
  },
  {
    accessorKey: "promotionStatus",
    header: "Promotion to next grade",
  },
];
