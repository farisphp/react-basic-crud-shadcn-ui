import * as React from "react";
import { useQuery } from "react-query";
import { PaginationState } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import AddUser from "./AddUser";
import { columns } from "./columns";
import { getAllUsers } from "./queries";
import { DataTable } from "../../components/shared/data-table";

function Home() {
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data: res } = useQuery(
    ["users", pagination.pageIndex, pagination.pageSize],
    () => getAllUsers(pagination.pageIndex + 1, pagination.pageSize)
  );

  return (
    <main className="flex flex-col w-full gap-y-4">
      <DataTable
        columns={columns}
        data={res?.data || []}
        pagination={pagination}
        pageCount={res?.last_page ?? 0}
        onPaginationChange={setPagination}
        AddButton={AddUser}
      />
    </main>
  );
}

export default Home;
