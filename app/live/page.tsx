import DriverCard from "@/components/driver-card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Driver from "@/models/Driver";
import Interval from "@/models/Interval";

export default async function Live() {
  const drivers: Driver[] = await fetch(
    "https://api.openf1.org/v1/drivers?&session_key=latest&meeting_key=latest",
  ).then((res) => res.json());

  const intervals: Interval[] = await fetch(
    // "https://api.openf1.org/v1/intervals?meeting_key=1219&session_key=9165&date%3E2023-09-17T11:00:00&date%3C2023-09-17T12:03:53",
    "https://api.openf1.org/v1/intervals?meeting_key=1219&session_key=9165&date%3E2023-09-17T11:00:00&date%3C2023-09-17T12:05",
  )
    .then((res) => res.json())
    .then((intervals: Interval[]) => {
      return drivers
        .map((d) => intervals.find((i) => i.driver_number === d.driver_number))
        .filter((i): i is Interval => !!i)
        .sort((a, b) => a.gap_to_leader - b.gap_to_leader);
    });

  const driversOut = drivers.filter(
    (d) => !intervals.map((i) => i.driver_number).includes(d.driver_number),
  );

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        {drivers.map((driver) => (
          <DriverCard
            driver={driver}
            type="v"
            link={`/live/driver/${driver.name_acronym}`}
          ></DriverCard>
        ))}
      </div>
      <Table className="mt-10">
        <TableCaption>A list of your recent projects.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Car</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Gap</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {intervals.map((interval) => (
            <TableRow>
              <TableCell>{interval.driver_number}</TableCell>
              <TableCell>
                {
                  drivers.find(
                    (d) => d.driver_number === interval.driver_number,
                  )?.name_acronym
                }
              </TableCell>
              <TableCell>{interval.gap_to_leader ?? "Leader"}</TableCell>
              <TableCell className="font-medium">{interval.date}</TableCell>
              <TableCell className="text-right">{interval.date}</TableCell>
            </TableRow>
          ))}

          {driversOut.map((driver) => (
            <TableRow>
              <TableCell>{driver.driver_number}</TableCell>
              <TableCell>{driver.name_acronym}</TableCell>
              <TableCell>OUT</TableCell>
              <TableCell className="font-medium">-</TableCell>
              <TableCell className="text-right">-</TableCell>
            </TableRow>
          ))}
          {/* <TableRow>
            <TableCell className="font-medium">123</TableCell>
            <TableCell>asdf</TableCell>
            <TableCell>asdf</TableCell>
            <TableCell className="text-right">ff</TableCell>
            <TableCell className="text-right">ff</TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </>
  );
}
