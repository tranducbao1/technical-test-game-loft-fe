export interface ScheduleResponseType {
  id?: string;
  calendarDate?: CalendarDate;
  part?: string;
  type?: null;
}

export interface CalendarDate {
  date?: Date;
  day?: number;
  month?: number;
  year?: number;
  weekday?: string;
}
