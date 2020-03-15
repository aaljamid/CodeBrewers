// Require necessary NPM packages
const express = require("express");

// Require Mongoose Model for Article
const MenuItem = require("../models/menuItem");

// Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action:        INDEX
 * Method:        GET
 * URI:           /api/menueItem
 * Description:   Get All menu items
 */
router.get("/api/menueItems", (req, res) => {
  MenuItem.find()
    // Return all menu items as an Array
    .then(allMenuItems => {
      res.status(200).json({ menueItems: allMenuItems });
    })
    // Catch any errors that might occur
    .catch(error => {
      res.status(500).json({ error: error });
    });
});

// Export the Router so we can use it in the server.js file
module.exports = router;
