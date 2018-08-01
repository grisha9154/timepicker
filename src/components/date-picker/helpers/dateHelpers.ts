import { Moment } from "moment";

export interface IDataRange {
  dayOfWeek: string;
  date: string;
  isToday: boolean;
  isDisabled: boolean;
}

export const getRangeDates = (currentDate: Moment, range: number, disabledDays: Moment[]): IDataRange[] => {
  const dataRanges: IDataRange[] = [];

  for (let i = -range; i <= range; i++) {
    const nextDate = currentDate.clone().add(i, "d");

    dataRanges.push({
      dayOfWeek: nextDate.format("ddd"),
      date: nextDate.format("DD"),
      isToday: isSameDay(nextDate, currentDate),
      isDisabled: disabledDays.some(item => isSameDay(item, nextDate))
    });
  }

  return dataRanges;
};

export const isSameDay = (first: Moment, second: Moment): boolean => {
  return (
    first.isSame(second, "year") &&
    first.isSame(second, "month") &&
    first.isSame(second, "day")
  );
};
