import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tableHeads = [
  { id: 1, header: "" },
  { id: 2, header: "№" },
  { id: 3, header: "Customer" },
  { id: 4, header: "Food" },
  { id: 5, header: "Date" },
  { id: 6, header: "Total" },
  { id: 7, header: "Delivery Address" },
  { id: 8, header: "Delivery status" },
];

export const TableHeads = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="flex justify-between items-center">
          {tableHeads.map((head) => (
            <TableHead key={head.id}>
              <TableCell>{head.header}</TableCell>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
    </Table>
  );
};
