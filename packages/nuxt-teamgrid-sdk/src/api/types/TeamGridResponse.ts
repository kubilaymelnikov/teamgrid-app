interface TeamGridResponse200<T = any> {
  statusCode: 200;
  status: "OK";
  info: string;
  data: T;
  pagination: {
    total: number;
    limit: number;
    page: number;
    pages: number;
  };
}

interface TeamGridResponse201<T = any> {
  statusCode: 201;
  status: "Created";
  data: T;
  info: string;
}

interface TeamGridResponse204 {
  statusCode: 204;
  status: "No Content";
  info: string;
}

interface TeamGridResponse401 {
  statusCode: 401;
  error: "Unauthorized";
  message: string;
}

type TeamGridResponse<T> =
  | TeamGridResponse200<T>
  | TeamGridResponse201<T>
  | TeamGridResponse204
  | TeamGridResponse401;

export { TeamGridResponse };
