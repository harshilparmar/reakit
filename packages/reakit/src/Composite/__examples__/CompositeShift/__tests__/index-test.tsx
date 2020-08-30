import * as React from "react";
import { render, press, axe } from "reakit-test-utils";
import CompositeShift from "..";

test("keyboard navigation", () => {
  const { getByText: text } = render(<CompositeShift />);
  press.Tab();
  expect(text("item-1-1")).toHaveFocus();
  press.ArrowRight();
  expect(text("item-1-2")).toHaveFocus();
  press.ArrowRight();
  expect(text("item-1-3")).toHaveFocus();
  press.ArrowDown();
  expect(text("item-2-2")).toHaveFocus();
  press.ArrowUp();
  expect(text("item-1-2")).toHaveFocus();
  press.End(null, { ctrlKey: true });
  expect(text("item-4-3")).toHaveFocus();
  press.ArrowUp();
  expect(text("item-3-2")).toHaveFocus();
  press.ArrowRight();
  expect(text("item-3-4")).toHaveFocus();
  press.ArrowDown();
  expect(text("item-4-3")).toHaveFocus();
  press.PageUp();
  expect(text("item-1-3")).toHaveFocus();
  press.ArrowDown();
  press.ArrowDown();
  press.End();
  expect(text("item-3-4")).toHaveFocus();
  press.PageDown();
  expect(text("item-3-4")).toHaveFocus();
  press.PageUp();
  expect(text("item-3-4")).toHaveFocus();
});

test("a11y", async () => {
  const { baseElement } = render(<CompositeShift />);
  expect(await axe(baseElement)).toHaveNoViolations();
});
