const { test, expect } = require('@playwright/test');

exports.CalculatorPage = class CalculatorPage {
    constructor(page) {
        this.page = page;
    }


    async navigateTo() {
        await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
        return this;
    }

    async selectBuild(build) {

    }
}