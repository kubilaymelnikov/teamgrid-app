import { Module } from "@nuxt/types";
import { join, resolve } from "path";
import TeamGridSDK from "./api/TeamGridSDK";

const teamGridSDKModule: Module = function () {
  this.addPlugin({
    src: resolve(__dirname, "plugins/context.js"),
    fileName: join("teamgrid-shared", "plugins.context.js"),
  });

  this.extendBuild((config) => {
    config.resolve.alias["@nuxt-teamgrid-sdk"] = resolve(__dirname);
  });
};

declare module "vue/types/vue" {
  interface Vue {
    $teamGridSDK: TeamGridSDK;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $teamGridSDK: TeamGridSDK;
  }
  interface Context {
    $teamGridSDK: TeamGridSDK;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $teamGridSDK: TeamGridSDK;
  }
}

export default teamGridSDKModule;

export * from "./module";
export * from "./plugins/context";
export * from "./api/TeamGridSDK";
export * from "./api/types/ContactResponse";
export * from "./api/types/ListResponse";
export * from "./api/types/ProjectResponse";
export * from "./api/types/ServiceResponse";
export * from "./api/types/TagResponse";
export * from "./api/types/TaskResponse";
export * from "./api/types/TeamResponse";
export * from "./api/types/TimeResponse";
export * from "./api/types/UserResponse";
export * from "./api/types/WebhookResponse";

export const meta = require("./../package.json");
