const express =require('express')
const router = express.Router();
const {get_coordinates, create_coordinate, get_coordinates_one} =require('../controllers/coordinatesControlller')


router.get('/coordinates/get', get_coordinates)
router.get('coordinates/get-one', get_coordinates_one)
router.post('/coordinates/post', create_coordinate)

module.exports = router