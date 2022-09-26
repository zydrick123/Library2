const getAllBooks = ({ getAllBooksUseCase }) => {
    return async function get(httpRequest) {
        const header = {
            'Content-Type': 'application/json'
        }
        try {

            const { source = {}, ...info } = httpRequest.body
            source.ip = httpRequest.ip

            const bookList = await getAllBooksUseCase()

            return {
                header: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: { bookList }
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
module.exports = getAllBooks