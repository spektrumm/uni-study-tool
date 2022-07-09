const fs = require("fs");
const fileName = "./vanillaJS/src/data/previousLists.json";

function readJson(fileName) {
    fs.readFile(fileName, "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        console.log("File data:", jsonString);
        return jsonString;
      });
}

function writeJson(fileName, jsonString) {
    fs.writeFile(fileName, jsonString, (err) => {
        if (err) {
          console.log("File write failed:", err);
          return;
        }
        console.log("List Item saved to file");
      });
}