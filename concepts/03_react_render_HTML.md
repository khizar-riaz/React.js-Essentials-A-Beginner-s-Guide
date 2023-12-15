## React Render HTML

- React's goal is in many ways to render HTML in a web page.
- React renders HTML to the web page by using a function called `createRoot()` and its method `render()`.

#### The createRoot Function

- The createRoot() function takes `one argument`, an HTML element.
- The purpose of the function is to define the HTML element where a React component should be displayed.

#### The render Method

- The render() method is then called to define the React component that should be rendered.

*But render where?*

- There is another folder in the root directory of your React project, named `public`. In this folder, there is an `index.html` file.
- You'll notice a single `<div>` in the body of this file. This is where our React application will be rendered.

```jsx

 <body>
    <div id="root"></div>
</body>

```

```jsx

import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);

```

- `JSX` allows you to write HTML tags inside the JavaScript code: `(Example: examples/03_react_render_HTML.js line 1)`

#### The Root Node

- The root node is the HTML element where you want to display the result.
- It is like a container for content managed by React.
- It does NOT have to be a <div> element and it does NOT have to have the id='root':
- The root node can be called whatever you like:

```jsx

<body>

  <header id="sandy"></header>

</body>

```

- Display the result in the <header id="sandy"> element:

```jsx

import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('sandy');
const root = ReactDOM.createRoot(container);
root.render(<p>Hallo</p>);

```

