const pjson = require("./package.json");
const { gitDescribeSync } = require("git-describe");

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].version = pjson.version;
      args[0].commitHash = gitDescribeSync().hash;
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/_variables.scss";`,
      },
    },
  },
};
