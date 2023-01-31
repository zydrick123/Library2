const selectLibrarian = ({ librarianDB }) => {
    return async function patch(data) {
        const { id } = data

        const res = await librarianDB.getLibrarianID({ id })
        // console.log(prevData)
        if (res.rows.length === 0) { throw new Error('no id found') }


        console.log(res.rows)

        return {
            librarian_id: res.rows[0].librarian_id,
            first_name: res.rows[0].first_name,
            last_name: res.rows[0].last_name,

            u_user_id: res.rows[0].u_user_id,

        }



    }

}
module.exports = selectLibrarian