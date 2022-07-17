const fs = require('fs');
const fileName = "./vanillaJS/src/data/previousLists.json";

function readJson() {
    readFile(fileName, "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        console.log("File data:", jsonString);
        return jsonString;
      });
}

function writeJson(jsonString) {
    writeFile(fileName, jsonString, (err) => {
        if (err) {
          console.log("File write failed:", err);
          return;
        }
        console.log("List Item saved to file");
      });
}

export { readJson, writeJson };