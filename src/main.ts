import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
//import "./tutorial.ts";
//this needed tsconfig change
//import "./tutorial2.ts";
//import "./tutorial3.ts";
//import "./tutorial4.ts";
//import "./tutorial5.ts";
//import "./tuplesEnums.ts";
//import "./typeAssertTypeUnknowTypeNever.ts";
//import "./modules8.ts";
//import "./typeguarding.ts";
// import "./classes.ts";
// import "./fetchData.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="/tasks" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="/tasks" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
