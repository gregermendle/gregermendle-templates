import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

function Logo() {
  return <div className="bg-foreground w-8 h-8 rounded-full" />;
}

function Login() {
  return (
    <main className="max-h-dvh h-full flex items-center justify-center">
      <Card className="bg-gradient-to-br from-muted-900 to-background px-5 pb-6 pt-4 max-w-sm">
        <div className="mb-20 flex flex-row items-center gap-3">
          <Logo />
        </div>
        <h1 className="font-semibold">Authenticate</h1>
        <p className="text-sm text-muted-foreground">
          Sign-in to start building.
        </p>
        <div className="my-4 space-y-6">
          <form>
            <Label htmlFor="email">E-Mail</Label>
            <Input id="email" name="email" className="mb-1" />
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" />
            <Button type="submit" size="lg" className="mt-2 w-full">
              Sign In
            </Button>
          </form>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <Separator />
            <span className="text-xs text-muted-foreground">OR</span>
            <Separator />
          </div>
          <form>
            <Button
              variant="outline"
              type="submit"
              size="lg"
              className="w-full"
            >
              <GitHubLogoIcon className="mr-2 h-4 w-4" />
              Github
            </Button>
          </form>
        </div>
        <p className="text-sm text-muted-foreground">
          By authenticating, you agree to our{" "}
          <a href="/terms" className="underline underline-offset-2">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
      </Card>
    </main>
  );
}

export default Login;
