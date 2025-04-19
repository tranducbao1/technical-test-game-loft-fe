export interface ScheduleResponseType {
  id?: string;
  calendarDate?: CalendarDate;
  part?: string;
  type?: ScheduleTypeEnum;
}

export interface CalendarDate {
  date?: Date;
  day?: number;
  month?: number;
  year?: number;
  weekday?: string;
}

export enum ScheduleTypeEnum {
  WFH = 'WFH',
  WAO = 'WAO',
  OFF = 'OFF',
}

export enum SchedulePartEnum {
  FULL = 'FULL',
  AM = 'AM',
  PM = 'PM',
}

export interface UpdateSchedulePayload {
  id: string;
  type: ScheduleTypeEnum;
  calendarDate?: CalendarDate;
  part?: string;
}

export interface UpdateSchedulesPayload {
  data: UpdateSchedulePayload[];
}

export interface RepeatSchedulePayload {
  startTime: string;
  endTime: string;
  part: string;
  repeatFor: string[];
  numberOfWeeks: number;
}
