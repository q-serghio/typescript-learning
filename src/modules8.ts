import { employee } from "./tutorial5";
import { user } from "./typeAssertTypeUnknowTypeNever";
//below needs right tsconfig
import { doSomeStuff } from "./somestuff.js";
//import all
//import * as ColDefs from "../../components/grids/columns/";

//this is how we import js function now:
//declare function userField(params: any): kendo.ui.GridColumn;

console.log(`user`, user);
console.log(`employee`, employee);
doSomeStuff();
