# CoderHeroes Web Design Style Guide

This style guide is a collection of pre-designed elements, graphics, and rules that designers or developers must follow to ensure that separate parts of the website are consistent and create a cohesive experience in the end.

The main purpose of having defined elements is to make it easier for developers to reuse those elements.

This Style Guide is a work in progress. It contemplates possible interactions like hovering, clicking and other states for buttons, titles, links, etc. New UI/UX designers joining this project still have work to do, but will find a structured fledgling project.

Developers should **not** change or adjust styles based on personal preferences or XD files. It is important to consult with the UI/UX team before making a design decision.

It is also important that all designs get tested by users before they get implemented into the frontend.

## Figma File

CoderHeroes' designs and prototyping was built with Figma. The MAIN file located in our Figma contains all the designs and the design system that CoderHeroes uses.

**Figma Link:**
[https://www.figma.com/files/team/1034940081812419953/CoderHeroes?fuid=966068432707015833](https://www.figma.com/files/team/1034940081812419953/CoderHeroes?fuid=966068432707015833)

**Figma Invite Link (click this first to have access):**
[https://www.figma.com/team_invite/redeem/qRhjvB2PhDVT3jQHW0oVL4](https://www.figma.com/team_invite/redeem/qRhjvB2PhDVT3jQHW0oVL4)

## Ant Design

CoderHeroes' React UI library is Ant Design that contains a set of high quality components for building interactive user interfaces.

## Typography

CoderHeroes fonts are Montserrat and Staatliches.

### For reference `Typography` is displayed in Figma Design System Page

## Theming

CoderHeroes project has a Theme at src/styles/theme/coderHeroesTheme.js that includes all color-styles and text-styles needed for the project.

In the case that new styles are needed to implement a new design, please consult with the UI/UX team, test those designs to make sure they are accessible, and then add those designs to the designs system page.

All designs that are in use in the Figma MAIN file should also be inside coderHeroesTheme.js

For overriding Ant Design styles, you can edit themeOverride.js to do so. For more information on how to do that, please go through their [documentation](https://ant.design/docs/react/customize-theme).

For reference `Color Palette` is displayed in Figma Design System Page

**Note: Contrast Checker tests should be documented in Figma Design System Page!**

## Imagery

All Imagery will be stored in src/img folder

## Buttons

For reference `Button` Components are displayed in Figma Design System Page

## Prototype and Test

After creating your designs, be sure to test them with users. This will ensure that your designs are user friendly.

For reference `Hight Fidelity Prototypes` are displayed in Figma Designs Page

**Latest Version:**
[https://www.figma.com/file/VoV0f8wvr8t3GDz8q4ffU7/Main?node-id=0%3A1](https://www.figma.com/file/VoV0f8wvr8t3GDz8q4ffU7/Main?node-id=0%3A1)

## `FAQ`

### Where are all CoderHeroes designs?

Figma file is where to find the latest version.

### How do I get access to CoderHeroes Figma?

You can access through [CoderHeroes Product Resources](https://bloomtech.notion.site/CoderHeroes-Product-Resources-d8edb6bd5a59475688b7a07e407e31be)

Checkout a [CoderHeroes Figma Tour](https://www.loom.com/share/dea3947af8c742989a1f94e8fa32c4b0)

### How could I modify an antd component?

There is no difference between antd's components and typical React components. You can replace the content as needed.

### How to customize Okta sign in widget?

[Live Sign-in Widget](https://super-widget.oktaprise.com/)

## UI/UX Engineers

Figma Contributors:

<table>

<tr><td align="center"><a href="https://github.com/moduped"><img src="https://avatars.githubusercontent.com/u/69601432?v=4" width="90px;" alt="Vicky Modupe Daniel"/><br /><sub><b>Mo</b></sub></a>

<td align="center"><a href="https://github.com/natecheney-dev "><img src="https://avatars.githubusercontent.com/u/88044347?v=4" width="90px;" alt="Nathan Cheney"/><br /><sub><b>Nathan Cheney</b></sub></a><br />

<td align="center"><a href="https://github.com/waylonturbes"><img src="https://avatars.githubusercontent.com/u/83845399?v=4" width="90px;" alt="Waylon Turbes"/><br /><sub><b>Waylon Turbes</b></sub></a>

<td align="center"><a href="https://github.com/PriscilaMonteiro "><img src="https://avatars.githubusercontent.com/u/77358128?v=4" width="90px;" alt="Priscila Monteiro"/><br /><sub><b>Priscila Monteiro</b></sub></a><br /></td></tr>

</table>
