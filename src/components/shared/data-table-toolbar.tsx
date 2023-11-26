import { Table } from "@tanstack/react-table";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  addAction?: () => void;
}

export function DataTableToolbar<TData>({
  table,
  addAction,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <DataTableViewOptions table={table} />
      </div>
      {addAction ? (
        <Button
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
          onClick={addAction}
        >
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Add user
        </Button>
      ) : null}
    </div>
  );
}
