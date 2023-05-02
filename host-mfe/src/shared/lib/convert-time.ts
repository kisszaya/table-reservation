import { ITimeInput } from "../ui";

export const convertTimeToNumber = (hours: number, minutes: number) => {
  return hours * 60 + minutes;
};

export const convertTimeToHoursAndMinutes = (
  input: number | undefined
): ITimeInput => {
  if (!input) {
    return null;
  }
  const hours = Math.floor(input / 60);
  const minutes = input - hours * 60;

  return { minutes, hours };
};
