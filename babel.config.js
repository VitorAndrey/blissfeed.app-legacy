module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          allowUndefined: false,
        },
      ],
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@screens": "./src/screens",
            "@routes": "./src/routes",
            "@assets": "./src/assets",
            "@models": "./src/models",
            "@storage": "./src/storage",
            "@contexts": "./src/contexts",
            "@services": "./src/services",
            "@theme": "./src/theme",
            "@layout": "./src/components/layout",
            "@ui": "./src/components/ui",
          },
        },
      ],
    ],
  };
};
