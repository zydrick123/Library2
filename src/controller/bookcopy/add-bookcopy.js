const createBookCopy = ({ addBookCopysUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            "Content-Type": "application/json",
        };
        try {

            const { source = {}, ...info } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers["User-Agent"];
            const toView = {
                ...info,
                source,
            };
            const bookCopy = await addBookCopysUseCase(toView);

            return {
                headers: {
                    "Content-Type": "application/json",
                },
                statusCode: 200,
                body: { bookCopy },
            };
        } catch (e) {
            console.log(e);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message,
                },
            };
        }
    };
};

module.exports = createBookCopy