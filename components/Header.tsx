import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="flex items-center justify-between px-4 py-6">
        <Link href={"/"}>
          <Image
            src={"/Logo.png"}
            height={100}
            width={1000}
            alt="MetaBoost Logo"
            className="h-10 w-42 md:h-14 md:w-56"
          />
        </Link>

        <div className="flex items-center">
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="bg-brand hover:bg-brand-dark">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "!size-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
