interface Service {
  _id: string
  name: string
  billable: boolean
  hourlyRate: number
  createdAt: Date
  createdBy: string
}

interface ServiceQueryParam {
  page: number
  limit: number
}

export { Service, ServiceQueryParam }
