interface WorkingHour {
  readonly weekday: number;
  readonly start: number;
  readonly end: number;
}

export default interface UserResponse {
  readonly userId: string;
  readonly name: string;
  readonly emails: string[];
  readonly contactId: string;
  readonly roleId: string;
  readonly costRate: number;
  readonly currentTaskId: string;
  readonly workingHours: WorkingHour[];
}
