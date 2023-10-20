import Driver from "@/models/Driver";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

interface Props {
  driver: Driver;
  link: string;
  type?: "v" | "h";
}

export default function DriverCard({ driver, type = "h", link }: Props) {
  if (type === "v") {
    return (
      <Link href={link}>
        <div className="flex items-center justify-between rounded-sm border-[1px] p-2 px-3 hover:bg-zinc-900">
          <div className="flex flex-col items-center justify-center w-full">
            <Avatar className="w-12 h-12">
              <AvatarImage src={driver.headshot_url} />
              <AvatarFallback>{driver.name_acronym}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center">
              <p className="mt-2 text-lg font-medium leading-none">
                {driver.name_acronym}
              </p>
              <p
                className="mt-1 text-sm italic"
                style={{ color: `#${driver.team_colour}BB` }}
              >
                {driver.driver_number}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={link}>
      <div className="flex items-center justify-between space-x-4 rounded-sm border-[1px] p-4 pr-10 hover:bg-zinc-900">
        <div className="flex items-center justify-center space-x-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={driver.headshot_url} />
            <AvatarFallback>{driver.name_acronym}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-medium leading-none">
              {driver.first_name} {driver.last_name}
            </p>
            <p className="mt-1 text-sm italic">{driver.driver_number}</p>
            <p
              className="text-base"
              style={{ color: `#${driver.team_colour}BB` }}
            >
              {driver.team_name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
