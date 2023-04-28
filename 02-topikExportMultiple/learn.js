// How to import multiple javascript file in node js.
const exportMulti = require("./export/index");

console.log(exportMulti.exportVar);
console.log(exportMulti.exportOtherVar);
console.log(new exportMulti.ExportClass);