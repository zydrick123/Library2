const makeBook = ({ data }) => {

    const { isbn, title, author, publication_year, no_of_pages, no_of_copies, shelf, p_publisher_id, c_category_id, description } = data;
    if (!isbn) {
        throw new Error('Please enter isbn')
    }
    if (!title) {
        throw new Error('Please enter title')
    }
    if (!author) {
        throw new Error('Please enter Author')
    }
    if (!publication_year) {
        throw new Error('Please enter publication_year')
    }
    if (!no_of_pages) {
        throw new Error('Please enter no_of_pages')
    }

    if (!no_of_copies) {
        throw new Error('Please enter no_of_copies')
    }
    if (!shelf) {
        throw new Error('Please enter shelf')
    }
    if (!p_publisher_id) {
        throw new Error('Please enter p_publisher_id')
    }
    if (!c_category_id) {
        throw new Error('Please enter c_category_id')
    }
    if (!description) {
        throw new Error('Please enter description')
    }



    return Object.freeze({
        getisbn: () => isbn,
        gettitle: () => title,
        getauthor: () => author,
        getpublication_year: () => publication_year,
        getno_of_pages: () => no_of_pages,
        getno_of_copies: () => no_of_copies,
        getshelf: () => shelf,
        getp_publisher_id: () => p_publisher_id,
        getc_category_id: () => c_category_id,
        getdescription: () => description,

    })
}
module.exports = makeBook