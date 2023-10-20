/**
 * Information about interval between cars.
 */
export default interface Interval {
  /** The date and time, in ISO 8601 format. */
  date: string;
  /** The unique number assigned to an F1 driver. */
  driver_number: number;
  /** The time gap to the race leader in seconds, +1 LAP if lapped, or null for the race leader. */
  gap_to_leader: number;
  /** The time gap to the car ahead in seconds, +1 LAP if lapped, or null for the race leader. */
  interval: number;
  /** The unique identifier for the meeting. Use latest to identify the latest or current meeting. */
  meeting_key: number;
  /** The unique identifier for the session. Use latest to identify the latest or current session. */
  session_key: number;

}