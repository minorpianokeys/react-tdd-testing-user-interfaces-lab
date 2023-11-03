import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm ______`", () => {
    //Arrange
    render(<App />);
    //Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });
    //Assert
    expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text indentifying content of image", () => {
    render(<App />);

    const image = screen.getByAltText("My Profile Pic")

    expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
})

test("displays a second-level heading with the text `About Me`", () => {
    render(<App />);

    const secondLevelText = screen.getByRole("heading", {
        name: /about me/i,
        level: 2
    });

    expect(secondLevelText).toBeInTheDocument();
})

test("displays a paragraph tag for biography", () => {
    render (<App />);

    const biography = screen.getByText(/my biography/i);

    expect(biography).toBeInTheDocument();
})

test("displays two links, one for GitHub page, and one for LinkedIn page", () => {
    render (<App />);

    const githubLink = screen.getByRole("link", {
        name: /github/i
    });

    const linkedinLink = screen.getByRole("link", {
        name: /linkedin/i
    })

    expect(githubLink).toHaveAttribute("href", ("https://github.com"));

    expect(linkedinLink).toHaveAttribute("href", ("https://linkedin.com"));
})

