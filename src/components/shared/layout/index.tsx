import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ThemeProvider } from "./theme-provider";
import { ThemeToggle } from "./theme-toggle";
import { logout } from "./queries";

export const Layout = () => {
  const [_cookies, _setCookies, removeCookie] = useCookies();
  const queryClient = new QueryClient();
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <main className="container">
          <section>
            <div className="flex items-center justify-between my-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Welcome back!
                </h2>
                <p className="text-muted-foreground">
                  Here&apos;s a list of users!
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <ThemeToggle />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-9 w-9">
                        <AvatarImage
                          src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ba/baadb39eba429eb7f367f623ce8d31b45c7fa04a_full.jpg"
                          alt="Faris Perwira"
                        />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuItem
                      onClick={async () => {
                        await logout();
                        removeCookie("accessToken");
                      }}
                    >
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <Outlet />
          </section>
        </main>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
