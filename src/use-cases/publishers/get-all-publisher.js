const getAllPublisher = ({ publisherDB }) => {
    return async function list() {
        let publisherList = []

        const result = await publisherDB.getAllPublisher({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.publisherID = data.publisherID
            dataValue.Firstname = data.Firstname
            dataValue.Middlename = data.Middlename
            dataValue.Lastname = data.Lastname
            dataValue.Location = data.Location


            publisherList.push(dataValue)

        }
        console.log('test')
        console.log('use-cases triggered', publisherList)

        return publisherList
    }

}
module.exports = getAllPublisher