import * as React from "react";
import { useQuery } from "react-query";
import { PaginationState } from "@tanstack/react-table";

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
        addAction={() => {
          console.log("ADD ACTION");
        }}
        addLabel="Add user"
      />
    </main>
  );
}

export default Home;
