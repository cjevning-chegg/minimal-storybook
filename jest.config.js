const { resolve } = require('path');

// prettier-ignore
module.exports = {
  "collectCoverageFrom": ["**/*.{ts,tsx}", "!**/*.d.ts"],
  "coveragePathIgnorePatterns": [
    "stories",
    "src/index",
    "development_assets",
    "test_utils",
    "packages/Search/src"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
  ],
  "globals": {
    "ts-jest": {
      "tsconfig": "tsconfig.json"
    }
  },
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    resolve(__dirname, "./development_assets/__mocks__/fileMock.ts"),
  },
  "setupFilesAfterEnv": [resolve(__dirname, "setupTests.ts")],
  "testEnvironmentOptions": { "resources": "usable" },
  "testPathIgnorePatterns": ["/node_modules/", "setupTests.ts"],
  "testRegex": "(/.test.*|(\\.|/)(test|spec))\\.tsx?$",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
};
