const { test, expect } = require('@playwright/test');

test.describe('kategorija', () => {
    test('First result should contain devbridge.com', async ({ page }) => {
        await page.goto('https://duckduckgo.com/');
        await page.locator('input[name=q]').fill('devbridge');
        await page.keyboard.press('Enter');

        let hrefAttribute = await page.locator('#r1-2 h2 a').getAttribute('href');

        expect(hrefAttribute).toContain('https://www.linkedin.com/company/devbridge');
    });
    });

    test.describe('kategorija', () => {
        test('First result should contain devbridge.com', async ({ page }) => {
            await page.goto('https://duckduckgo.com/');
            await page.locator('input[name=q]').fill('devbridge');
            await page.keyboard.press('Enter');

            let index = 2;
            let hrefAttribute = await page.locator('#r1-2 h2 a').getAttribute('href');
    
            expect(hrefAttribute).toContain('linkedin.com');
        });
        });