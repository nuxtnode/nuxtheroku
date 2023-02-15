import mysql from "mysql";
import dbconfig  from "../../config/database";



let userModel = {};

userModel.getUsers = (callback) => {
    const conn = mysql.createConnection(dbconfig.connection);
    if (conn) {
        conn.query('SELECT * FROM users',
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
        conn.query('INSERT INTO users(name, username, password) VALUES (?, ?, ?)', [newUser.name, newUser.username, newUser.password],
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

userModel.deleteUser = (current_id, callback) => {
    const conn = mysql.createConnection(dbconfig.connection);
    if (conn) {
        console.log(current_id)
        conn.query('DELETE FROM users WHERE id = ?', [current_id] ,
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