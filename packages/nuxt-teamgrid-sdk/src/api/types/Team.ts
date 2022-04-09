interface WorkingHour {
  weekday: number;
  start: number;
  end: number;
}

interface User {
  userId: string;
  contactId: string;
  costRate: number;
  roleId: string;
  currentTaskId: string;
  workingHours: WorkingHour[];
}

interface Role {
  _id: string;
  name: string;
  description: string;
  permissions: string[];
}

interface Groupe {
  name: string;
  members: string[];
}

export interface Team {
  _id: string;
  name: string;
  contactId: string;
  users: User[];
  roles: Role[];
  groupes: Groupe[];
  defaultRole: string;
  interface: {
    colors: {
      primary: string;
    };
  };
  currency: number;
  createdAt: Date;
  createdBy: string;
}
