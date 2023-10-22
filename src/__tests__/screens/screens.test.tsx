import React from "react";
import { render } from "@testing-library/react-native";

import { Splash } from "@screens/Splash";

describe("Screens", () => {
  test("if Splash renders correctly", () => {
    const handleNavigate = jest.fn();

    render(<Splash />);
  });
});
