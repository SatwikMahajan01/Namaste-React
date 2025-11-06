const heading= React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World! Satwik Starting new journey");
console.log(heading); // object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // render method will take that object, put it up and convert it into a heading tag, and put it up on the DOM 