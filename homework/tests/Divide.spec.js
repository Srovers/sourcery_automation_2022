// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
]


data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing 6 and 3 results in 2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('2');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing a and 3 results in null', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing 6 and a results in null', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('a');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing 0.2 and 0.8 results in 0.25', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0.2');
      await page.locator('#number2Field').type('0.8');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('0.25');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing -6 and 3 results in -2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-2');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing 6 and 3.3 results in 1 Integer', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('3.3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await page.locator('#integerSelect').check();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });
  });
});