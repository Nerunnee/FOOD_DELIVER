"use client";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { ChefHat } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <Link href={`/`}>
          <SidebarHeader className="text-cyan-700">
            <div className="flex items-center gap-2">
              <ChefHat className="w-12 h-12" />
              <div className="font-semibold">
                <p className="text-lg">NomNom</p>
                <p className="text-sm">Swift delivery</p>
              </div>
            </div>
          </SidebarHeader>
        </Link>

        <Tabs defaultValue="menu" className="w-100">
          <TabsList>
            <Link href={`/dashboard/foods`}>
              <TabsTrigger value="menu" asChild>
                <Button
                  variant="outline"
                  className={`${pathname === "/dashboard/foods" && "bg-black text-white"} hover:bg-cyan-500`}
                >
                  Food Menu
                </Button>
              </TabsTrigger>
            </Link>
            <Link href={`/dashboard/orders`}>
              <TabsTrigger value="orders" asChild>
                <Button
                  variant="outline"
                  className={`${pathname === "/dashboard/orders" && "bg-black text-white"}  hover:bg-cyan-500`}
                >
                  Orders
                </Button>
              </TabsTrigger>
            </Link>
          </TabsList>
          <TabsContent value="menu">
            Make changes to your food menu here.
          </TabsContent>
          <TabsContent value="orders">
            Change your order status here.
          </TabsContent>
        </Tabs>
      </SidebarContent>
    </Sidebar>
  );
}
