const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('./users', controller.getUsers);
router.get('./createuser', controller.addUser);
router.get('./updateuser', controller.updateUser);
router.get('./deleteuser', controller.deleteUser);

module.exports = router;