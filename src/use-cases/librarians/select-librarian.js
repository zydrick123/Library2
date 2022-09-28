const selectLibrarian = ({ librarianDB }) => {
    return async function patch(data) {
        const { id } = data

        const res = await librarianDB.getLibrarianID({ id })
        // console.log(prevData)
        if (res.rows.length === 0) { throw new Error('no id found') }


        console.log(res.rows)

        return {
            UserID: res.rows[0].Firstname,
            Firstname: res.rows[0].Firstname,
            Middlename: res.rows[0].Middlename,
            Lastname: res.rows[0].Lastname,
            Gender: res.rows[0].Gender,
            RegisterDate: res.rows[0].RegisterDate,

        }



    }

}
module.exports = selectLibrarian