module.exports = { 
    moduleNameMapper: {
     "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    },
    setupFiles: ['<rootDir>/src/__tests__/setup/enzyme.js'],
    testRegex: '(/__tests__/^/(?!setup$).*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    testPathIgnorePatterns: [
            '<rootDir>/node_modules/',
            '<rootDir>src/__tests__/setup/',
        ],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testURL: "http://localhost:3000"
}