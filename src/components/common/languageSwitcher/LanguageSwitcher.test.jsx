import { render, screen, fireEvent } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";
import LanguageSwitcher from "./LanguageSwitcher";

describe("LanguageSwitcher", () => {
  test("renders EN and FR buttons", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>,
    );

    expect(screen.getByText("EN")).toBeInTheDocument();
    expect(screen.getByText("FR")).toBeInTheDocument();
  });

  test("changes language to french", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>,
    );

    fireEvent.click(screen.getByText("FR"));
    expect(i18n.language).toBe("fr");
  });
});
