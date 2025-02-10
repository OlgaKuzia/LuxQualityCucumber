class loginPage{

  get expectedUrl() {
    return 'https://www.saucedemo.com/';
  }
  get userNameTextBox(){
    return $("#user-name");
  }
  get passwordTextBox(){
    return $("#password");
  }
  get loginButton(){
    return $("#login-button");
  }
  get errorMessage(){
    return $('[data-test="error"]');
  }
  

  async open() {
    await browser.url('https://www.saucedemo.com');
  } 
  async login(username, password){
    await this.userNameTextBox.setValue(username);
    await this.passwordTextBox.waitForDisplayed({ timeout: 5000 });
    await this.passwordTextBox.setValue(password);
}
async LoginButtonClick(){
  await this.loginButton.click();
}
async isDisplayedErrorMessage(){
  await this.errorMessage.waitForExist({timeout: 5000});
  await this.errorMessage.isDisplayed();
  const errorText = await this.errorMessage.getText();
  return errorText;
}

}

module.exports = new loginPage();

