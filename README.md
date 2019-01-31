# Urban Choreo-East Coast Page

## Status

[![Latest release](https://img.shields.io/github/tag/wilsonj806/urban-choreo-ec.svg)](https://github.com/wilsonj806/urban-choreo-ec)
![Current package.json version](https://img.shields.io/github/package-json/v/wilsonj806/urban-choreo-ec.svg?label=current%20version)
![Top language](https://img.shields.io/github/languages/top/wilsonj806/urban-choreo-ec.svg)


- [**Live Site**](https://wilsonj806.github.io/urban-choreo-ec/)

## Description

This is a Single Page App mean to be an article/ series of articles describing the urban choreography community in the East Coast/ NYC Tri-State Area.

## Other documentation

- [TypeScript notes](./doc/typescript-notes.md)

## Goals

The goal of this project is to gain more familiarity with React, and the related tools/ libraries relevant to React, by pushing out a fairly simple Single Page App. Said tools include React Router, Storybook, TypeScript, and Jest/ Enzyme.

In addition, this project is meant to be a one week build to push out the basic layout and functionality. The target release as a result is v0.5.0 which is about the point where all of the appropriate content or placeholders are in, but hasn't been polished and fully refactored yet.

### Roadmap to v0.5.0

**Version 0.25.0 should have the following done**
- Basic components(buttons, headers, etc)
- Navigation between different "pages"
- Basic CSS and styling

**Version 0.5.0 should have the following done**
- Any CSS based shapes as specced out in the mockups
- Full templates for 75% of the necessary pages

## Roadmap to v1.0.0

**Version 0.75.0 should have the following done**
- State handling if any
- Implement the teams list and competitions
- Bonus points for implementing the list of teams or the list of competitions part of the page without using React Router

**Version 1.0.0 should have the following done**
- UI refactoring if any
  - change About page to be a full-width banner with the card
- Images for backgrounds and cards
  - landing page should have a background in addition to the current one
- Dynamic nav bar background color?

## Cloning instructions

You'll need to have some version of Node.js(and subsequently npm, which is included) installed. Currently running everything on Node v10.10.0/ NPM v6.4.1 but it should work fine on older versions of Node/ NPM.
- if you do need to download Node, you can download it through the below links:
  - [Offical Node site](https://nodejs.org/en/download/)
  - [Node Version Manager Windows(requires more setup)](https://github.com/coreybutler/nvm-windows)
  - [Node Version Manager Mac(requires more setup)](https://github.com/creationix/nvm)


Clone the repo with your favorite SCM or manually download it
```
git clone https://github.com/wilsonj806/picture-analyzer.git
```

Change your working directory to the folder of the newly cloned repo and run ```npm install``` in your command line interface.

### Running Storybook

To run Storybook on the repo, after you clone the repo and install the dependencies, run ```npm run sb```.

Components are listed in the right side bar and lower level components are nested in the corresponding list item.
