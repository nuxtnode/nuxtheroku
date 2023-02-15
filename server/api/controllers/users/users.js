import { Router } from 'express'
import  userModel  from "../../models/users";
const router = Router()


/* GET users listing. */
router.get('/users', function (req, res, next) {
    userModel.getUsers((err, data) => {
        res.status(200).json(data);
    });
    
})

/* ADD users listing. */
router.post('/adduser', function (req, res, next) {
    const newUser = req.body;
    userModel.addUser(newUser, (err, data) => {
        res.status(200).json(data);
    });
    
})

router.delete('/deleteuser/:id', function (req, res, next) {
    const current_id = req.params.id
    console.log(current_id)
    userModel.deleteUser(current_id, (err, data) => {
        res.status(200).json(data);
    });
    
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < users.length) {
        res.json(users[id])
    } else {
        res.sendStatus(404)
    }
})

export default router
