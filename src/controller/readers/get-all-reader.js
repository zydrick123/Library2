const getAllReaders = ({ getAllReaderUseCase }) => {
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

            console.log("tests", source)
            const readerList = await getAllReaderUseCase()

            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 200,
                body: { readerList }
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
module.exports = getAllReaders