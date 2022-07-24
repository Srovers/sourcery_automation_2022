// @ts-check
const { test, expect } = require('@playwright/test');
const { CalculatorPage } = require('../pages/CalculatorPage');

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
  test.describe(version + ': Add', () => {
    test('Adding 2 and 3 results in 5', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);

      await calculatorPage.navigateTo();

      // await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');

      // await expect(page.locator('#number2Field')).toBeVisible();

      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding a and 3 results in null', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
      // await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding 2 and a results in null', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('a');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding 0.6 and 0.2 results in 0.8', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0.6');
      await page.locator('#number2Field').type('0.2');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('0.8');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding -2 and -3 results in -5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-5');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding 2.4 and 3 results in 5 Integer', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.4');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
      await page.locator('#integerSelect').check();
        
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  });
});
