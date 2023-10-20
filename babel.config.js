module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@screens": "./src/screens",
            "@routes": "./src/routes",
            "@layout": "./src/components/layout",
            "@ui": "./src/components/ui",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
