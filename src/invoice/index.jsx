import React from "react";
import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarHeader,
} from "../components/ui/sidebar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

const Invoice = () => {
  return (
    <SidebarProvider
      open
      style={{
        "--sidebar-width": "4rem",
        "--sidebar-width-mobile": "4rem",
      }}
    >
      <Sidebar>
        <SidebarHeader>
          <a href="#">logo</a>
        </SidebarHeader>
      </Sidebar>
      <main className="container">
        <SidebarTrigger className="md:hidden" />
        <header className="flex items-center gap-4">
          <div className="flex-1">
            <h1>Invoices</h1>
            <p className="!p-0 !m-0">There are 0 total Invoices</p>
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Sheet>
            <SheetTrigger asChild>
              <Button>New Invoice</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Add Invoice</SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </header>
      </main>
    </SidebarProvider>
  );
};

export default Invoice;
