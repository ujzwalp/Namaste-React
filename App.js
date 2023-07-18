// Below lines are copied from <script> in index.html. See the explanation of working of these 3 lines code in that file.
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!"
);

// As was the case with JavaScript, we might guess that heading contains a <h1></h1> html element yet. But it's actually an object {} which is actually a React h1 element. So, React element is actually a JavaScript Object
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Now here render() is responsible for taking the heading object and convert it into <h1></h1> html tag and put it into the root of React
// root.render(heading);

// Description:
//Just as HTML structure have nested structure of tags in it, les see How we can create nested structure in React as well
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is a Nested Heading")
  )
);

console.log(parent);
// root.render(parent);

// Similarly, let's see How do we create sibling structure in React
const siblings = React.createElement(
  "div",
  { id: "siblings" },
  React.createElement("div", { id: "child" }, [
    React.createElement("p", { key: 1 }, "I'm the brother tag"),
    React.createElement("p", { key: 2 }, "I'm the sister tag"),
    React.createElement("p", { key: 3 }, "I'm the youngest of us all"),
  ])
);

console.log(siblings);
// root.render(siblings);

// Let's create even more complicate nested React Elements
const GrandParent = React.createElement("div", { id: "GrandParent" }, [
  React.createElement("div", { id: "child--1", key: 1 }, [
    React.createElement("p", { key: 1 }, "I'm the brother tag[1]"),
    React.createElement("p", { key: 2 }, "I'm the sister tag[1]"),
    React.createElement("p", { key: 3 }, "I'm the youngest of us all[1]"),
  ]),
  React.createElement("div", { id: "child--2", key: 2 }, [
    React.createElement("p", { key: 1 }, "I'm the brother tag[2]"),
    React.createElement("p", { key: 2 }, "I'm the sister tag[2]"),
    React.createElement("p", { key: 3 }, "I'm the youngest of us all[2]"),
  ]),
]);

console.log(GrandParent);
root.render(GrandParent);

// Note: root.render() replaces everything inside the #root in body tag of html file and render whatever is passed into it as an argument. If there's anything on top and below the #root element in body tag in html file, it won't be replaced by render() beacuse react is working only inside root. This is the primary reason why React is a library. Because it can be applied to the small portion or what ever the desired portion of our app. I can have whole lots of elements inside my body tag in html file, but I can choose only one of those many tags to render my react, just as we're doing in the root element

// So far so good. So far we've seen the core process of writing React code. Now, Imagine the complexity and nesting of these elements increases. It would become increasingly difficult in that situation to write & manage that code without errors.
// Therefore, we've something called JSX which comes to our rescue in this particular situation to solve the tedious complexity of React code. JSX to its core uses the same code process that we've been doing so far. But It gives us a syntatic sugar by creating an abstraction of these core react code process so we don't bother about these complexities and focus only on the development process.
