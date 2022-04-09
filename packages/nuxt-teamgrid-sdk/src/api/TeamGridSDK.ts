import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Team } from "./types/Team";

class TeamGridSDK {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: "https://api.teamgridapp.com/",
      headers: {
        Accept: "application/json",
      },
    });
  }

  public auth(authToken: string): this {
    this.axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;

    return this;
  }

  public getTeams(): Promise<AxiosResponse<Team, any>> {
    return this.axios.request({ method: "GET", url: "/teams" });
  }

  public getUsers(params?: Object): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "GET", url: "/users", params });
  }

  public getTasks(params?: Object): Promise<AxiosResponse<any, any>> {
    params = Object.assign(
      {
        page: 1,
        limit: 50,
        archived: false,
      },
      params
    );

    return this.axios.request({ method: "GET", url: "/tasks", params });
  }

  public getTask(taskId: string): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "GET", url: `/tasks/${taskId}` });
  }

  public createTask(data?: Object): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "POST", url: "/tasks", data });
  }

  public updateTask(
    taskId: string,
    data?: Object
  ): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "PUT", url: `/tasks/${taskId}`, data });
  }

  public deleteTask(taskId: string): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "DELETE", url: `/tasks/${taskId}` });
  }

  public startTracking(
    taskId: string,
    data?: Object
  ): Promise<AxiosResponse<any, any>> {
    data = Object.assign(
      {
        time: Date.now(),
      },
      data
    );

    return this.axios.request({
      method: "POST",
      url: `/tasks/${taskId}/startTracking`,
      data,
    });
  }

  public stopTracking(
    taskId: string,
    data?: Object
  ): Promise<AxiosResponse<any, any>> {
    data = Object.assign(
      {
        time: Date.now(),
      },
      data
    );

    return this.axios.request({
      method: "POST",
      url: `/tasks/${taskId}/stopTracking`,
      data,
    });
  }

  public getTimes(params?: Object): Promise<AxiosResponse<any, any>> {
    params = Object.assign(
      {
        page: 1,
        limit: 50,
        archived: false,
      },
      params
    );

    return this.axios.request({ method: "GET", url: "/times", params });
  }

  public getTime(timeId: string): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "GET", url: `/times/${timeId}` });
  }

  public createTime(data?: Object): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "POST", url: "/times", data });
  }

  public updateTime(
    timeId: string,
    data?: Object
  ): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "PUT", url: `/times/${timeId}`, data });
  }

  public deleteTime(timeId: string): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "DELETE", url: `/times/${timeId}` });
  }

  public getServices(params?: Object): Promise<AxiosResponse<any, any>> {
    params = Object.assign(
      {
        page: 1,
        limit: 50,
      },
      params
    );

    return this.axios.request({ method: "GET", url: "/services", params });
  }

  public getService(serviceId: string): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "GET", url: `/services/${serviceId}` });
  }

  public getTags(params?: Object): Promise<AxiosResponse<any, any>> {
    params = Object.assign(
      {
        page: 1,
        limit: 50,
      },
      params
    );

    return this.axios.request({ method: "GET", url: "/tags", params });
  }

  public getTag(tagId: string): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "GET", url: `/tags/${tagId}` });
  }

  public getWebhooks(): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "GET", url: "/webhooks" });
  }

  public getWebhook(webhookId: string): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "GET", url: `/webhooks/${webhookId}` });
  }

  public createWebhook(data?: Object): Promise<AxiosResponse<any, any>> {
    return this.axios.request({ method: "POST", url: "/webhooks", data });
  }

  public deleteWebhook(webhookId: string): Promise<AxiosResponse<any, any>> {
    return this.axios.request({
      method: "DELETE",
      url: `/webhooks/${webhookId}`,
    });
  }
}

export default TeamGridSDK;
