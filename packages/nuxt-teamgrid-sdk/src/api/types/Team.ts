interface WorkingHour {
  readonly weekday: number;
  readonly start: number;
  readonly end: number;
}

interface User {
  readonly userId: string;
  readonly contactId: string;
  readonly costRate: number;
  readonly roleId: string;
  readonly currentTaskId: string;
  readonly workingHours: WorkingHour[];
}

interface Role {
  readonly _id: string;
  readonly name: string;
  readonly description: string;
  readonly permissions: string[];
}

interface Groupe {
  readonly name: string;
  readonly members: string[];
}

interface Team {
  readonly _id: string;
  readonly name: string;
  readonly contactId: string;
  readonly users: User[];
  readonly roles: Role[];
  readonly groupes: Groupe[];
  readonly defaultRole: string;
  readonly interface: {
    readonly colors: {
      readonly primary: string;
    };
  };
  readonly currency: number;
  readonly createdAt: Date;
  readonly createdBy: string;
}

export { Team };
