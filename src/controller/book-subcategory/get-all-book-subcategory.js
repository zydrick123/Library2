const getAllBookSubCats = ({ getAllBookSubCatsUseCase }) => {
    return async function get(httpRequest) {
        const header = {
            'Content-Type': 'application/json'
        }
        try {

            const { source = {}, ...info } = httpRequest.body
            source.ip = httpRequest.ip

            const bookSubCatList = await getAllBookSubCatsUseCase()

            return {
                header: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: { bookSubCatList }
            }

        } catch (error) {
            return {
                header, statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}
module.exports = getAllBookSubCats