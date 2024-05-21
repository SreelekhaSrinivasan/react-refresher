const heading = 
React.createElement("div", {id:"parent", className: "parent"}, 
["Bandit & Chilli", React.createElement("h1", {id:"child1", className: "child"}, "Bluey"), 
React.createElement("h1", {id:"child2", className: "child"}, "Bingo")]
);

console.log(heading); // doesnt give an HTML Element --> instead gives an object

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(heading);