// // @ts-check
// const { test, expect } = require('@playwright/test');
// const { CalculatorPage } = require('../pages/CalculatorPage');

// const data = [
//     'Prototype',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
// ]

// // data.forEach(version => {
// //     test.describe(version + ': Add', () => {
// //         test('Adding a and 3 results in null', async ({ page }) => {
// //             await page.goto('https://testsheepnz.github.io/BasicCalculator');
// //             await page.selectOption('#selectBuild', { label: version });
// //             await page.locator('#number1Field').type('a');
// //             await page.locator('#number2Field').type('3');
// //             await page.selectOption('#selectOperationDropdown', { label: 'Add' });
// //             await page.locator('#calculateButton').click();

// //             await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
// //             await expect(page.locator('#numberAnswerField')).toHaveValue('');

// //         });
// //     });
// // });

// // data.forEach(version => {
// //     test.describe(version + ': Add', () => {
// //         test('Adding a and 3 results in null', async ({ page }) => {
// //             await page.goto('https://testsheepnz.github.io/BasicCalculator');
// //             await page.selectOption('#selectBuild', { label: version });
// //             await page.locator('#number1Field').type('a');
// //             await page.locator('#number2Field').type('3');
// //             await page.selectOption('#selectOperationDropdown', { label: 'Add' });
// //             await page.locator('#calculateButton').click();

// //             await expect(page.locator('#numberAnswerField')).toHaveValue('');

// //         });
// //     });
// // });


// data.forEach(version => {
//     test.describe(version + ': Add', () => {
//         test('Adding a and 3 results in null', async ({ page }) => {
//             let calculatorPage = new CalculatorPage(page);
//             await calculatorPage.navigateTo();

//         });
//     });
// });