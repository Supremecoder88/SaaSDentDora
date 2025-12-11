import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <SignedOut>
      <SignUpButton mode="modal">Signup</SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>Logout</SignOutButton>
      </SignedIn>
    </div>
  );
}
