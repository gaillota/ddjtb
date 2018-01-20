const express = require('express')

const paramConverter = require('../middlewares/param-converter')
const controller = require('./controller')
const HashtagSchema = require('../../mongoose/models/hashtag.model')

const router = express.Router()

router.param('id', paramConverter(HashtagSchema.modelName))

router.get('/', controller.getAll)
router.post('/', controller.create)

router.get('/:id', controller.get)
router.patch('/:id/toggle', controller.toggle)

module.exports = router
