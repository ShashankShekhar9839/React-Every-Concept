const heading1 = React.createElement("h1", {}, " React Basics ");
const name = React.createElement("p", {}, "By Shashank Shekhar");
const container = React.createElement(
  "div",
  {
    style: {
      border: "1px solid black",
      padding: "10px",
    },
    id: "container",
    className: "container-classes",
  },
  heading1,
  name
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
