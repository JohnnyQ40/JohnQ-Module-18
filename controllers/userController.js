const { User, Thought } = require('../models');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users);
        } catch (err) {
            console.error({ message: err });
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id })
            .populate({ path: 'thoughts', select: '-__v'})
            .populate({ path: 'friends', select: '-__v'});

            if (!user) {
                return res.status(404).json({ message: 'No user found'});
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};