import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { TableHeads } from "./components/TableHeads";
import { getOrders } from "@/lib/services/get-orders";
import { SelectStatus } from "./components/selectStatus";
import { FoodDetails } from "./components/FoodDetails";
import { Input } from "@/components/ui/input";

const GetOrders = async () => {
  const orders = await getOrders();

  return (
    <Table className="ml-6 mt-6 mr-10 mb-13 flex flex-col w-300 bg-white rounded-xl">
      <TableHeads />
      <TableBody>
        {orders.map((order, index) => {
          return (
            <TableRow
              key={index}
              className="flex justify-between items-center p-5"
            >
              <TableCell>
                <Input type="checkbox" />
              </TableCell>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{order.user.email}</TableCell>
              <TableCell>
                <FoodDetails order={order} />
              </TableCell>
              <TableCell>{order.totalPrice}₮</TableCell>
              <TableCell>
                {new Date(order.createdAt).toLocaleString()}
              </TableCell>
              <TableCell>{order.user.address}</TableCell>
              <TableCell>
                <SelectStatus orderId={order.id} orderStatus={order.status} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default GetOrders;
