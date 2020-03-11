// Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

// Autenticar usuario
// /api/auth
router.post('/', [
	check('email', 'Agrega un email válido').isEmail(),
	check('password', 'La contraseña debe ser mínimo de 6 caracteres').isLength({
		min: 6,
	}),
	authController.autenticarUsuario,
]);

module.exports = router;
