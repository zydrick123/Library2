const getAllBookCats = ({ getAllBookCatsUseCase }) => {
    return async function get(httpRequest) {
        const header = {
            'Content-Type': 'application/json'
        }
        try {

            const { source = {}, ...info } = httpRequest.body
            source.ip = httpRequest.ip

            const bookCatList = await getAllBookCatsUseCase()

            return {
                header: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: { bookCatList }
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
module.exports = getAllBookCats