# Intro to React Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **introductory React**. During this sprint, you studied **React components and advanced styling**.

In your challenge you will demonstrate your mastery of these skills by creating **a Star Wars page** using data from an API.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review.

You are not allowed to collaborate during the sprint challenge.

### Project Set Up

- [ ] Create a forked copy of this project
- [ ] Clone your OWN version of the repository (Not BloomTech's by mistake!)
- [ ] Implement the project on the main branch, committing changes regularly
- [ ] Push commits: `git push origin main`

## Project Instructions

### Introduction

In this challenge you will create a web page that presents a styled list of characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

In meeting the minimum viable product (MVP) specifications listed below, your project might look somewhat similar to the solution examples below:

[Example](https://github.com/bloominstituteoftechnology/web-sprint-challenge-intro-to-react/blob/main/Assets/sample-screenshot.png)

[Another example](https://github.com/bloominstituteoftechnology/web-sprint-challenge-intro-to-react/blob/main/Assets/sample-screenshot2.png)

### Instructions

Your finished project must include all of the following requirements:

- [ ] Use the endpoint `[GET] https://swapi.dev/api/people/` (mocked in [msw](https://github.com/mswjs/msw)) to obtain characters.
- [ ] Set the list of characters into state.
- [ ] Render your characters to the DOM:

  1. Build a React component named 'Character' to render an individual character.
  1. Map over the list in state, and for each character render a Character to the page.
  1. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  1. The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  1. The components must be styled with **styled-components**.

  **Notes:**

- Data obtained from the endpoint using browser-run JavaScript is mocked with [msw](https://github.com/mswjs/msw). It is not necessary to understand all that MSW is doing, it is only necessary to know that when you use axios to send a request to `https://swapi.dev/api/people/` you will get the necessary data back.
- If you test the endpoint using HTTPie or Postman you will obtain different results, as msw won't intercept the request.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries.
- The `start` process can sometimes choke after adding new dependencies and may need to be restarted.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on any of the following optional goals:

- [ ] Make the Character component more complex and break it into several subcomponents.
- [ ] Use the endpoint `[GET] https://swapi.dev/api/films/` (mocked in msw) to obtain movie information to render with the characters.
- [ ] Create a helper function in separate module to remove unneeded information from the API data, before putting it in state.
- [ ] Create transitions or animations with styled-components.
- [ ] Use Promise.all to resolve an array of promises.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the main branch.
- [ ] Check Codegrade for automated feedback.

## Stretch Interview Questions

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
1. Describe component state.
1. Describe props.
1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
