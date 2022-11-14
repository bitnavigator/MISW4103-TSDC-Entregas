describe('List Tag  GHOST', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/')
       cy.wait(3000)
    })
 
    it('I login with email and password', ()=>{
        cy.get('form').within(() => {
            cy.get('input[id="ember6"]').type('mr.gomezc1@uniandes.edu.co')
            cy.wait(1000)
            cy.get('input[id="ember8"]').type('Conmutador1#')
            cy.get('button[id="ember10"]').click()
        })
        cy.wait(2000)
        //logged in
        cy.get('h2').then(($header)=>{
            expect($header[0].innerText).to.equal('Dashboard')
        })
        // List Tag
        cy.wait(4000)
        cy.get('a[href="#/tags/"]').click()
        cy.wait(4000)
        cy.get('h2').then(($header)=>{
            expect($header[0].innerText).to.equal('Tags')
        }) 
    })

  })