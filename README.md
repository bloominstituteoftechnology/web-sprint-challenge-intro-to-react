# Intro to React Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **introductory React**. During this sprint, you studied **React components and advanced styling**.

In your challenge this week, you will demonstrate your mastery of these skills by creating **a Star Wars page** using data from an API.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [x] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [x] Open the assignment in Canvas and click on the "Set up git" option.
- [x] Follow instructions to set up Codegrade's Webhook and Deploy Key.
- [x] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [ ] Check to see that Codegrade has accepted your git submission.

For a step-by-step on setting up Codegrade see [this guide.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374)

## Project Instructions

### Introduction

In this challenge you will create a web page that presents a styled list of characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

In meeting the minimum viable product (MVP) specifications listed below, your project might look somewhat similar to the solution examples below:

[Example](https://tk-assets.lambdaschool.com/b011a132-0916-4ed2-8955-14192de03a75_sample-screenshot.png)

[Another example](https://tk-assets.lambdaschool.com/3b82c793-2352-4d4d-a81d-e55bf350f7bd_sample-screenshot2.png)

### Instructions

Your finished project must include all of the following requirements:

- [ ] Use the endpoint `[GET] https://swapi.dev/api/people` (mocked in [msw](https://github.com/mswjs/msw)) to obtain characters.
- [ ] Set the list of characters into state.
- [ ] Render your characters to the DOM:

  1. Build a React component named 'Character' to render an individual character.
  1. Map over the list in state, and for each character render a Character to the page.
  1. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  1. The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  1. The components must be styled with **styled-components**.

  **Notes:**

- Data obtained from the endpoint using browser-run JavaScript is mocked with [msw](https://github.com/mswjs/msw).
- If you test the endpoint using HTTPie or Postman you will obtain different results, as msw won't intercept the request.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries.
- The `start` process can sometimes choke after adding new dependencies and may need to be restarted.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on any the following optional goals:

- [ ] Make the Character component more complex and break it into several subcomponents.
- [ ] Use the endpoint `[GET] https://swapi.dev/api/films` (mocked in msw) to obtain movie information to render with the characters.
- [ ] Create a helper function in separate module to remove unneeded information from the API data, before putting it in state.
- [ ] Create transitions or animations with styled-components.
- [ ] Use Promise.all to resolve an array of promises.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes.
- [ ] Create a pull request to merge `<firstName-lastName>` branch into `main`.
- [ ] Please don't merge your own pull request and make sure **you are on your own repo**.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
1. Describe component state.
1. Describe props.
1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?


-----


# API Routes

## All

```
{
    "people": "https://swapi.dev/api/people/", 
    "planets": "https://swapi.dev/api/planets/", 
    "films": "https://swapi.dev/api/films/", 
    "species": "https://swapi.dev/api/species/", 
    "vehicles": "https://swapi.dev/api/vehicles/", 
    "starships": "https://swapi.dev/api/starships/"
}
```


-----

## People (2 Example)

```
{
    "count": 82, 
    "next": "https://swapi.dev/api/people/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.dev/api/planets/1/", 
            "films": [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/2/", 
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "species": [], 
            "vehicles": [
                "https://swapi.dev/api/vehicles/14/", 
                "https://swapi.dev/api/vehicles/30/"
            ], 
            "starships": [
                "https://swapi.dev/api/starships/12/", 
                "https://swapi.dev/api/starships/22/"
            ], 
            "created": "2014-12-09T13:50:51.644000Z", 
            "edited": "2014-12-20T21:17:56.891000Z", 
            "url": "https://swapi.dev/api/people/1/"
        }, 
        {
            "name": "C-3PO", 
            "height": "167", 
            "mass": "75", 
            "hair_color": "n/a", 
            "skin_color": "gold", 
            "eye_color": "yellow", 
            "birth_year": "112BBY", 
            "gender": "n/a", 
            "homeworld": "https://swapi.dev/api/planets/1/", 
            "films": [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/2/", 
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/4/", 
                "https://swapi.dev/api/films/5/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "species": [
                "https://swapi.dev/api/species/2/"
            ], 
            "vehicles": [], 
            "starships": [], 
            "created": "2014-12-10T15:10:51.357000Z", 
            "edited": "2014-12-20T21:17:50.309000Z", 
            "url": "https://swapi.dev/api/people/2/"
        }, (...)
}
```


-----


## Planets (1 Example)

```
{
    "count": 60, 
    "next": "https://swapi.dev/api/planets/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Tatooine", 
            "rotation_period": "23", 
            "orbital_period": "304", 
            "diameter": "10465", 
            "climate": "arid", 
            "gravity": "1 standard", 
            "terrain": "desert", 
            "surface_water": "1", 
            "population": "200000", 
            "residents": [
                "https://swapi.dev/api/people/1/", 
                "https://swapi.dev/api/people/2/", 
                "https://swapi.dev/api/people/4/", 
                "https://swapi.dev/api/people/6/", 
                "https://swapi.dev/api/people/7/", 
                "https://swapi.dev/api/people/8/", 
                "https://swapi.dev/api/people/9/", 
                "https://swapi.dev/api/people/11/", 
                "https://swapi.dev/api/people/43/", 
                "https://swapi.dev/api/people/62/"
            ], 
            "films": [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/4/", 
                "https://swapi.dev/api/films/5/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "created": "2014-12-09T13:50:49.641000Z", 
            "edited": "2014-12-20T20:58:18.411000Z", 
            "url": "https://swapi.dev/api/planets/1/"
        }, 
        {
            "name": "Alderaan", 
            "rotation_period": "24", 
            "orbital_period": "364", 
            "diameter": "12500", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "grasslands, mountains", 
            "surface_water": "40", 
            "population": "2000000000", 
"residents": [
                "https://swapi.dev/api/people/5/", 
                "https://swapi.dev/api/people/68/", 
                "https://swapi.dev/api/people/81/"
            ], 
            "films": [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "created": "2014-12-10T11:35:48.479000Z", 
            "edited": "2014-12-20T20:58:18.420000Z", 
            "url": "https://swapi.dev/api/planets/2/"
        }, (...)
}
```


-----


## Films (1 Example)

```
{
    "count": 6, 
    "next": null, 
    "previous": null, 
    "results": [
        {
            "title": "A New Hope", 
            "episode_id": 4, 
            "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
            "director": "George Lucas", 
            "producer": "Gary Kurtz, Rick McCallum", 
            "release_date": "1977-05-25", 
            "characters": [
                "https://swapi.dev/api/people/1/", 
                "https://swapi.dev/api/people/2/", 
                "https://swapi.dev/api/people/3/", 
                "https://swapi.dev/api/people/4/", 
                "https://swapi.dev/api/people/5/", 
                "https://swapi.dev/api/people/6/", 
                "https://swapi.dev/api/people/7/", 
                "https://swapi.dev/api/people/8/", 
                "https://swapi.dev/api/people/9/", 
                "https://swapi.dev/api/people/10/", 
                "https://swapi.dev/api/people/12/", 
                "https://swapi.dev/api/people/13/", 
                "https://swapi.dev/api/people/14/", 
                "https://swapi.dev/api/people/15/", 
                "https://swapi.dev/api/people/16/", 
                "https://swapi.dev/api/people/18/", 
                "https://swapi.dev/api/people/19/", 
                "https://swapi.dev/api/people/81/"
            ], 
            "planets": [
                "https://swapi.dev/api/planets/1/", 
                "https://swapi.dev/api/planets/2/", 
                "https://swapi.dev/api/planets/3/"
            ], 
            "starships": [
                "https://swapi.dev/api/starships/2/", 
                "https://swapi.dev/api/starships/3/", 
                "https://swapi.dev/api/starships/5/", 
                "https://swapi.dev/api/starships/9/", 
                "https://swapi.dev/api/starships/10/", 
                "https://swapi.dev/api/starships/11/", 
                "https://swapi.dev/api/starships/12/", 
                "https://swapi.dev/api/starships/13/"
            ], 
            "vehicles": [
                "https://swapi.dev/api/vehicles/4/", 
                "https://swapi.dev/api/vehicles/6/", 
                "https://swapi.dev/api/vehicles/7/", 
                "https://swapi.dev/api/vehicles/8/"
            ], 
            "species": [
                "https://swapi.dev/api/species/1/", 
                "https://swapi.dev/api/species/2/", 
                "https://swapi.dev/api/species/3/", 
                "https://swapi.dev/api/species/4/", 
                "https://swapi.dev/api/species/5/"
            ], 
            "created": "2014-12-10T14:23:31.880000Z", 
            "edited": "2014-12-20T19:49:45.256000Z", 
            "url": "https://swapi.dev/api/films/1/"
        }, (...)
}
```


-----


## Species (1 Example)

```
{
    "count": 37, 
    "next": "https://swapi.dev/api/species/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Human", 
            "classification": "mammal", 
            "designation": "sentient", 
            "average_height": "180", 
            "skin_colors": "caucasian, black, asian, hispanic", 
            "hair_colors": "blonde, brown, black, red", 
            "eye_colors": "brown, blue, green, hazel, grey, amber", 
            "average_lifespan": "120", 
            "homeworld": "https://swapi.dev/api/planets/9/", 
            "language": "Galactic Basic", 
            "people": [
                "https://swapi.dev/api/people/66/", 
                "https://swapi.dev/api/people/67/", 
                "https://swapi.dev/api/people/68/", 
                "https://swapi.dev/api/people/74/"
            ], 
            "films": [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/2/", 
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/4/", 
                "https://swapi.dev/api/films/5/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "created": "2014-12-10T13:52:11.567000Z", 
            "edited": "2014-12-20T21:36:42.136000Z", 
            "url": "https://swapi.dev/api/species/1/"
        }, (...)
}
```


-----


## Vehicles (1 Example)

```
{
    "count": 39, 
    "next": "https://swapi.dev/api/vehicles/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Sand Crawler", 
            "model": "Digger Crawler", 
            "manufacturer": "Corellia Mining Corporation", 
            "cost_in_credits": "150000", 
            "length": "36.8 ", 
            "max_atmosphering_speed": "30", 
            "crew": "46", 
            "passengers": "30", 
            "cargo_capacity": "50000", 
            "consumables": "2 months", 
            "vehicle_class": "wheeled", 
            "pilots": [], 
            "films": [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/5/"
            ], 
            "created": "2014-12-10T15:36:25.724000Z", 
            "edited": "2014-12-20T21:30:21.661000Z", 
            "url": "https://swapi.dev/api/vehicles/4/"
        }, (...)
}
```


-----


## Starships (1 Example)

```
{
    "count": 36, 
    "next": "https://swapi.dev/api/starships/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "CR90 corvette", 
            "model": "CR90 corvette", 
            "manufacturer": "Corellian Engineering Corporation", 
            "cost_in_credits": "3500000", 
            "length": "150", 
            "max_atmosphering_speed": "950", 
            "crew": "30-165", 
            "passengers": "600", 
            "cargo_capacity": "3000000", 
            "consumables": "1 year", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "60", 
            "starship_class": "corvette", 
            "pilots": [], 
            "films": [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "created": "2014-12-10T14:20:33.369000Z", 
            "edited": "2014-12-20T21:23:49.867000Z", 
            "url": "https://swapi.dev/api/starships/2/"
        }, (...)
}
```


-----



