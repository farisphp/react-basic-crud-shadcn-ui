import { useMutation, useQueryClient } from "react-query";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { User } from "./columns";
import { deleteUser } from "./queries";

const DeleteUser = (props: User) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteUser, {
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
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the user
            and remove user data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => mutation.mutate({ id: props.id })}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteUser;
