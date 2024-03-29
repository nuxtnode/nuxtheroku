import mysql from "mysql";
import dbconfig  from "../../config/database";



let userModel = {};

userModel.getUsers = (callback) => {
    const conn = mysql.createConnection(dbconfig.connection);
    if (conn) {
        conn.query('SELECT fullname FROM users',
            (err, rows) => {
                if (err) {
                    throw err
                }
                else {
                    callback(null, rows);
                    conn.end()
                }
            }
        )
    }
}

userModel.addUser = (newUser, callback) => {
    const conn = mysql.createConnection(dbconfig.connection);
    if (conn) {
        conn.query('INSERT INTO users(fullname, email, password) VALUES (?, ?, ?)', [newUser.name, newUser.username, newUser.password],
            (err, rows) => {
                if (err) {
                    throw err
                }
                else {
                    callback(null, rows);
                    conn.end()
                }
            }
        )
    }
}

userModel.deleteUser = (callback) => {
    const conn = mysql.createConnection(dbconfig.connection);
    if (conn) {
        conn.query('DELETE FROM users WHERE fullname = "Avery"',
            (err, rows) => {
                if (err) {
                    throw err
                }
                else {
                    callback(null, rows);
                    conn.end()
                }
            }
        )
    }
}


export default userModel