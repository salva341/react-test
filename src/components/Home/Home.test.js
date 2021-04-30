import {cleanup, render, screen} from '@testing-library/react';
import Home from "./Home";

afterEach(cleanup);

test('renders visit my profile text', () => {
    render(<Home/>);
    const visitProfileText = screen.getByText(/Visit my profile at/i);
    expect(visitProfileText).toBeInTheDocument();
});

test('renders all the profile icons', () => {
    render(<Home/>);
    const linkedinIcon = screen.getByTestId("linkedin");
    const githubIcon = screen.getByTestId("github");
    const codepenIcon = screen.getByTestId("codepen");

    expect(linkedinIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
    expect(codepenIcon).toBeInTheDocument();
});

test('linkedin link should contain the correct linkedin url profile', () => {
    render(<Home/>);
    const validUrl = 'https://www.linkedin.com/in/salva-romero-aguilar';
    const linkedinRef = screen.getByTestId("linkedin-ref");
    expect(linkedinRef).toHaveAttribute('href', validUrl);
});

test('github link should contain the correct github url profile', () => {
    render(<Home/>);
    const validUrl = 'https://github.com/salva341';
    const githubRef = screen.getByTestId("github-ref");
    expect(githubRef).toHaveAttribute('href', validUrl);
});


test(' codepen link should contain the correct codepen url profile', () => {
    render(<Home/>);
    const validUrl = 'https://codepen.io/salva341/';
    const codepenRef = screen.getByTestId("codepen-ref");
    expect(codepenRef).toHaveAttribute('href', validUrl);
});

it('should contain the react logo', () => {
    render(<Home/>);
    const reactLogoImage = screen.getByTestId('react-logo');
    expect(reactLogoImage).toBeInTheDocument();
})
