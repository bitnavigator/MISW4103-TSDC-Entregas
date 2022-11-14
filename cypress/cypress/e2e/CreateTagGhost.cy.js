describe('Create Tag  GHOST', () => {
    beforeEach(()=>{
       //connect to ghost page 
       cy.visit('http://localhost:2368/ghost/')
       cy.wait(3000)       
    })
 
    it('I login with email and password', ()=>{
        let tagName = 'kraken-tag'

        //login to Ghost
        cy.get('form').within(() => {
            cy.get('input[id="ember6"]').type('mr.gomezc1@uniandes.edu.co')
            cy.wait(1000)
            cy.get('input[id="ember8"]').type('Conmutador1#')
            cy.get('button[id="ember10"]').click()
        })
        cy.wait(2000)
        cy.get('a[href="#/tags/"]').click()
        // Create Tag Ghost
        cy.wait(3000)
        cy.get('a[href="#/tags/new/').click()
        cy.wait(3000)
        cy.get('input[id="tag-name"]').type(tagName)
        cy.wait(2000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
        cy.wait(3000)
        cy.get('a[href="#/tags/"').then(($arr)=>{
            $arr[0].click()
        })
        // Comprueba Creacion Tag ghost 'span[title="kraken-tag"]'
        cy.get('span[title="'+tagName+'"]').then(($header)=>{
            expect($header[0].innerText).to.equal(tagName)
        })
        cy.wait(2000)

    })

  })