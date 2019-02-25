
const db = require ("../models");

module.exports = {
    findAll: (req, res) => {
        db.Book
            .find(req.query)
            .sort({ title: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db,Book
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res,status(422).json(err));
    }

};
