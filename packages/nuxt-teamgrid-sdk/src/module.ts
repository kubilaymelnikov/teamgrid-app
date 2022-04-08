import { Module } from "@nuxt/types";
import { join, resolve } from "path";

const teamGridSDKModule: Module = function () {
  this.addPlugin({
    src: resolve(__dirname, "plugins/context.js"),
    fileName: join("teamgrid-shared", "plugins.context.js"),
  });

  this.extendBuild((config) => {
    config.resolve.alias["@nuxt-teamgrid-sdk"] = resolve(__dirname);
  });
};

export default teamGridSDKModule;

export const meta = require("./../package.json");
