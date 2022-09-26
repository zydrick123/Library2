const updateBook = ({ data }) => {
    const { ISBN, Title, YearPublish, AuthorID, PageNo, PublisherID, id } = data;


    if (!ISBN) {
        throw new Error('Please enter ISBN')
    }
    if (!Title) {
        throw new Error('Please enter Title')
    }
    if (!YearPublish) {
        throw new Error('Please enter YearPublish')
    }
    if (!AuthorID) {
        throw new Error('Please enter AuthorID')
    }
    if (!PageNo) {
        throw new Error('Please enter PageNo')
    }

    if (!PublisherID) {
        throw new Error('Please enter PublisherID')
    }

    if (!id) {

        throw new Error('Request error ID not found')
    }



    return Object.freeze({

        getISBN: () => ISBN,
        getTitle: () => Title,
        getYearPublish: () => YearPublish,
        getAuthorID: () => AuthorID,
        getPageNo: () => PageNo,

        getPublisherID: () => PublisherID,
        getID: () => id
    })

}
module.exports = updateBook