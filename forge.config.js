/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require("path");

module.exports = {
  packagerConfig: {
    name: "electron-app",
    icon: join(__dirname, "/resources/favicon.ico"),
    iconUrl: join(__dirname, "/resources/favicon.ico"),
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "electron-app",
        icon: join(__dirname, "/resources/favicon.ico"),
        iconUrl: join(__dirname, "/resources/favicon.ico"),
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./webpack.main.config.js",
        renderer: {
          config: "./webpack.renderer.config.js",
          entryPoints: [
            {
              html: "./resources/index.html",
              js: "./src/renderer.ts",
              name: "main_window",
              preload: {
                js: "./src/natives/preload.ts",
              },
            },
          ],
        },
      },
    ],
  ],
};
