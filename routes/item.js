module.exports = {
  getItems: (req, res) => {
    var query = `SELECT * from ${req.params.item} ORDER BY id ASC`;
    // execute query
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json(result);
    });

  },
};
