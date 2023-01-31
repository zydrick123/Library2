const getAllPublisher = ({ publisherDB }) => {
    return async function list() {
        let publisherList = []

        const result = await publisherDB.getAllPublisher({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.publisher_id = data.publisher_id
            dataValue.publisher_name = data.publisher_name
            dataValue.location = data.location


            publisherList.push(dataValue)

        }
        return publisherList
    }

}
module.exports = getAllPublisher