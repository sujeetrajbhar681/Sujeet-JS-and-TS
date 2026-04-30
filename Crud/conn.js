
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sujeet@123",
    database: "db06"
})

function connectdb() {
    db.connect((err: any) => {
        if (err) {
            console.error("Database connection failed:", err);
        } else {
            console.log("Connected to database");
        }
    });
}

connectdb();

export default db;