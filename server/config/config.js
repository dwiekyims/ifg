const config = {
  env: process.env.NODE_ENV || "development",
  port: 3001,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  db_name: process.env.DATABASE || "test",
  db_username: process.env.DATABASE_USER || "postgres",
  db_password: process.env.DATABASE_PASSWORD || "admin",
  URL_DOMAIN: "/test",
  URL_IMAGE: "/test/images/",
  UPLOAD_DIR: "/storages",
};

export default config;