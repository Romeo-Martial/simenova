import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import HomePage from "./HomePage";

describe("HomePage", () => {
  test("renders hero heading", () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <HomePage />
        </I18nextProvider>
      </MemoryRouter>,
    );

    expect(
      screen.getByText(
        /Data Analysis and Machine Learning for Smarter Health & Biotech Decisions/i,
      ),
    ).toBeInTheDocument();
  });
});
