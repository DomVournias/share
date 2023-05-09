module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            screens: "./screens",
            components: "./components",
            assets: "./assets",
            context: "./context",
            hooks: "./hooks",
            navigation: "./navigation",
            styles: "./styles",
            utils: "./utils",
            lib: "./lib",
          },
          ignore: ["node_modules"],
        },
      ],
    ],
  };
};
