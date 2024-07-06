"use client";

import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

import { Container } from "./container";
import { Button } from "./button";
import { Logo } from "./icons/logo";
import { HamburgerIcon } from "./icons/hamburger";

export const Header = () => {
  const [hamburgerMenuisOpen, setHamburgerMenuisOpen] = useState(false);
  return (
    <header className="fixed left-0 top-0 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-[var(--navigation-height)]">
        <Link className="flex items-center text-md" href={"/"}>
          <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> Linear
        </Link>
        {/* <nav
          className={classNames(
            "fixed left-0 top-navigation-height h-[calc(100vh_-_var(--navigation-height))] w-full overflow-scroll bg-background md:relative md:top-0 md:block md:h-auto md:w-auto md:bg-transparent",
            hamburgerMenuisOpen ? "" : "hidden",
          )}
        > */}

        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuisOpen ? "visible" : "delay-500 invisible",
          )}
        >
          <nav
            className={classNames(
              "fixed left-0 top-navigation-height h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:opacity-100",
              hamburgerMenuisOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0",
            )}
          >
            <ul
              className={classNames(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
                "[&_a]:transition-300 ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-md [&_a]:transition-[colors,transform] md:[&_a]:translate-y-0 md:[&_a]:text-sm",
                hamburgerMenuisOpen && "[&_a]:translate-y-0",
              )}
            >
              <li>
                <Link href={"#"}>Features</Link>
              </li>
              <li>
                <Link href={"#"}>Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href={"#"}>Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href={"#"}>Changelog</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href={"#"}>Integrations</Link>
              </li>
              <li>
                <Link href={"#"}>Pricing</Link>
              </li>
              <li>
                <Link href={"#"}>Company</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ml-auto flex h-full items-center">
          <Link href={"#"} className="mr-6 text-sm">
            Log in
          </Link>
          <Button href="#"> Sign Up</Button>
        </div>
        <button
          className="ml-6 md:hidden"
          onClick={() => setHamburgerMenuisOpen((open) => !open)}
        >
          <span className="sr-only">Toggle Menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
