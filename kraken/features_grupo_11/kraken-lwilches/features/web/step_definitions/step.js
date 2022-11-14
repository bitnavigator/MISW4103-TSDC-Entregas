const { Given, When, Then } = require('@cucumber/cucumber');
const {expect } = require('chai')

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click nextI click in sign in', async function() {
    let element = await this.driver.$('button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.ember-view');
    return await element.click();
})

Then('I expect see page {string}', async function (pageItem  ) {
   let page = await this.driver.page;
   expect(  page).equal( pageItem );
});

When('I click in new post ', async function () {
    let element = await this.driver.$('a=New post');
    return await element.click();
  });

When('I enter title post {string}', async function (mensaje) {
    let element = await this.driver.$('div[placeholder="Post title"]');
    return await element.setValue(mensaje);
});

Then('I expect the post save', async function (pageItem ) {
    let div  = await this.driver.$("div.gh-editor-post-status > span > div " );
    expect (div.innerText()).equal("Draft-Saved");
});

When ('I click  over post {string} ',  async (postDesc)=>{ 
    var post = {} 
    await this.driver.$("a.ember-view permalink gh-list-data gh-post-list-title > h3.gh-content-entry-title " ).forEach(element => {
        if (element.innerText() == postDesc) {
           post = element;
        }        
    });
    post.click();
    
});

When ('I click button detail',  async (postDesc)=>{ 
    await this.driver.$('button[title="Settings"]').click();
});


When ('I click button delete post', async ()=> {
    await this.driver.$('button.gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button').click();
        
} );

When ('I click button confirm delete',async ()=>{
    await this.driver.$('gh-btn gh-btn-red gh-btn-icon ember-view').click();
});

Then('I expect confirm delete {string}', async (postDesc)=>{

    var post = {} 
    await this.driver.$("a.ember-view permalink gh-list-data gh-post-list-title > h3.gh-content-entry-title " ).forEach(element => {
        if (element.innerText() == postDesc) {
           post = element;
        }        
    });
    expect( post).equal(undefined);
});