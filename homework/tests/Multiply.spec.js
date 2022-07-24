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
  '8'
]


data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying 2 and 3 results in 6', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('6');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying a and 3 results in null', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying 2 and a results in null', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('a');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying 0.3 and 0.8 results in 0.24', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0.3');
      await page.locator('#number2Field').type('0.8');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('0.24');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying -2 and 3 results in -6', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-6');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying 2.5 and 3.3 results in 8 Integer', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.5');
      await page.locator('#number2Field').type('3.3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
      await page.locator('#integerSelect').check();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('8');
    });
  });
});