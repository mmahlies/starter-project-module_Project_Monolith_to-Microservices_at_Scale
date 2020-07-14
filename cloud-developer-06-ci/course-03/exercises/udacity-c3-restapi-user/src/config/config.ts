export const config = {
  "dev": {
    "username": process.env.udagram_username,
    "password": process.env.udagram_password,
    "database": process.env.udagram_database,
    "host": process.env.udagram_host,
    "dialect": "postgres",
    "aws_reigion": "eu-central-1", 
    "aws_profile": "DEPLOYED",
    "aws_media_bucket": "udagram-talaat-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }

}
