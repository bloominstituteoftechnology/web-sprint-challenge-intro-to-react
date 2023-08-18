# Sprint 6 Challenge

## Introduction

Welcome to Sprint Challenge 6! Today, you'll practice using React to manipulate the DOM by fetching data from the network and building a list of Star Wars characters.

This experience will give you a taste of what a take-home assignment might be like, during a hiring process for a React position.

Here's an overview of the tasks you need to complete:

1. **Obtain** JSON data from a web service.
1. **Combine** data obtained from different sources into a single data structure.
1. **Render** repeatable components to the DOM using the combined data and React.

To succeed in this challenge, you'll need the following technical skills:

1. **Promises** and the ability to deal with asynchronous code.
1. **Making HTTP requests** with Axios or fetch.
1. **Using React's state and effect** hooks.
1. **Creating React components** and rendering them inside other components.
1. **Looping over data** passing props into React components.
1. **Adding simple interactivity** to components using event handlers.

Additionally, the following soft skills will greatly impact your performance:

1. Attention to detail. Make sure there isn't a single character out of place!
1. Perseverance. Keep trying until you figure it out!
1. Patience. Make sure to read the entire README for important information.

## Instructions

You are in the middle of a hiring process for a local startup that's looking for a React developer, and you have been assigned a challenge to complete. The task involves demonstrating proficiency with basic React moves like fetching data, building interactive components and using hooks.

Specifically, you need to complete a website that displays a list of Star Wars characters along with their basic information such as ID, name, date of birth, and home world. Users of the app should be able to click on a character to expand some information about the character's home world. You can refer to the [full mockup](https://bloominstituteoftechnology.github.io/W_U2_S6_sprint_challenge) to have an idea of the design.

To help you complete the task, several members of your team will provide you with instructions and advice.

### 💾 DevOps Engineer

**Below, your future DevOps expert will help you set up your local environment and launch the project.**

<details>
  <summary>Click to read</summary>

  ---

This is a **full-stack web application** that comprises both back-end and front-end components. If deployed to production, the back-end part would run in the cloud (think Amazon Web Services or Azure), while the front-end -a React app- would execute inside the user's web browser (like Chrome for Android, or Firefox for desktop).

As a front-end engineer, your focus is mainly on the files that load **on the user's device**. In this particular case, these files live inside the `frontend` folder. The `backend` folder contains a web server built in Node, containing the API needed for this project.

1. You will **clone this repository** to your computer, which will allow you to run the software locally for development and testing purposes.

1. You will navigate your terminal to the project folder **and execute `npm install`**. This will install the libraries declared inside `package.json`. Some of these packages are needed for the back-end to do its job of serving JSON data.

1. After successful installation, **execute `npm run dev` in a terminal, and `npm test` in a different terminal**. On successful start, you will load the app in Chrome **at `http://localhost:3003`**.

1. If you haven't already, install the [Eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VSCode. It will highlight syntax errors and problems right inside your editor, which saves tons of time.

My job assisting you with local setup of the app is done! You will speak to our designer next.

  ---

</details>

### 🎨 Product Designer

**Below, you will find information on how to approach the task, from your future Product Designer.**

<details>
  <summary>Click to read</summary>

  ---

Collaboration between a designer and a web developer can be very powerful. Designers excel at creating amazing user experiences and have a keen eye for beauty and usability, while developers are experts in the underlying technology of the product.

Your job as a web developer is to implement the design with as much fidelity as possible. While a developer might think they have a better way to arrange elements on the screen, the mocks and designs are the result of research and hard work. It's important to treat them with the respect they deserve.

It's crucial to use the readable texts designed for the user interface **verbatim**. If a design reads "Loading Characters...", then "Loading _the_ Characters..." is incorrect. Attention to detail is critical!

There are other constraints and requirements that must be followed, such as sticking to certain class names or keeping the structure of the HTML a certain way.

Fortunately, you have [a very detailed mock](https://bloominstituteoftechnology.github.io/W_U2_S6_sprint_challenge/) that you can load in your browser and inspect closely, which will make your job much easier.

  ---

</details>

### 🥷 Lead Developer

**Below, your future Team Lead will discuss strategy and tactics for dealing with this ticket.**

<details>
  <summary>Click to read</summary>

  ---

Hey! Let's make sure you're up to speed with your **action items so far**.

- [x] The app is installed on your machine, with both `dev` and `test` scripts running in terminals.
- [x] You studied the [mock](https://bloominstituteoftechnology.github.io/W_U2_S6_sprint_challenge/) in the Elements tab of Dev Tools.
- [x] You saw how the "planet" paragraph is mounted and unmounted from the DOM as the user clicks on a character.

Awesome! Our back-end engineer says that the JSON data needed to build the Star Wars Character Cards comes from two endpoints:

- Endpoint A [GET] <http://localhost:9009/api/people>
- Endpoint B [GET] <http://localhost:9009/api/planets>

❗ You should stop now, and **try out both endpoints using Postman**, to see what they return.

Inside `frontend/components/App.js`, and **on first render only**, fetch the data from both endpoints above.

Here's the tricky thing: each character fetched using Endpoint A has a "homeworld" property, but the value of this property is not the name of the planet but its ID instead. This means you must use the data obtained from Endpoint B to obtain the missing piece of information about each character: the name of their home world.

For fetching, you can optionally use `Promise.all` to handle the requests. We do not need the data from request A in order to _start_ request B, so the requests can happen concurrently instead of back-to-back. **This will make the app feel faster** to the user!

Once you have the responses from Endpoints A and B stored inside variables, check that they match what you saw in Postman, and then **use your JavaScript skills to combine the two lists into a single data structure** that is comfortable to work with. There may be some array methods that can help with this...Ideally, it would look something like this:

```js
[
  {
    id: 18,
    name: "Luke Skywalker",
    // etc
    homeworld: {
      id: 31,
      name: "Tatooine",
      // etc
    }
  },
  // other characters
]
```

Once you have the data in the right shape stored in App state, you can **start working on your `/frontend/components/Character.js` component** that takes in the information about a single character via props. You will use this component inside App.js, looping over the data held in App state and rendering a Character at each iteration of the loop.

Make sure that each character that renders to the DOM has the **exact same class names and text contents** as those in the design! Also, render the characters **in the same order** as they arrive from Endpoint A.

Note how for each card, the planet information is not available on page load. A paragraph containing the name of a given character's home world appears in the DOM when a user clicks on the character's card, as you can see in the [mock](https://bloominstituteoftechnology.github.io/W_U2_S6_sprint_challenge). Clicking again on the character unmounts the paragraph completely, removing the planet information from the DOM. Whether the home world name shows or not is private component state of the Character component.

Reach out if you get too stuck, and have fun!

  ---

</details>

## FAQ

<details>
  <summary>How do I submit this task?</summary>

You submit via Codegrade. Check the assignment page on your learning platform.

</details>

<details>
  <summary>I am getting errors when I run npm install or npm run dev. What is going on?</summary>

This project requires Node correctly installed on your computer in order to work. Your learning materials should have covered installation of Node. Sometimes Node can be installed but mis-configured. You can try executing `npm run install:violently` (check out `package.json` to see what this does), but if Node errors are recurrent, it indicates something is wrong with your machine or configuration, in which case you should request assistance from Staff.

</details>

<details>
  <summary>Do I need to install any libraries?</summary>

No. Everything you need should be installed already, including Axios.

</details>

<details>
  <summary>Am I allowed to edit the styling of the site?</summary>

You are welcome to add your personal touch to the site using Styled Components. There is just one rule: all tests must pass! Our recommendation is to wait until MVP is achieved before editing the styles.

</details>

<details>
  <summary>My app does not work! How do I debug it?</summary>

Save your changes, and reload the site in Chrome. If you have a syntax problem in your code, the app will print error messages in the Console. Focus on the first message. Place console logs right before the crash site (errors usually inform of the line number where the problem is originating) and see if your variables contain the data you think they do. If there are no errors but the page is not doing what it's supposed to, the debugging technique is similar: put console logs to ensure that the code you are working on is actually executing, and to check that all variables in the area hold the correct data.

</details>

<details>
  <summary>How do I run tests against my code?</summary>

Execute `npm test` in your terminal. These are the same tests that execute inside Codegrade. Although this never crossed your mind, tampering with the test file won't change your score, because Codegrade uses a pristine copy of the original test file, `mvp.test.js`. If a particular test is giving you grief, don't jump straight to the code to try and fix it. Go to Chrome first, and make sure you can replicate the problem there. A problem we can reliably replicate is a problem mostly fixed.

</details>

<details>
  <summary>I believe my code is correct and the test is wrong. What do I do?</summary>

On occasion the test runner will get stuck. Use CTRL-C to kill the tests, and then `npm test` to launch them again. Try to reproduce the problem the test is complaining about by interacting with the site in Chrome, and do not code "to make the test happy". Code so that **your app does exactly what the mock does**. The tests are there for confirmation. Although it's possible that a particular test be flawed, it's more likely that the bug is in your own code. If the problem persists, please request assistance from Staff.

</details>

<details>
  <summary>The output of the test script is just too overwhelming! What can I do?</summary>

If you need to disable all tests except the one you are focusing on, edit the `mvp.test.js` file and, as an example, change `test('👉 focus on this', () => { etc })` to be `test.only('👉 focus on this', () => { etc })`. (Note the "only".) This won't affect Codegrade, because Codegrade runs its own version of the tests. Keep in mind though, if there is a syntax problem with your code that is causing an error to be thrown, all tests will fail.

</details>

<details>
  <summary>Why can't endpoints provide the data in the correct shape from the get-go?</summary>

As web developers, we often don't have control over our sources of data, and it's common to have to combine JSON from various sources into a data structure that works for the front-end. Even if the endpoints were under our control, and the back-end team were willing to build a new endpoint or improve existing ones, bug fixes and features sometimes can't wait that long.

</details>

<details>
  <summary>I messed up and want to start over! How do I do that?</summary>

**Do NOT delete your repository from GitHub!** Instead, commit _frequently_ as you work. Make a commit whenever you achieve _anything_ and the app isn't crashing in Chrome. This in practice creates restore points you can use should you wreak havoc with your app. If you find yourself in a mess, use `git reset --hard` to simply discard all changes to your code since your last commit. If you are dead-set on restarting the challenge from scratch, you can do this with Git as well, but it is advised that you request assistance from Staff.

</details>

<details>
  <summary>Why are there so many files in this project?</summary>

Although a small, "old-fashioned" website might be made of just HTML, CSS and JS files, these days we mostly manage projects with Node and its package manager, NPM. Node apps typically have a `package.json` file and several other configuration files placed at the root of the project. This project also includes automated tests and a web server, which adds a little bit of extra complexity and files.

</details>

<details>
  <summary>Is this how React projects are normally organized?</summary>

React projects can be organized in a million ways, there aren't many standards. Some developers like it like this, while others prefer to use opinionated frameworks, which do a lot of magic but prescribe that folders and files be structured and named just so.

</details>

<details>
  <summary>What are the package.json and package-lock.json files?</summary>

The `package.json` file contains meta-information about the project like its version number, scripts that the developer can execute, and a list of the dependencies that are downloaded when you execute `npm install`. There can be some wiggle room to allow newer versions of the dependencies to be installed, so the `package-lock.json` file, when present, makes sure the exact same versions of everything are used every time the project is installed from scratch.

</details>

<details>
  <summary>What is the .eslintrc.js file?</summary>

This file works in combination with the Eslint extension for VSCode to highlight syntax errors and problems in your code. By editing this file you can customize your linting rules.

</details>

<details>
  <summary>What is Jest?</summary>

Jest is a framework that allows you to write tests and execute them, to alert you very quickly of problems with the code. Jest can do in seconds what an entire Quality Assurance team would take hours or even days. In the context of the Sprint Challenge, Jest is used to check your code against specification and give you a grade (% of tests passing).

</details>

**Project created with [@bloomtools/react@0.1.7](https://github.com/bloominstituteoftechnology/npm-tools-react) and Node v18.16.0 on Thu, July 06, 2023 at 03:27 PM**
