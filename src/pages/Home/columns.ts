import { ColumnDef } from "@tanstack/react-table";

export type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

export const users: User[] = [
  {
    id: "728ed52f",
    name: "FARIS",
    email: "m@example.com",
    created_at: "2023-11-25T21:32:21.000000Z",
  },
  {
    id: "489e1d42",
    name: "SOY JO",
    email: "so@example.com",
    created_at: "2023-11-25T21:32:21.000000Z",
  },
];

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "created_at",
    header: "Created at",
  },
];
