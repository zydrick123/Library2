
const db = require("./data-access/book-category/index");
const request = require("supertest");
const app = require("./index");
const bookcatUS = require("./use-cases/book-category/index")


// // afterEach(async () => {

// // });
// afterAll(async () => {
//     await db.end()

// });

describe(`Book Category Tests Suites`, () => {
    test(`Select Book Category`, async () => {
        const info = {};
        const res = await bookcatUS.getAllBookCatsUseCase(info);

        expect(res).toBeDefined();

    });
})
describe(`Book Category Tests Suites`, () => {

    test(`Add Book Category - Required missing fields`, async () => {

        try {
            const info = {
                categoryName: null,
            };

            const res = await bookcatUS.addBookCatsUseCase(info);
            expect(res).toStrictEqual({
                message: 'Book subcategory registered successful',
            })

        } catch (error) {

            expect(error.toString()).toBe('Error: Please enter Book category name')
        }


    });

})

// describe(`Book Category Tests Suites`, () => {

//     test(`Add Book Category - Complete fields`, async () => {


//         const info = {
//             categoryName: null,
//             b_subcategoryID: 2
//         };

//         const res = await bookcatUS.addBookCatsUseCase(info);
//         expect(res).toStrictEqual({
//             message: 'Book subcategory registered successful',
//         })




//     });

// })
describe(`Book Category Tests Suites`, () => {

    test(`Add Book Category - Book Category Existed`, async () => {

        try {
            const info = {
                categoryName: 'sample',
                b_subcategoryID: 2
            };

            await bookcatUS.addBookCatsUseCase(info);


        } catch (error) {

            expect(error.toString()).toBe('Error: Book Category Exist')
        }


    });

})
describe(`Book Category Tests Suites`, () => {

    test(`Add Book Category - Book Sub Category ID NOT Existed`, async () => {

        try {
            const info = {
                categoryName: 'samplleeassd',
                b_subcategoryID: 10
            };

            await bookcatUS.addBookCatsUseCase(info);


        } catch (error) {

            expect(error.toString()).toBe('Error: Book Sub Category Does not Exist')
        }


    });

})
// Update TEST
describe(`Book Category Tests Suites`, () => {

    test(`Update Book Category - Book Sub Category ID NOT Existed`, async () => {

        // const info = {}
        // const cat = await bookcatUS.getAllBookCatsUseCase(info)
        // const catalog = cat[cat.length - 1]
        // const catalogID = catalog.id

        const data = {
            id: 1,
            categoryName: 'samplleeasasdd',
            b_subcategoryID: 10
        }

        try {
            await bookcatUS.updateBookCatUseCase(data)

        } catch (error) {
            expect(error.toString()).toBe('Error: Book Sub Category Does not Exist')

        }

    });

})
describe(`Book Category Tests Suites`, () => {

    test(`Update Book Category - Book Category Name Existed`, async () => {

        // const info = {}
        // const cat = await bookcatUS.getAllBookCatsUseCase(info)
        // const catalog = cat[cat.length - 1]
        // const catalogID = catalog.id

        const data = {
            id: 1,
            categoryName: 'sample2',
            b_subcategoryID: 2
        }
        try {
            const res = await bookcatUS.updateBookCatUseCase(data)


        } catch (error) {
            expect(error.toString()).toBe('Error: Book Category Exist')

        }


    });

})
