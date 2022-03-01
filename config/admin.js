module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9a02e25c584b96054ac03157e64ca9d0'),
  },
});
