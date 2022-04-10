import { TeamGridResponse } from "./types/TeamGridResponse";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Team } from "./types/Team";
import { User, UserQueryParam } from "./types/User";
import { ContactQueryParam, Contact } from "./types/Contact";
import { Project, ProjectQueryParam } from "./types/Project";
import { Task, TaskQueryParam, TaskStartStopBodyParam } from "./types/Task";
import { Time, TimeQueryParam } from "./types/Time";
import { Service, ServiceQueryParam } from "./types/Service";
import { Tag, TagQueryParam } from "./types/Tag";
import { List, ListQueryParam } from "./types/List";
import { Webhook } from "./types/Webhook";

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

  public getTeams(): Promise<AxiosResponse<TeamGridResponse<Team>, any>> {
    return this.axios.request({ method: "GET", url: "/teams" });
  }

  public getUsers(
    params?: UserQueryParam
  ): Promise<AxiosResponse<TeamGridResponse<User[]>, any>> {
    return this.axios.request({ method: "GET", url: "/users", params });
  }

  public getContacts(
    params?: ContactQueryParam
  ): Promise<AxiosResponse<TeamGridResponse<Contact[]>, any>> {
    params = Object.assign(
      {
        page: 1,
        limit: 50,
        archived: false,
      },
      params
    );

    return this.axios.request({ method: "GET", url: "/contacts", params });
  }

  public getContact(
    taskId: string
  ): Promise<AxiosResponse<TeamGridResponse<Contact>, any>> {
    return this.axios.request({ method: "GET", url: `/contacts/${taskId}` });
  }

  public createContact(
    data?: Contact
  ): Promise<AxiosResponse<TeamGridResponse<Contact>, any>> {
    return this.axios.request({ method: "POST", url: "/contacts", data });
  }

  public updateContact(
    taskId: string,
    data?: Contact
  ): Promise<AxiosResponse<TeamGridResponse<Contact>, any>> {
    return this.axios.request({
      method: "PUT",
      url: `/contacts/${taskId}`,
      data,
    });
  }

  public getProjects(
    params?: ProjectQueryParam
  ): Promise<AxiosResponse<TeamGridResponse<Project[]>, any>> {
    params = Object.assign(
      {
        page: 1,
        limit: 50,
        archived: false,
      },
      params
    );

    return this.axios.request({ method: "GET", url: "/projects", params });
  }

  public getProject(
    taskId: string
  ): Promise<AxiosResponse<TeamGridResponse<Project>, any>> {
    return this.axios.request({ method: "GET", url: `/projects/${taskId}` });
  }

  public createProject(
    data?: Project
  ): Promise<AxiosResponse<TeamGridResponse<Project>, any>> {
    return this.axios.request({ method: "POST", url: "/projects", data });
  }

  public updateProject(
    taskId: string,
    data?: Project
  ): Promise<AxiosResponse<TeamGridResponse<Project>, any>> {
    return this.axios.request({
      method: "PUT",
      url: `/projects/${taskId}`,
      data,
    });
  }

  public getTasks(
    params?: TaskQueryParam
  ): Promise<AxiosResponse<TeamGridResponse<Task[]>, any>> {
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

  public getTask(
    taskId: string
  ): Promise<AxiosResponse<TeamGridResponse<Task>, any>> {
    return this.axios.request({ method: "GET", url: `/tasks/${taskId}` });
  }

  public createTask(
    data?: Task
  ): Promise<AxiosResponse<TeamGridResponse<Task>, any>> {
    return this.axios.request({ method: "POST", url: "/tasks", data });
  }

  public updateTask(
    taskId: string,
    data?: Task
  ): Promise<AxiosResponse<TeamGridResponse<Task>, any>> {
    return this.axios.request({ method: "PUT", url: `/tasks/${taskId}`, data });
  }

  public deleteTask(
    taskId: string
  ): Promise<AxiosResponse<TeamGridResponse<any>, any>> {
    return this.axios.request({ method: "DELETE", url: `/tasks/${taskId}` });
  }

  public startTracking(
    taskId: string,
    data?: TaskStartStopBodyParam
  ): Promise<AxiosResponse<TeamGridResponse<any>, any>> {
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
    data?: TaskStartStopBodyParam
  ): Promise<AxiosResponse<TeamGridResponse<any>, any>> {
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

  public getTimes(
    params?: TimeQueryParam
  ): Promise<AxiosResponse<TeamGridResponse<Time[]>, any>> {
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

  public getTime(
    timeId: string
  ): Promise<AxiosResponse<TeamGridResponse<Time>, any>> {
    return this.axios.request({ method: "GET", url: `/times/${timeId}` });
  }

  public createTime(
    data?: Time
  ): Promise<AxiosResponse<TeamGridResponse<Time>, any>> {
    return this.axios.request({ method: "POST", url: "/times", data });
  }

  public updateTime(
    timeId: string,
    data?: Time
  ): Promise<AxiosResponse<TeamGridResponse<Time>, any>> {
    return this.axios.request({ method: "PUT", url: `/times/${timeId}`, data });
  }

  public deleteTime(
    timeId: string
  ): Promise<AxiosResponse<TeamGridResponse<any>, any>> {
    return this.axios.request({ method: "DELETE", url: `/times/${timeId}` });
  }

  public getServices(
    params?: ServiceQueryParam
  ): Promise<AxiosResponse<TeamGridResponse<Service[]>, any>> {
    params = Object.assign(
      {
        page: 1,
        limit: 50,
      },
      params
    );

    return this.axios.request({ method: "GET", url: "/services", params });
  }

  public getService(
    serviceId: string
  ): Promise<AxiosResponse<TeamGridResponse<Service>, any>> {
    return this.axios.request({ method: "GET", url: `/services/${serviceId}` });
  }

  public getTags(
    params?: TagQueryParam
  ): Promise<AxiosResponse<TeamGridResponse<Tag[]>, any>> {
    params = Object.assign(
      {
        page: 1,
        limit: 50,
      },
      params
    );

    return this.axios.request({ method: "GET", url: "/tags", params });
  }

  public getTag(
    tagId: string
  ): Promise<AxiosResponse<TeamGridResponse<Tag>, any>> {
    return this.axios.request({ method: "GET", url: `/tags/${tagId}` });
  }

  public getLists(
    params?: ListQueryParam
  ): Promise<AxiosResponse<TeamGridResponse<List[]>, any>> {
    params = Object.assign(
      {
        page: 1,
        limit: 50,
        archived: false,
      },
      params
    );

    return this.axios.request({ method: "GET", url: "/lists", params });
  }

  public getList(
    listId: string
  ): Promise<AxiosResponse<TeamGridResponse<List>, any>> {
    return this.axios.request({ method: "GET", url: `/lists/${listId}` });
  }

  public createList(
    data?: List
  ): Promise<AxiosResponse<TeamGridResponse<List>, any>> {
    return this.axios.request({ method: "POST", url: "/lists", data });
  }

  public updateList(
    listId: string,
    data?: List
  ): Promise<AxiosResponse<TeamGridResponse<List>, any>> {
    return this.axios.request({ method: "PUT", url: `/lists/${listId}`, data });
  }

  public deleteList(
    listId: string
  ): Promise<AxiosResponse<TeamGridResponse<any>, any>> {
    return this.axios.request({ method: "DELETE", url: `/lists/${listId}` });
  }

  public getWebhooks(): Promise<
    AxiosResponse<TeamGridResponse<Webhook[]>, any>
  > {
    return this.axios.request({ method: "GET", url: "/webhooks" });
  }

  public getWebhook(
    webhookId: string
  ): Promise<AxiosResponse<TeamGridResponse<Webhook>, any>> {
    return this.axios.request({ method: "GET", url: `/webhooks/${webhookId}` });
  }

  public createWebhook(
    data?: Webhook
  ): Promise<AxiosResponse<TeamGridResponse<Webhook>, any>> {
    return this.axios.request({ method: "POST", url: "/webhooks", data });
  }

  public deleteWebhook(
    webhookId: string
  ): Promise<AxiosResponse<TeamGridResponse<any>, any>> {
    return this.axios.request({
      method: "DELETE",
      url: `/webhooks/${webhookId}`,
    });
  }
}

export default TeamGridSDK;
