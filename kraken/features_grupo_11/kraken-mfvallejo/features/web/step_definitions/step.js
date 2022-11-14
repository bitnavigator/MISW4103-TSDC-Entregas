const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I enter email {kraken-string}', async function (email) {
    console.log(email)
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click sing in', async function() {
    let element = await this.driver.$('#ember7');
    return await element.click();
})

When('I click members', async function() {
    let element = await this.driver.$('#members_svg__Regular');
    return await element.click();
})

When('I click new member', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/div[2]/a');
    return await element.click();
})

When('I click a member', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr/a[1]');
    return await element.click();
})

When('I click settings', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/header/section/span/button');
    return await element.click();
})

When('I click members settings', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/div[2]/span/button');
    return await element.click();
})

When('I click export', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/div[2]/span/ul/li[2]/button');
    return await element.click();
})

When('I click delete', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/header/section/span/ul/li[2]/button');
    return await element.click();
})

When('I click delete member', async function() {
    let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]');
    return await element.click();
})

When('I enter name {kraken-string}', async function (name) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
});

When('I enter ema {string}', async function (ema) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(ema);
});

When('I click save', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/header/section/button/span');
    return await element.click();
})

Then("I see new ghost member", async function () {
    let elementMember = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/thead/tr/th[1]/text()');
    let state = false;
    if(elementMember)
        state = true;
    assert.equal(state, true)
  });