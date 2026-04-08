import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";
import CaseStudyCard from "./CaseStudyCard";

describe("CaseStudyCard", () => {
  test("renders translated case study content", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <CaseStudyCard
          titleKey="home.caseStudies.items.forecasting.title"
          challengeKey="home.caseStudies.items.forecasting.challenge"
          solutionKey="home.caseStudies.items.forecasting.solution"
          outcomeKey="home.caseStudies.items.forecasting.outcome"
        />
      </I18nextProvider>,
    );

    expect(
      screen.getByText(
        /Improving Forecast Accuracy for a Health Innovation Team/i,
      ),
    ).toBeInTheDocument();
  });
});
