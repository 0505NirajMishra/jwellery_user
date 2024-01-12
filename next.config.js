/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  runtimeCaching,
});

module.exports = withPWA({
  i18n,
  // output: 'export',
  // distDir: 'out',
  images: {
    domains: [
      '127.0.0.1',
      'localhost',
      'googleusercontent.com',
      'maps.googleapis.com',
      'chawkbazarapi.redq.io',
      'graph.facebook.com',
      'res.cloudinary.com',
      'm.media-amazon.com',
      's3.amazonaws.com',
      '18.141.64.26',
      'backapi.whitedebeers.com',
      'siyagem.thecompletesoftech.in',
      'via.placeholder.com',
      'pickbazarlaravel.s3.ap-southeast-1.amazonaws.com',
      'chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com',
      'picsum.photos',
      'cdninstagram.com',
      'scontent.cdninstagram.com',
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});