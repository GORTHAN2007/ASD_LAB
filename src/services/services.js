const { getUsersFromDatabase } = require("../database/userDatabase");

const getUsers = (minAge, callback) => {
  getUsersFromDatabase((err, users) => {
    if (err) return callback(err, null);
    if (minAge) {
      const filtered = users.filter((u) => u.age >= Number(minAge));
      return callback(null, filtered);
    }
    callback(null, users);
  });
};

module.exports = { getUsers };
