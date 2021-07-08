# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser (Local storage)

### Links

- Live Site URL: https://jiatian2300.github.io/Frontend-Mentor-calculator-app-main/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

Data attributes that are referenced in the javascript
```html
<div class="keypad">
        <button data-number>7</button>
        <button data-number>8</button>
        <button data-number>9</button>
        <button data-del class="blue">DEL</button>
        <button data-number>4</button>
        <button data-number>5</button>
        <button data-number>6</button>
        <button data-operation>+</button>
        <button data-number>1</button>
        <button data-number>2</button>
        <button data-number>3</button>
        <button data-operation>-</button>
        <button data-number>.</button>
        <button data-number>0</button>
        <button data-operation>/</button data-operation>
        <button data-operation>x</button>
        <button data-reset class="span-two blue">RESET</button>
        <button data-equals class="span-two red">=</button>
</div>
```
```js
const optBtns = document.querySelectorAll("[data-operation]");
const operand = document.querySelector("[data-operand]");
```

Using CSS variables and js to change color themes
```js
toggle.addEventListener("click", (e) => {
    document.body.classList.remove(...document.body.classList);

    localStorage.setItem("theme", e.target.id);
    document.body.classList.add(e.target.id);
    update_toggle();
});
```
```css
.theme_1 {
    --main_bg: hsl(222, 26%, 31%);
    --toggle_bg: hsl(223, 31%, 20%);
    --screen_bg: hsl(224, 36%, 15%);
}
```

3 state toggle
```html
<div class="switch-toggle switch-3 switch-ios">
            <input id="theme_1" name="state-d" type="radio" checked="" />
            <label for="theme_1" onclick=""></label>
            <input id="theme_2" name="state-d" type="radio" checked="checked" />
            <label for="theme_2" onclick=""></label>
            <input id="theme_3" name="state-d" type="radio" />
            <label for="theme_3" onclick=""></label>
            <a></a>
</div>
```

### Continued development

Adding a cursor to the calculator.

### Useful resources

- [css-toggle-switch](https://ghinda.net/css-toggle-switch/) - 3-state toggle
- [Dark Mode JavaScript toggle using localStorage](https://www.youtube.com/watch?v=wodWDIdV9BY) - Used to create 3 coloured themes
- [Build A Calculator With JavaScript Tutorial] (https://www.youtube.com/watch?v=j59qQ7YWLxw) 
