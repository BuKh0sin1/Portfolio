new Typewriter("#myname", {
  strings: "Khanyi Gina",
  autoStart: true,
  cursor: null,
  delay: 400, 
  color: black, 
  font-family: var(--heading-font-family), 
  font-weight: bold,
});

let heading = document.querySelector("#myname");
heading.classList.add("h1");
