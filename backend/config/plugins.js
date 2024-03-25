module.exports = ({ env }) => ({
  seo: {
    enabled: true,
    jwtSecret: env('JWT_SECRET'),
  },
});
