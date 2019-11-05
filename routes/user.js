module.exports = {
  register: (req, res) => {
    var query = `INSERT INTO users SET ?`;
    // execute query
    let user = {
      email: req.body.email,
      password: req.body.password
    }
    db.query(query, user, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json(result);
    });
  },
  authenticate: (req, res) => {
    var query = `SELECT * FROM users WHERE email = ? AND password = ?`;
    // execute query
    db.query(query, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json(result);
    });
  }
};
