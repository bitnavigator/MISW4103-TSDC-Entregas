const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (Identificacion) {
    let element = await this.driver.$('input#identification.gh-input.email');
    return await element.setValue(Identificacion);
});

When('I enter password {kraken-string}', async function (Password) {
    let element = await this.driver.$('input#password.gh-input.password');
    return await element.setValue(Password);
});

When('I click next', async function() {
    let element = await this.driver.$('button#ember7');
    return await element.click();
})

When('I click settings', async function() {
    let element = await this.driver.$('a#ember33');
    return await element.click();
})

When('I click expand', async function() {
    let element = await this.driver.$('.gh-nav-list > :nth-child(2)');
    return await element.click();
})



When ('I enter the text {kraken-string}', async function (texto2) {
    let element = await this.driver.$('#accent-color');
    return await element.setValue(texto2);
  }); 





 

  