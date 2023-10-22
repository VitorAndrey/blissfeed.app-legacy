import React from "react";
import { render } from "@testing-library/react-native";

import App from "../../App";

describe("App", () => {
  test("render", () => {
    const { debug } = render(<App />);
  });
});
