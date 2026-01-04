import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ContactForm from "../components/ContactForm";
import "@testing-library/jest-dom";


describe("Contact Form Component", () => {
  it("should render properly with input and button", () => {
    render(<ContactForm />);

    // check input & button presence
    const input = screen.getByPlaceholderText(/Enter your name/i);
    const button = screen.getByRole("button", { name: /submit/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});