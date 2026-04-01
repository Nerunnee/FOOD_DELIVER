import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { TableHeads } from "./components/TableHeads";
import { getOrders } from "@/lib/services/get-orders";
import { SelectStatus } from "./components/selectStatus";
import { FoodDetails } from "./components/FoodDetails";
import { Input } from "@/components/ui/input";

const GetOrders = async () => {
  const orders = await getOrders();

  return (
    <div className="bg-white rounded-xl mt-5">
      <Table>
        <TableHeads />
        <TableBody className="text-center">
          {orders.map((order, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <Input type="checkbox" className="w-4" />
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
    </div>
  );
};

export default GetOrders;
