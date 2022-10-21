describe('Mocha Hooks', () => {
  before('Execute Before All Tests', () => {
    console.log('before all tests');
  });

  beforeEach('Execute before each test', () => {
    //* can add a setTimeout within the hook block for a hook level timeout
    console.log('before each test');
  });

  after('Exectute after all tests', () => {
    console.log('after all tests');
  });

  afterEach('Execute after each test', () => {
    console.log('after each test');
  });

  it('Mocha Hooks Test', () => {
    console.log('This is a test for mocha hooks');
  });
});
