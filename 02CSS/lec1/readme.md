Here is **clean, exam-friendly, and README-ready content** you can directly copy and paste into a `README.md` file.

---

# CSS Selector: `body` vs Universal Selector `*`

## Overview

In CSS, selectors are used to target HTML elements and apply styles to them.
This document explains the difference between using the **`body` selector** and the **universal selector (`*`)** for styling a webpage background.

---

## 1. Using the `body` Selector

```css
body {
    background-color: black;
}
```

### Description

* The `body` selector targets **only the `<body>` element**.
* Since most visible content lies inside the body, it appears as if the entire webpage background is styled.
* Child elements remain transparent unless styled separately.

### Key Points

* Applies style only to the body element
* Better performance
* Commonly used in real projects
* Recommended for setting page background

---

## 2. Using the Universal Selector (`*`)

```css
* {
    background-color: green;
}
```

### Description

* The universal selector targets **all HTML elements** on the webpage.
* This includes `html`, `body`, headings, paragraphs, divs, buttons, etc.
* Every element gets its own background, which may cause layout and design issues.

### Key Points

* Applies style to every element
* Slower performance on large pages
* Rarely used for background styling
* Commonly used for resetting margins and padding

---

## 3. Key Differences

| Feature           | `body` Selector        | Universal Selector (`*`)     |
| ----------------- | ---------------------- | ---------------------------- |
| Scope             | Only `<body>`          | All elements                 |
| Background effect | Single page background | Each element gets background |
| Performance       | Better                 | Slower                       |
| Recommended use   | Yes                    | No (for background)          |

---

## 4. Best Practices

✅ Use the `body` selector to set webpage background
❌ Avoid using `*` for background colors
✅ Use the universal selector mainly for CSS reset:

```css
* {
    margin: 0;
    padding: 0;
}
```

---

## Conclusion

Although both selectors can affect the appearance of a webpage, they behave differently.
The `body` selector is suitable for styling the page background, while the universal selector applies styles to all elements and should be used carefully.

---
