export interface MyDateProp {
  year: number;
  month: number;
  day: number;
  leapMonth: number;
}

export interface LunarCalcProp {
  year: number;
  month: number;
  day: number;
  type: number;
  leapmonth?: number;
}

export interface DayCalcDisplayProp {
  startYear: number;
  startMonth: number;
  startDay: number;
}
