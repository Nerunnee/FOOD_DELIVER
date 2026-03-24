import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { getUsers } from "@/lib/services/get-users";
import { MoreHorizontalIcon } from "lucide-react";
import { TableHeaders } from "./components/order-headers";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
              <TableCell>
                <Status />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default GetOrders;

export const Status = async () => {
  const users = await getUsers();
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {/* <Button variant="outline">PENDING</Button> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontalIcon />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </DialogTrigger>

        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Change delivery state</DialogTitle>
            <DialogDescription>
              {users.map((user) =>
                user.orders.map((order) => {
                  return (
                    <Button key={order.id} variant="ghost">
                      {order.status}
                    </Button>
                  );
                }),
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

<TableCell className="text-right">
  <DropdownMenuContent align="end">
    <Button>
      {/* {orders.map((order) => (
                  <TableCell className="flex flex-col">
                    {order.status}
                  </TableCell>
                ))} */}
    </Button>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</TableCell>;
