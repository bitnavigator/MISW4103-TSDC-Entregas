const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('assert');

// feature: Login Ghost
When("I enter email {kraken-string}", async function (USERNAME1) {
  let element = await this.driver.$("#ember6");
  return await element.setValue(USERNAME1);
});

When("I enter password {kraken-string}", async function (PASSWORD1) {
  let element = await this.driver.$("#ember8");
  return await element.setValue(PASSWORD1);
});

When("I click Sign in->", async function () {
  let element = await this.driver.$("#ember10");
  return await element.click();
});

// feature: List Ghost Tags
When("I click Tags", async function () {
  let element = await this.driver.$('a[href="#/tags/"]');
  return await element.click();
});
// feature: Create or  edit Ghost Tag
When("I click New Tag", async function () {
  let element = await this.driver.$('a[href="#/tags/new/"]');
  return await element.click();
});
When("I Click to edit Tag {kraken-string}", async function (TAG_NAME) {
    let searchElement = 'a[href="#/tags/' + TAG_NAME + '/"';
    let element = await this.driver.$(searchElement);
    return await element.click();
  });
When("I enter Tag name {kraken-string}", async function (TAG_NAME) {
  let element = await this.driver.$('input[id="tag-name"]');
  return await element.setValue(TAG_NAME);
});
When("I click Save Tag Name", async function () {
  let element = await this.driver.$(
    'button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]');
  return await element.click();
});
When("I click list Tags", async function () {
    let pageTags = await this.driver.$('a[href="#/tags/"]');
    return await pageTags.click();
  });
// feature: Borrar Tag Ghost
When("I click Delete Tag Name", async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon"]');
    return await element.click();
  });

  When("I click Delete to Confirm", async function () {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();
  });

//------------------------------------------------------------------
// Comprobacion Feature: Login Ghost
Then("I see Ghost Dashboard", async function () {
  let element = await this.driver.$('a[title="Dashboard"]');
  element.click();
});
// Comprobacion Feature: List Ghost Tags
Then("I see Ghost Tags", async function () {
  let element = await this.driver.$('button[class="gh-btn gh-btn-group-selected"]');
  element.click();
});
// Comprobacion Feature: Create or edit Ghost Tag
Then("I see New Ghost Tag {kraken-string}", async function (TAG_NAME) {
  let searchElement = 'a[href="#/tags/' + TAG_NAME + '/"';
  testKrakenTag = false;
  let elementTag = await this.driver.$(searchElement);
  if (elementTag) {
    testKrakenTag = true;
  } 
  assert.equal(testKrakenTag,true)
});
// Comprobar feature: Borrar Tag

Then("I don´t see New Ghost Tag {kraken-string}", async function (TAG_NAME) {
    let searchElement = 'a[href="#/tags/"]';
    let elementTag = await this.driver.$('a[href="#/tags/"]');
    return await elementTag.click();
  });