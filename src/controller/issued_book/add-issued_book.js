const createIssued_Book = ({ addIssued_BooksUseCase }) => {
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
            const issued_Book = await addIssued_BooksUseCase(toView);

            return {
                headers: {
                    "Content-Type": "application/json",
                },
                statusCode: 200,
                body: { issued_Book },
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

module.exports = createIssued_Book