import React from "react";
import { Button } from "./Button";
import { render, fireEvent } from "@testing-library/react-native";

describe("MyButton", () => {
  it("calls onPress when pressed", () => {
    const onPress = jest.fn();
    const { getByText } = render(<Button label="Press me" onPress={onPress} />);
    const button = getByText("Press me");
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });
});
