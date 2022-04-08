import { Plugin } from "@nuxt/types";
import TeamGridSDK from "../api/TeamGridSDK";

const context: Plugin = (_, inject) => {
  const teamGridSDK = new TeamGridSDK();
  inject("teamGridSDK", teamGridSDK);
};

export default context;
