# Intro to React Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **introductory React**. During this sprint, you studied **React components and advanced styling**.

In your challenge this week, you will demonstrate your mastery of these skills by creating **a Star Wars page** using data from an API.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support by dropping a :wave: in your help channel when needed.

## Introduction

In this challenge you will create a web page that presents a styled list of characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

In meeting the minimum viable product (MVP) specifications listed below, your project might look somewhat similar to the solution examples below:

[Example](https://tk-assets.lambdaschool.com/b011a132-0916-4ed2-8955-14192de03a75_sample-screenshot.png)

[Another example](https://tk-assets.lambdaschool.com/3b82c793-2352-4d4d-a81d-e55bf350f7bd_sample-screenshot2.png)

## Instructions

### Task 1: Project Setup

* [ ] Fork and clone this repository.
* [ ] Create a new working branch: `git checkout -b <firstName-lastName>`.
* [ ] Implement the project on your newly created branch, committing changes regularly.
* [ ] Push commits: `git push origin <firstName-lastName>`.
* [ ] Execute `npm install` to install your dependencies.
* [ ] Execute `npm start` to start your application.

### Task 2: CodeGrade Setup

* [ ] Open the assignment in Canvas and follow [these instructions](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374) on setting up Codegrade.
* [ ] Set up Codegrade's Webhook and Deploy Key, making sure your deployment is set to your `<firstName-lastName>` branch.
* [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
* [ ] Check to see that Codegrade has accepted your git submission.

### Task 3: Project Requirements

Your finished project must include all of the following requirements:

* [ ] Use the endpoint `[GET] https://swapi.dev/api/people` (mocked in [msw](https://github.com/mswjs/msw)) to obtain characters.
* [ ] Set the list of characters into state.
* [ ] Render your characters to the DOM:

  1. Build a React component named 'Character' to render an individual character.
  1. Map over the list in state, and for each character render a Character to the page.
  1. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  1. The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  1. The components must be styled with **styled-components**.

  **Notes:**

* Data obtained from the endpoint using browser-run JavaScript is mocked with [msw](https://github.com/mswjs/msw).
* If you test the endpoint using HTTPie or Postman you will obtain different results, as msw won't intercept the request.
* You are welcome to create additional files but **do not move or rename existing files** or folders.
* Do not alter your `package.json` file except to install extra libraries.
* The `start` process can sometimes choke after adding new dependencies and may need to be restarted.
* In your solution, it is essential that you follow best practices and produce clean and professional results.
* Schedule time to review and polish your work, including spell-checking and grammar-checking.
* It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 4: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on any the following optional goals:

* [ ] Make the Character component more complex and break it into several subcomponents.
* [ ] Use the endpoint `[GET] https://swapi.dev/api/films` (mocked in msw) to obtain movie information to render with the characters.
* [ ] Create a helper function in separate module to remove unneeded information from the API data, before putting it in state.
* [ ] Create transitions or animations with styled-components.
* [ ] Use Promise.all to resolve an array of promises.

## Submission format

* [ ] Submit via Codegrade by commiting and pushing any new changes. Commits pushed after the deadline will not be processed.
* [ ] Submit a pull-request to merge `<firstName-lastName>` branch into `main`. Please don't merge your own pull request and make sure you are on your own repo.
* [ ] Check Codegrade for automated feedback and (in a few days) for reviewer feedback.
* [ ] For more information on how to access and read your feedback, check [here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
1. Describe component state.
1. Describe props.
1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
