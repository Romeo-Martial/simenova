import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";
import Navbar from "./Navbar";

function renderNavbar() {
  return render(
    <MemoryRouter>
      <I18nextProvider i18n={i18n}>
        <Navbar />
      </I18nextProvider>
    </MemoryRouter>,
  );
}

describe("Navbar", () => {
  test("renders SIMENOVA logo", () => {
    renderNavbar();
    expect(screen.getByText("SIMENOVA")).toBeInTheDocument();
  });

  test("renders contact CTA", () => {
    renderNavbar();
    expect(
      screen.getAllByText(/consultation|consultation/i).length,
    ).toBeGreaterThan(0);
  });

  test("opens mobile menu button", () => {
    renderNavbar();
    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");
  });
});
