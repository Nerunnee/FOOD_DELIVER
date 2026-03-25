import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const tableHeads = [
  { id: 1, header: "№" },
  { id: 2, header: "Customer" },
  { id: 3, header: "Food" },
  { id: 4, header: "Date" },
  { id: 5, header: "Total" },
  { id: 6, header: "Delivery Address" },
  { id: 7, header: "Delivery status" },
];

export const TableHeaders = () => {
  return (
    <TableHeader>
      <TableRow>
        {tableHeads.map((head) => (
          <div key={head.id}>
            <TableHead>{head.header}</TableHead>
          </div>
        ))}
      </TableRow>
    </TableHeader>
  );
};
