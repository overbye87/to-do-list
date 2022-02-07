import { createStore } from "redux";
import reducer from "./todos";

const store = createStore(reducer);

export { store };
