import { Moment } from "moment";

export const getRangeDates = (currentDate: Moment, range: number, disabledDays: Moment[]) => {
  const dataRanges = [];

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

export const isSameDay = (first: Moment, second: Moment) => {
  return (
    first.isSame(second, "year") &&
    first.isSame(second, "month") &&
    first.isSame(second, "day")
  );
};
