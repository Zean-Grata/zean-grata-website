import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import ContactForm from "../components/ContactForm";

describe("Contact Form Component", () => {
  it("should render five inputs and a button", () => {
    render(<ContactForm />);
    
    // To mock the form entering the viewport
    mockAllIsIntersecting(true);

    const nameInput = screen.getByPlaceholderText(/Enter your first name/i);
    const surnameInput = screen.getByPlaceholderText(/Enter your last name/i);
    const emailInput = screen.getByPlaceholderText(/Enter your email address/i);
    const messageInput = screen.getByPlaceholderText(/Type your message here.../i);
    const phoneInput = screen.getByPlaceholderText(/Enter your phone number/i);
    const button = screen.getByRole("button", { name: /submit/i });

    expect(nameInput).toBeInTheDocument();
    expect(surnameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should validate email addresses", () => {
    render(<ContactForm />);

    mockAllIsIntersecting(true);
  })
});