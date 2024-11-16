import { split } from "@/utils/split";

export type Timestamp = MinuteSecondTimstamp | HourMinuteSecondTimestamp;
export type MinuteSecondTimstamp = `${number}:${number}`;
export type HourMinuteSecondTimestamp = `${number}:${number}:${number}`;

const minuteSecondRegex = /(?:<minute>[0-9]{1,2}):(?:<second>[0-9]{2})/;
const hourMinuteSecondRegex =
  /(?:<hour>[0-9]{1,2}):(?:<minute>[0-9]{2}):(?:<second>[0-9]{2})/;

export function isMinuteSecondTimestamp(
  timestamp: string
): timestamp is MinuteSecondTimstamp {
  return (
    minuteSecondRegex.test(timestamp) && !hourMinuteSecondRegex.test(timestamp)
  );
}

export function convertTimestampToSeconds(timestamp: Timestamp) {
  if (isMinuteSecondTimestamp(timestamp)) {
    const [minutes, seconds] = split(timestamp, ":").map(Number);
    return minutes * 60 + seconds;
  }

  const [hours, minutes, seconds] = split(timestamp, ":").map(Number);
  return hours * 60 * 60 + minutes * 60 + seconds;
}
