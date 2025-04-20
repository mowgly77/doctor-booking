const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// Configuración
const width = 1200;
const height = 630;
const outputPath = path.join(__dirname, '../public/og-image.jpg');

// Crear canvas
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Fondo
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, width, height);

// Gradiente
const gradient = ctx.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, '#4f46e5');
gradient.addColorStop(1, '#7c3aed');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, width, height);

// Texto
ctx.fillStyle = '#ffffff';
ctx.textAlign = 'center';

// Título
ctx.font = 'bold 60px Arial';
ctx.fillText('Doctor Booking System', width / 2, height / 2 - 50);

// Subtítulo
ctx.font = '40px Arial';
ctx.fillText('Book appointments with specialists', width / 2, height / 2 + 50);

// Guardar imagen
const buffer = canvas.toBuffer('image/jpeg', { quality: 0.8 });
fs.writeFileSync(outputPath, buffer);

console.log('Imagen de Open Graph generada exitosamente en:', outputPath); 