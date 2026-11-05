# Frontend Mentor - Flashcard App solution

This is a solution to the [Flashcard App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/flashcard-app). It lets users create and organize flashcards, study with category filters, track mastery, and save progress in the browser.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Create, edit, and delete flashcards
- Browse cards and organize them by category
- Filter cards by one or more categories
- Hide mastered cards and shuffle the cards
- Study one card at a time and reveal its answer
- Mark cards as known, reset their progress, and navigate between cards
- View study statistics that reflect their progress
- Keep their flashcards and progress after refreshing the page

### Screenshot

[All Cards Page Desktop View](./public/AllCards-Desktop.png)
[All Cards Page Mobile View](./public/AllCards-Mobile.png)
[Study Mode Page Desktop View](./public/StudyMode-Desktop.png)
[Study Mode Page Mobile View](./public/StudyMode-Mobile.png)

### Links

- Challenge: [Frontend Mentor - Flashcard App](https://www.frontendmentor.io/challenges/flashcard-app)
- Solution URL: [https://github.com/sim-ps/Flashcard-App](https://github.com/sim-ps/Flashcard-App)
- Live Site URL: [https://flashcard-app-blond-chi.vercel.app/all-cards](https://flashcard-app-blond-chi.vercel.app/all-cards)

## My process

### Built with

- React and reusable components
- Vite for local development and production builds
- React Router for navigation
- Tailwind CSS for responsive styling
- Motion for UI transitions
- localStorage for saving flashcards and progress
- ESLint for code quality checks

### What I learned

Building this app helped me understand how to share flashcard data and actions across different parts of a React app. I also learned to use the filtered cards as the source for study navigation, so the Next button behaves correctly when a category filter is active.

I used localStorage to keep the flashcards and study progress after a page refresh in the same browser.

### Continued development

I’d like to connect the app to a backend and database so users can access their flashcards and progress across devices.

### Useful resources

- [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/flashcard-app) - The original design and requirements
- [React documentation](https://react.dev/) - Helpful for learning React state and components
- [React Router documentation](https://reactrouter.com/) - Useful for setting up navigation
- [Tailwind CSS documentation](https://tailwindcss.com/) - Useful for building responsive layouts

## Author

- GitHub - [@sim-ps](https://github.com/sim-ps)
- Frontend Mentor - [@sim-ps](https://www.frontendmentor.io/profile/sim-ps)

## Acknowledgments

Thanks to Frontend Mentor for the challenge design and requirements, and to the React, Vite, and Tailwind communities for their documentation and tools.
