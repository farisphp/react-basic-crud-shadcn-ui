import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useMutation, useQueryClient } from "react-query";

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userFormSchema } from "@/schemas/user-schema";

import { User } from "./columns";
import { updateUser } from "./queries";

const EditUser = (props: User) => {
  const queryClient = useQueryClient();
  const [open, setOpen] = React.useState(false);
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: props.name,
      email: props.email,
    },
  });
  const mutation = useMutation(updateUser, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("users");
    },
    onError: (error) => {
      if (!error) {
        return;
      }

      let errorMsg = "Oops! Something went wrong. Please try again later.";
      if (typeof error === "object" && "message" in error)
        errorMsg = error?.message as string;

      form.setError("root", { type: "custom", message: errorMsg });
    },
  });

  async function onSubmit(values: z.infer<typeof userFormSchema>) {
    mutation.mutate({ ...values, id: props.id });

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Edit user</DialogTitle>
              <DialogDescription>
                Edit user. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Faris Perwira" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="test@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button disabled={form.formState.isSubmitting} type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditUser;
