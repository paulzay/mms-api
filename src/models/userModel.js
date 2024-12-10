const db = require('../config/db');

const UserModel = {
  createUser: (username, password, email, dob, role, profilePicture) => {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO users (username, password, email, dob, role, profilePicture) VALUES (?, ?, ?, ?, ?, ?)',
        [username, password, email, dob, role, profilePicture],
        function (err) {
          if (err) return reject(err);
          resolve(this.lastID); // Return the new user ID
        }
      );
    });
  },

  updateUser: (id, username, email, dob, role, password, profilePicture) => {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE users SET username = ?, email = ?, dob = ?, role = ?, password = ?, profilePicture = ? WHERE id = ?',
        [username, email, dob, role, password, profilePicture, id],
        function (err) {
          if (err) return reject(err);
          resolve(this.changes); // Return the number of rows affected
        }
      );
    });
  },

  getUserByUsername: (username) => {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
        if (err) return reject(err);
        resolve(user);
      });
    });
  },

  getUsers: () => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM users', (err, users) => {
        if (err) return reject(err);
        resolve(users);
      });
    });
  },
};

module.exports = UserModel;