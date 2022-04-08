import { Plugin } from "@nuxt/types";
import TeamGridSDK from "@nuxt-teamgrid-sdk/api/TeamGridSDK";

declare module "vue/types/vue" {
  interface Vue {
    $myInjectedFunction(message: string): void;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $myInjectedFunction(message: string): void;
  }

  interface Context {
    $myInjectedFunction(message: string): void;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $myInjectedFunction(message: string): void;
  }
}

const context: Plugin = (_, inject) => {
  const teamGridSDK = new TeamGridSDK();
  inject("teamGridSDK", teamGridSDK);
};

export default context;
