import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/react/dont-cleanup-after-each";
import { BrowserRouter } from "react-router-dom";
import Header from ".";

test("Render header", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.queryByRole("search")).not.toBeInTheDocument();
});
