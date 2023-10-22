import React from "react";
import { render } from "@testing-library/react-native";

import { Button } from "@ui/Button";
import { Text } from "@ui/Text";
import { GoogleBtn } from "@ui/GoogleBtn";

describe("Ui Components", () => {
  test("if Button renders correctly", () => {
    render(<Button>Text</Button>);
  });

  // test("if GoogleButton renders correctly", () => {
  //   render(<GoogleBtn>Text</GoogleBtn>);
  // });

  test("if Text renders correctly", () => {
    render(<Text>Text</Text>);
  });
});
