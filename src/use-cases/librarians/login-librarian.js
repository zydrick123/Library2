const jwt = require('../../helpers/jwt');
const { encryptPasswordService, comparePasswordService } = require('../../helpers/services/index')
const loginLibrarians = ({ librarianDB, loginLibrarian_Entity }) => {
    return async function list(data) {

        const { username, password } = data

        const entity = await loginLibrarian_Entity({ data })
        let token = ''
        const res = await librarianDB.loginLibrarian({

            username: entity.getUsername(),
            password: entity.getPassword()

        }).catch(err => console.log(err))

        if (res.rowCount == 0) { return { msg: 'invalid credentials' } }

        let encryptPassword = res.rows[0].password
        let decryptPassword = await comparePasswordService({ password, encryptPassword })

        if (!decryptPassword) { return { msg: 'invalid credentials' } }
        if (res == null) {
            throw new Error('Network error')
        }


        token = jwt.issue({ username: username }, '1d')

        return {

            message: 'Successfully logged in',

            username: username,
            token: token
        }

    }
}
module.exports = loginLibrarians