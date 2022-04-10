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
export * from "./api/types/Contact";
export * from "./api/types/List";
export * from "./api/types/Project";
export * from "./api/types/Service";
export * from "./api/types/Tag";
export * from "./api/types/Task";
export * from "./api/types/Team";
export * from "./api/types/TeamGridResponse";
export * from "./api/types/Time";
export * from "./api/types/User";
export * from "./api/types/Webhook";

export const meta = require("./../package.json");
