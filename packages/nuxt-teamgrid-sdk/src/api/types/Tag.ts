interface Tag {
  _id: string;
  name: string;
  color: string;
  createdAt: Date;
  createdBy: string;
}

interface TagQueryParam {
  page: number;
  limit: number;
}

export { Tag, TagQueryParam };
