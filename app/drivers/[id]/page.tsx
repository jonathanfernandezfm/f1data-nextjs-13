import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Metadata } from "next";
import { getServerSession } from "next-auth";

interface Props {
  params: {
    id: string;
  };
}

export default async function User({ params }: Props) {
  return (
    <div className="m-auto flex w-96 flex-col items-center justify-center rounded-md border-[1px] bg-zinc-50 p-4 py-10 dark:bg-zinc-950"></div>
  );
}
