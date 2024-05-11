import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-y-4">
      <h1>Dashboard</h1>
      <UserButton afterSignOutUrl="/" />
      Hello Yeah!
    </div>
  );
}
