"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { putOrder } from "@/lib/services/put-order";

type SelectStatusProps = {
  orderStatus: string;
  orderId: number;
};

export function SelectStatus({ orderId, orderStatus }: SelectStatusProps) {
  const [status, setStatus] = useState(orderStatus);
  const router = useRouter();

  const onChechedStatus = async (status: string) => {
    setStatus(status);

    await putOrder(orderId, status);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{status}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={status === "PENDING"}
            onCheckedChange={() => onChechedStatus("PENDING")}
          >
            PENDING
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={status === "DELIVERED"}
            onCheckedChange={() => onChechedStatus("DELIVERED")}
          >
            DELIVERED
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={status === "CANCELLED"}
            onCheckedChange={() => onChechedStatus("CANCELLED")}
          >
            CANCELLED
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
