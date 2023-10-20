import Meeting from "@/models/Meeting";

export default async function Home() {
  const meetings: Meeting[] = await fetch(
    "https://api.openf1.org/v1/meetings?year=2023",
  )
    .then((res) => res.json())
    .then((json: Meeting[]) =>
      json.filter((m) => m.meeting_name.includes("Grand Prix")),
    );

  return (
    <section className="flex-1 p-12">
      {meetings.map((meeting) => (
        <div className="mb-4">
          <p>
            {meeting.country_code} {meeting.meeting_name}
          </p>
          <p>{meeting.meeting_official_name}</p>
        </div>
      ))}
    </section>
  );
}
