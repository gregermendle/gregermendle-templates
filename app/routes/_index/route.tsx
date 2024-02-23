import type { MetaFunction } from "@remix-run/node";
import fs from "node:fs/promises";

import "~/globals.css";
import { Link, json, useLoaderData } from "@remix-run/react";
import { Card } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Login from "@/templates/shadcn/login";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const loginSource = await fs.readFile(
    "@/templates/shadcn/login.tsx",
    "utf-8"
  );

  return json({
    loginSource,
  });
};

export default function Index() {
  const { loginSource } = useLoaderData<typeof loader>();

  return (
    <main className="max-w-6xl w-full mx-auto pb-12">
      <div className="grid grid-rows-[min-content,minmax(750px,0.75fr)]">
        <header className="flex justify-between items-center px-4 py-6">
          <Link to="/" className="uppercase">
            Shadcn_Templates
          </Link>
          <nav>
            <ul>
              {/* <li className="uppercase">Templates</li> */}
            </ul>
          </nav>
        </header>
        <Card className="p-4 mb-8 grid grid-rows-[1fr,0.25fr] gap-4">
          <div className="grid grid-cols-[1.5fr,1fr,1.5fr] gap-4">
            <div className="grid grid-rows-[auto,1fr] gap-4">
              <div className="flex flex-col gap-3.5">
                <h1 className="text-6xl uppercase font-medium">
                  Production <br />
                  Ready <br />
                  Templates <br />
                </h1>
                <p className="text-muted-foreground">
                  Beautifully crafted with the help of{" "}
                  <Link
                    to="https://www.radix-ui.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Radix
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="https://ui.shadcn.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Shadcn-UI
                  </Link>
                </p>
              </div>
              <Card></Card>
            </div>
            <div className="grid grid-rows-[1fr,0.5fr,0.5fr] gap-4">
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
            <Card></Card>
          </div>
          <Card></Card>
        </Card>
      </div>
      <div className="grid grid-cols-[auto,1fr] px-4 gap-12">
        <nav>
          <h3 className="uppercase text-sm pb-2 font-semibold text-muted-foreground">
            TABLE OF CONTENTS
          </h3>
          <ul className="pl-4">
            <li>
              <Link to="#authentication" className="uppercase">
                Authentication
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <header className="pb-4 border-b mb-4">
            <h3 className="text-xl uppercase font-semibold">Authentication</h3>
            <p className="text-muted-foreground text-sm">
              Complete login, sign up and forgot password layouts.
            </p>
          </header>
          <Card className="h-[640px] font-sans grid grid-rows-[auto,1fr]">
            <header className="border-b py-2 px-2">
              <h4 className="uppercase text-muted-foreground text-xs">
                # Login
              </h4>
            </header>
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel minSize={40}>
                <Login />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel className="grid">
                <ScrollArea>
                  <pre className="block text-sm p-4 text-muted-foreground">
                    <code>{loginSource}</code>
                  </pre>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </ResizablePanel>
            </ResizablePanelGroup>
          </Card>
        </div>
      </div>
    </main>
  );
}
