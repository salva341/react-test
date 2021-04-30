import { cleanup, render, screen } from '@testing-library/react';
import Characters from "./Characters";

afterEach(cleanup);

test('should render all pagination elements', () => {
    render(<Characters />)
    const backButton = screen.getByTestId("back-button");
    const nextButton = screen.getByTestId("next-button");
    const pageNumber = screen.getByTestId("page-number");

    expect(backButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(pageNumber).toBeInTheDocument();
});

test('should render the characters container', () => {
    render(<Characters />)
    const charactersContainer = screen.getByTestId("characters-container");
    expect(charactersContainer).toBeInTheDocument();
});

test('should navigate to page 2', () => {


});

test('should navigate to page 1', () => {

});

test("should call to characters API and return the correct response", () => {
    render(<Characters />);
});


