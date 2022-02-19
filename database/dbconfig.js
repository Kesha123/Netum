const { Pool } = require('pg')

const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
  connectionString: "postgres://mssjppnxkoauct:9537da0ee31c7909750558858e0a77078a74c1bf8ffdf3cfd016a8a53de5198d@ec2-63-32-7-190.eu-west-1.compute.amazonaws.com:5432/d7pf684ousd57h",
 ssl: {
 rejectUnauthorized: false
 }
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}