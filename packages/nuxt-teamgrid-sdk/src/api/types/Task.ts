interface SubTask {
  title: string
  completed: boolean
  order: number
}

interface Task {
  _id: string
  name: string
  description: string
  dueDate: Date
  plannedStart: Date
  plannedEnd: Date
  plannedTime: number
  serviceId: string
  projectId: string
  contactId: string
  personalListId: string
  personalListOrder: number
  listId: string
  listOrder: number
  duplicateOf: string
  order: number
  userId: string
  groupId: string
  tagIds: string[]
  subscriberIds: string[]
  completed: boolean
  subTasks: SubTask[]
  info: {
    timeBillable: number
    timeNotBillable: number
    totalTime: number
    remainingTime: number
    costs: number
    revenue: number
    profit: number
    contactName: string
    projectName: string
    listName: string
    serviceName: string
    userName: string
    scheduledStart: Date
    scheduledEnd: Date
  }
  createdAt: Date
  createdBy: string
  scheduledWork: {
    userId: string
    minutes: number
    date: Date
  }
}

interface TaskQueryParam {
  page: number
  limit: number
  userId: string
  contactId: string
  projectId: string
  completed: boolean
  archived: boolean
  updatedAtFrom: Date
  updatedAtTo: Date
  createdAtFrom: Date
  createdAtTo: Date
  plannedStartFrom: Date
  plannedStartTo: Date
  plannedEndFrom: Date
  plannedEndTo: Date
  scheduledStartFrom: Date
  scheduledStartTo: Date
  scheduledEndFrom: Date
  scheduledEndTo: Date
  includeScheduledWork: boolean
}

interface TaskStartStopBodyParam {
  userId: string
  time: Date
}

export { Task, TaskQueryParam, TaskStartStopBodyParam }
