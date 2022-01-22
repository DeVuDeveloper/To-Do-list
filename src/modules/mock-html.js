const Dom = test('use jsdom in this test file', () => {
  const testDom = document.createElement('body');
  expect(testDom).not.toBeNull();
});



