const { sortPages } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sortPages 2 pages', () => {
    const input = {
        'https://wagslane.dev/path': 1,
        'https://wagslane.dev': 3
    }
    const actual = sortPages(input)
    const expected = [
        ['https://wagslane.dev', 3],
        ['https://wagslane.dev/path', 1]
    ]
    expect(actual).toEqual(expected)
})

test('sortPages 6 pages', () => {
    const input = {
        'https://wagslane.dev/path1': 1,
        'https://wagslane.dev': 7,
        'https://wagslane.dev/path2': 8,
        'https://wagslane.dev/path3': 10,
        'https://wagslane.dev/path4': 100,
        'https://wagslane.dev/path5': 2
    }
    const actual = sortPages(input)
    const expected = [
        ['https://wagslane.dev/path4', 100],
        ['https://wagslane.dev/path3', 10],
        ['https://wagslane.dev/path2', 8],
        ['https://wagslane.dev', 7],
        ['https://wagslane.dev/path5', 2],
        ['https://wagslane.dev/path1', 1]
    ]
    expect(actual).toEqual(expected)
})