import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold mb-1">Oops!</h1>
      <p className="text-xl text-muted-foreground mb-4">
        Looks like you're lost 😿
      </p>
      <Link to={"/"}>
        <Button>Go to home</Button>
      </Link>
    </main>
  );
}

export default NotFound;
