const fs = require("fs");
const path = require("path");
const pathToFile = path.join(__dirname, "../../users.json");

const getUsersFromDatabase = (callback) => {
  fs.readFile(pathToFile, "utf-8", (err, data) => {
    if (err) return callback(err, null);
    try {
      callback(null, JSON.parse(data));
    } catch (e) {
      callback(e, null);
    }
  });
};

module.exports = { getUsersFromDatabase };
