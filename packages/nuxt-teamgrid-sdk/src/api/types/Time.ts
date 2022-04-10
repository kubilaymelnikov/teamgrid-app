interface Time {
  _id: string;
  type: string;
  start: Date;
  end: Date;
  taskId: string;
  userId: string;
  hourlyRate: number;
  costRate: number;
  duration: number;
  billed: boolean;
  comment: string;
  createdAt: Date;
  createdBy: string;
  contactId: string;
  projectId: string;
  listId: string;
  serviceId: string;
  contactName: string;
  projectName: string;
  taskName: string;
  serviceName: string;
  userName: string;
  projectCompleted: boolean;
  taskCompleted: boolean;
  costs: number;
  revenue: number;
  profit: number;
}

interface TimeQueryParam {
  page: number;
  limit: number;
  billed: boolean;
  userId: string;
  taskId: string;
  projectId: string;
  serviceId: string;
  contactId: string;
  startFrom: Date;
  startTo: Date;
  taskCompleted: boolean;
  projectCompleted: boolean;
  taskArchived: boolean;
  projectArchived: boolean;
  active: boolean;
  type: string;
}

export { Time, TimeQueryParam };
