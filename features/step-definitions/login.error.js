const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login_page');

Given(/^User is located on the main page of saucedemo website$/, async () => {
  await loginPage.open();
  await loginPage.login("","");
});

When(/^User click “Login” button$/, async () => {
  await loginPage.LoginButtonClick();
});


Then(/^this (.*) is displayed$/, async (message) => {
	await expect(await loginPage.isDisplayedErrorMessage()).toBe(message);
});




