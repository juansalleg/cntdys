export enum MonthEnum {
  January = 1, // it is 0 in JS Date, but starting with 1 is better as human readable API
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

export type Year = number
export type MonthNumber = MonthEnum

export interface Month {
  year: Year
  month: MonthEnum
}

// every enum specified here and not used in code is unnecessary byte in build file
export enum DayEnum {
  Sunday, // sunday = 0 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

export interface Day {
  dayInWeek: DayEnum
  dayInMonth: number
  month: Month
}
