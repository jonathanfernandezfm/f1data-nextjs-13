import DriverCard from "@/components/driver-card";
import Driver from "@/models/Driver";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "F1Data | Drivers",
};

export default async function Drivers() {
  const drivers: Driver[] = await fetch(
    "https://api.openf1.org/v1/drivers?&session_key=latest&meeting_key=latest",
  ).then((res) => res.json());

  return (
    <div className="flex flex-wrap gap-10 justify-evenly">
      {drivers.map((driver) => (
        <DriverCard link={`/users/${driver.name_acronym}`} driver={driver}></DriverCard>
      ))}
    </div>
  );
}
