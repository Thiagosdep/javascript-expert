const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')

    ;
(async () => {
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }

    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)
    }

    {
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)
        const expected = [
            {
                "name": "Thiago Sousa",
                "id": 123,
                "profession": "Javascript Dev",
                "birthDay": 1999
            },
            {
                "name": "Tirone Sousa",
                "id": 234,
                "profession": "Dog",
                "birthDay": 2021
            },
            {
                "name": "Sonia Alice",
                "id": 345,
                "profession": "Mother",
                "birthDay": 1981
            }
        ]

        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
    }
})()