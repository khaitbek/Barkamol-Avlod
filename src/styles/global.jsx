import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --clr-primary-100: #fff;
  --clr-primary-200: #000;
  --clr-secondary-100: #3e3e3e;
  --clr-secondary-200: #012245;
  --clr-darkblue-100: #278df4;
  --clr-darkblue-200: #3f96ff;
  --clr-darkblue-300: #007aff;
  --clr-darkblue-400: #1877f2;
  --clr-darkcyan-100: #3fc1d9;
  --clr-darkcyan-200: linear-gradient(180deg, #012245 0%, #229ed9 10000%);
  --clr-darkcyan-300: linear-gradient(180deg, #2aabee 0%, #229ed9 10000%);
  --clr-darkcyan-400: #4db2ec;
  --clr-danger-100: rgba(255, 32, 89, 0.8);
  --clr-danger-200: radial-gradient(92.18% 99.11% at 26.56% 107.7%, #ffdd55 0%, #ffdd55 10%, #ff543e 50%, #c837ab 100%);
  --clr-light-100: #f9f9f9;
  --clr-light-200: #e0e0e0;
  --clr-light-300: #ededed;
  --clr-light-400: #e1e1e1;
  --clr-light-500: #e5e5e5;
  --clr-light-600: #cccccc;
  --clr-light-700: #757575;
}

/* GENERAL */
* {
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: inherit;
}

html {
  height: 100%;
  box-sizing: border-box;
}

img {
  display: block;
  height: auto;
}

body {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
  /* font-family: "Roboto", "Arial", sans-serif; */
  /* font-size: 16px; */
  /* font-weight: 400; */
  /* line-height: var(--main-line-height); */
}

/* VISUALLY-HIDDEN */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

/* CONTAINER */
.container {
  /* max-width: YOUR CONTAINER MAX-WIDTH HERE; */
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
}

/* STICKY-FOOTER */
.site-main {
  flex-grow: 1;
}

.bg-primary-100 {
  background-color: #fff;
}

.text-primary-100 {
  color: #fff;
}

.bg-primary-200 {
  background-color: #000;
}

.text-primary-200 {
  color: #000;
}

.bg-secondary-100 {
  background-color: #3e3e3e;
}

.text-secondary-100 {
  color: #3e3e3e;
}

.bg-secondary-200 {
  background-color: #012245;
}

.text-secondary-200 {
  color: #012245;
}

.bg-darkblue-100 {
  background-color: #278df4;
}

.text-darkblue-100 {
  color: #278df4;
}

.bg-darkblue-200 {
  background-color: #3f96ff;
}

.text-darkblue-200 {
  color: #3f96ff;
}

.bg-darkblue-300 {
  background-color: #007aff;
}

.text-darkblue-300 {
  color: #007aff;
}

.bg-darkblue-400 {
  background-color: #1877f2;
}

.text-darkblue-400 {
  color: #1877f2;
}

.bg-darkcyan-100 {
  background-color: #3fc1d9;
}

.text-darkcyan-100 {
  color: #3fc1d9;
}

.bg-darkcyan-200 {
  background-color: linear-gradient(180deg, #012245 0%, #229ed9 10000%);
}

.text-darkcyan-200 {
  color: linear-gradient(180deg, #012245 0%, #229ed9 10000%);
}

.bg-darkcyan-300 {
  background-color: linear-gradient(180deg, #2aabee 0%, #229ed9 10000%);
}

.text-darkcyan-300 {
  color: linear-gradient(180deg, #2aabee 0%, #229ed9 10000%);
}

.bg-darkcyan-400 {
  background-color: #4db2ec;
}

.text-darkcyan-400 {
  color: #4db2ec;
}

.bg-danger-100 {
  background-color: rgba(255, 32, 89, 0.8);
}

.text-danger-100 {
  color: rgba(255, 32, 89, 0.8);
}

.bg-danger-200 {
  background-color: radial-gradient(92.18% 99.11% at 26.56% 107.7%, #ffdd55 0%, #ffdd55 10%, #ff543e 50%, #c837ab 100%);
}

.text-danger-200 {
  color: radial-gradient(92.18% 99.11% at 26.56% 107.7%, #ffdd55 0%, #ffdd55 10%, #ff543e 50%, #c837ab 100%);
}

.bg-light-100 {
  background-color: #f9f9f9;
}

.text-light-100 {
  color: #f9f9f9;
}

.bg-light-200 {
  background-color: #e0e0e0;
}

.text-light-200 {
  color: #e0e0e0;
}

.bg-light-300 {
  background-color: #ededed;
}

.text-light-300 {
  color: #ededed;
}

.bg-light-400 {
  background-color: #e1e1e1;
}

.text-light-400 {
  color: #e1e1e1;
}

.bg-light-500 {
  background-color: #e5e5e5;
}

.text-light-500 {
  color: #e5e5e5;
}

.bg-light-600 {
  background-color: #cccccc;
}

.text-light-600 {
  color: #cccccc;
}

.bg-light-700 {
  background-color: #757575;
}

.text-light-700 {
  color: #757575;
}

.text-center {
  text-align: center;
}

.text-white {
  color: var(--clr-main, #FFF);
}

.btn-primary {
  color: var(--clr-primary-100);
  background-color: var(--clr-darkblue-200);
}
`

export default GlobalStyles