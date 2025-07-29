import {createRoot} from "react-dom/client";
import Hello from "./Hello";

const container = document.getElementById("root");
const root = createRoot(container);
const component = <Hello />;
root.render(component);
