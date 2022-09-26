const getAllLibrarians = ({ getAllLibrarianUseCase }) => {
    return async function get(httpRequest) {

        const headers = {
            'Content-Type': 'application/json'
        }
        try {

            const { source = {}, ...info } = httpRequest.body
            source.ip = httpRequest.ip
            //source.browser = httpRequest.header['User-Agent']
            // const toView = {
            //     ...info,
            //     source,
            // }


            const librarianList = await getAllLibrarianUseCase()

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: { librarianList }
            }
        } catch (error) {
            return {
                headers, statusCode: 400,
                body: {
                    error: e.message
                }
            }

        }
    }
}
module.exports = getAllLibrarians