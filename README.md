# Angular 21.1 – Template Spread Operator Demo

This project demonstrates one of the most useful additions in **Angular 21.1**:  
using the **spread operator directly in templates**.

You’ll see how this lets you:

- Compose **arrays** inline in the view  
- Extend and merge **objects** declaratively  
- Eliminate “glue code” helpers in component classes  
- Keep UI logic where it belongs: in the template

The demo is a small users dashboard that shows:

- Building a single users list from multiple data sources using array spread
- Sharing and extending button configuration using object spread
- Identical runtime behavior before and after refactoring

All with cleaner, more expressive templates.

## Requirements

- Angular **21.1+**
- Node 18+

## Run It

```bash
npm install
npm start
```

Open `http://localhost:4200`, toggle "Is Admin" and "Is Busy", and explore `users-page.component.html` to see template spread in action.