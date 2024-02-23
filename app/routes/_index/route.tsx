import type { MetaFunction } from "@remix-run/node";

import "~/globals.css";
import { Link } from "@remix-run/react";
import { Card } from "@/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="max-w-6xl w-full mx-auto min-h-screen">
      <div className="min-h-screen grid grid-rows-[min-content,minmax(750px,0.75fr)]">
        <header className="flex justify-between items-center px-4 py-6">
          <Link to="/" className="uppercase">
            Shadcn_Templates
          </Link>
          <nav>
            <ul>
              <li className="uppercase">Templates</li>
            </ul>
          </nav>
        </header>
        <div className="border rounded-sm p-4 mb-8 grid grid-rows-[1fr,0.25fr] gap-4">
          <div className="grid grid-cols-[1.5fr,1fr,1.5fr] gap-4">
            <div className="grid grid-rows-[auto,1fr] gap-4">
              <div className="flex flex-col gap-3.5">
                <h1 className="text-6xl uppercase">
                  Production <br />
                  Ready <br />
                  Templates <br />
                </h1>
                <h3 className="text-muted-foreground">
                  Beautifully crafted with the help of <Link to="https://www.radix-ui.com/" target="_blank" rel="noreferrer"  className="underline">Radix</Link> and{" "}
                  <Link to="https://ui.shadcn.com/" target="_blank" rel="noreferrer" className="underline">Shadcn-UI</Link>
                </h3>
              </div>
              <Card>Content 1</Card>
            </div>
            <div className="grid grid-rows-[1fr,0.5fr,0.5fr] gap-4">
              <Card>Content 2</Card>
              <Card>Content 3</Card>
              <Card>Content 4</Card>
            </div>
            <Card>Content 5</Card>
          </div>
          <Card>Content 6</Card>
        </div>
      </div>
    </main>
  );
}
