const express = require('express')

const index = require('../controllers')

const router = express.Router()

/**
 * @swagger
 * /api:
 *   get:
 *     description: Get the API endpoint
 *     parameters:
 *       - name: input
 *         in: query
 *         style: form
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/api', index.get)

/**
 * @swagger
 * /api:
 *   post:
 *     description: Create a new item
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             additionalProperties:
 *               type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.post('/api', index.post)

/**
 * @swagger
 * /api:
 *   put:
 *     description: Update a new item
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             additionalProperties:
 *               type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.put('/api', index.put)

/**
 * @swagger
 * /api:
 *   delete:
 *     description: Delete an item
 *     parameters:
 *       - name: input
 *         in: query
 *         style: form
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.delete('/api', index.del)

module.exports = router