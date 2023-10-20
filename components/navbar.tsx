import React from "react";
import { Button } from "./ui/button";
import {
  ArrowRightLeft,
  Calendar,
  Crown,
  Home,
  Route,
  Settings,
  Shield,
  Tv,
  User,
  Users,
} from "lucide-react";
import { ModeToggle } from "./ui/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "./auth-buttons";

const navBarButtons = [
  { icon: <Tv />, label: "Live", link: "/live" },
  { icon: <Home />, label: "Home", link: "/" },
  { icon: <Calendar />, label: "Calendar", link: "/calendar" },
  { icon: <Crown />, label: "Standings", link: "/standings" },
  { icon: <Route />, label: "Circuits", link: "/circuits" },
  { icon: <Users />, label: "Drivers", link: "/drivers" },
  { icon: <Shield />, label: "Teams", link: "/teams" },
  { icon: <ArrowRightLeft />, label: "Races", link: "/races" },
];

export default async function Navbar() {
  return (
    <section className="flex h-full w-80 shrink-0 flex-col justify-between border-r-[1px] border-r-zinc-300 py-6 dark:border-r-zinc-800 dark:bg-zinc-900">
      <div>
        <Link href="/" className="flex justify-center">
          <Image
            className="pt-10 pb-14"
            src="/logo.png"
            alt="Company logo"
            width={150}
            height={0}
          ></Image>
        </Link>
        <nav className="text-lg">
          <ul>
            {navBarButtons.map((button) => (
              <li className="mt-4 transition-all cursor-pointer outline-1 hover:bg-zinc-200 hover:text-red-600 dark:hover:bg-zinc-950">
                <Link
                  href={button.link}
                  className="flex items-center gap-4 px-6 py-3 pl-24"
                >
                  <span>{button.icon}</span>
                  <span>{button.label}</span>
                </Link>
              </li>
            ))}

            <div className="mt-4 w-full border-t-[1px] border-r-zinc-300 dark:border-t-zinc-800"></div>

            <li className="mt-4 rounded-sm cursor-pointer outline-1 hover:bg-zinc-200 hover:outline hover:outline-zinc-400 dark:hover:bg-zinc-900 dark:hover:outline-zinc-700">
              <Link href="/about" className="block px-6 py-3">
                About us
              </Link>
            </li>
            <li className="px-6 py-2 mt-4 rounded-sm">
              <SignInButton></SignInButton>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div className="flex gap-4 mb-6">
          <Button variant="outline" size="icon" asChild>
            <Link href={"/"}>
              <User className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
              <span className="sr-only">My profile</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href={"/"}>
              <Settings className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>
          <ModeToggle></ModeToggle>
        </div>
        <div className="w-full text-left">
          Copyright @ 2023. Version v0.1. Jonathan Fernández Mertanen
        </div>
      </div>
    </section>
  );
}
