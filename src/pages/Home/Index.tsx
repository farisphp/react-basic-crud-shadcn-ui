import { columns, users } from "./columns";
import { DataTable } from "../../components/shared/data-table";

function Home() {
  return (
    <main className="flex flex-col w-full gap-y-4">
      <DataTable
        columns={columns}
        data={users}
        addAction={() => {
          console.log("ADD ACTION");
        }}
      />
    </main>
  );
}

export default Home;
