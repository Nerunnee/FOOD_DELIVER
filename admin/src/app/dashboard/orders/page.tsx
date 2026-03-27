import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { getUsers } from "@/lib/services/get-users";
import { TableHeaders } from "./components/order-headers";

const GetOrders = async () => {
  const users = await getUsers();

  return (
    <Table className="ml-6 mt-6 mr-10 mb-13">
      <TableHeaders />
      <TableBody>
        {users.map((user, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell key={user.id}>{user.email}</TableCell>
              <TableCell>
                {user.orders.map((order) => {
                  return (
                    <div key={order.id}>
                      {order.foodOrderItems.map((item) => {
                        return <div>{item.quantity}</div>;
                      })}
                    </div>
                  );
                })}
              </TableCell>
              <TableCell>
                {user.orders.map((order) => {
                  return <div key={order.id}>$ {order.totalPrice}</div>;
                })}
              </TableCell>
              <TableCell>
                {user.orders.map((order) => {
                  return (
                    <div key={order.id}>
                      {new Date(order.createdAt).toLocaleString()}
                    </div>
                  );
                })}
              </TableCell>
              <TableCell>
                {user.orders.map((order) => {
                  return (
                    <div key={order.id}>
                      {order.foodOrderItems.map((item) => {
                        return <div> delivery address {item.foodId}</div>;
                      })}
                    </div>
                  );
                })}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default GetOrders;
