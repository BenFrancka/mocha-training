You will need to specify the mocha test file in your package.jason:

```"scripts": {
    "test": "mocha 'math-functions.test.js'"
  },
  ```
  ---

  To run a reporter, type in your terminal:

  mocha test/ --reporter type-of-report

  reports can be:
  - spec
  - dot matrix
  - nyan
  - tap
  - landing strip
  - list
  - progress
  - json
  - json stream
  - min
  - doc