const exportVar = "Export the variable to other file in node js";
const exportOtherVar = "Export the 'other variable' to other file in node js";

class ExportClass{
    constructor(){
        console.log('Export class to other file in node js');
    }
}


// Method 1
// module.exports.exportVar = exportVar;
// module.exports.exportOtherVar = exportOtherVar;
// module.exports.ExportClass = ExportClass;

// Method 2
// module.exports = {
//     exportVar: exportVar,
//     exportOtherVar: exportOtherVar,
//     ExportClass: ExportClass,
// }

// Method 3
module.exports = {exportVar, exportOtherVar, ExportClass};