let data = [
  {
    name: "Great",
    age: "30",
  },
  {
    name: "Sarah",
    age: "32",
  },
  {
    name: "John",
    age: "28",
  },
  {
    name: "Tim",
    age: "27",
  },
  {
    name: "Dozie",
    age: "22",
  },
  {
    name: "Pluto",
    age: "19",
  },
];

const info = document.querySelector("#info");

let details = data.map((props) => {
  return `<div>${props.name} is ${props.age} years old</div>`;
});

info.innerHTML = details.join("\n");
