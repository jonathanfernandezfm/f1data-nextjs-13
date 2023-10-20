/**
 * Information about meetings.
 */
export default interface Meeting {
  /** The unique identifier for the circuit where the event takes place. */
  circuit_key: number;
  /** The short or common name of the circuit where the event takes place. */
  circuit_short_name: string;
  /** A code that uniquely identifies the country. */
  country_code: string;
  /** The unique identifier for the country where the event takes place. */
  country_key: number;
  /** The full name of the country where the event takes place. */
  country_name: string;
  /** The starting date and time, in ISO 8601 format. */
  date_start: string;
  /** The difference in hours and minutes between local time at the location of the event and Greenwich Mean Time (GMT). */
  gmt_offset: string;
  /** The city or geographical location where the event takes place. */
  location: string;
  /** The unique identifier for the meeting. Use latest to identify the latest or current meeting. */
  meeting_key: number;
  /** The name of the meeting. */
  meeting_name: string;
  /** The official name of the meeting. */
  meeting_official_name: string;
  /** The year the event takes place. */
  year: number;
}