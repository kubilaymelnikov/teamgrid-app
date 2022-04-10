interface List {
  _id: string;
  name: string;
  parentId: string;
  type: "tasks" | "personal" | "projects";
  order: number;
  createdAt: Date;
  createdBy: string;
}

interface ListQueryParam {
  page: number;
  limit: number;
}

export { List, ListQueryParam };
