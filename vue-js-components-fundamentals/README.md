# Vue.js 3 Components Fundamentals

[![](https://vueschool.io/storage/media/047f457d8ea6585a6c72140c020d2e43/vue-3-components-fundamentals-not-transparent.png)](https://vueschool.io/courses/vuejs-3-components-fundamentals)

This repository contains the code for the [	Vue.js 3 Components Fundamentals](https://vueschool.io/courses/vuejs-3-components-fundamentals) course.

This course covers the fundamental and important concept of Vue.js components.

Components are the puzzle pieces of a Vue.js website. Components combine blocks of HTML, JavaScript, and CSS. And as a result, they allow us to easily encapsulate and reuse functionality in our applications.

### The Vue.js 3 Components Fundamentals course covers:
- The idea behind components and how Vue.js components work
- Component's template, and multiple ways to define your template
- Communication between components with props and custom events
- The difference between global and local component registration
- The lifecycle hooks of a component
- Component composition with nested components and slots
- Component's best practices and common pitfalls

### Vue.js Component Exercises:
- Build a GitHub user profile component
- Create a Notification Message component

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
