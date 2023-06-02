export default (): any => ({
  port: process.env.API_PORT,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  refreshToken: {
    secret: process.env.REFRESH_SECRET,
  },
  db: {
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    name: process.env.TYPEORM_DATABASE,
    user: process.env.TYPEORM_USERNAME,
    pass: process.env.TYPEORM_PASSWORD,
  },
});
