/**
 * Information about drivers.
 */
export default interface Driver {
  /** The driver's name, as displayed on TV. */
  driver_number: number;
  /** The driver's name, as displayed on TV. */
  broadcast_name: string;
  /** The unique number assigned to an F1 driver */
  full_name: string;
  /** Three-letter acronym of the driver's name. */
  name_acronym: string;
  /** Name of the driver's team. */
  team_name: string;
  /** The hexadecimal color value (RRGGBB) of the driver's team. */
  team_colour: string;
  /** The driver's first name. */
  first_name: string;
  /** The driver's last name. */
  last_name: string;
  /** URL of the driver's face photo. */
  headshot_url: string;
  /** A code that uniquely identifies the country. */
  country_code: string;
  /** The unique identifier for the session. Use latest to identify the latest or current session. */
  session_key: number;
  /** The unique identifier for the meeting. Use latest to identify the latest or current meeting. */
  meeting_key: number;
}