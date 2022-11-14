describe('Login succes to GHOST', () => {
    beforeEach(()=>{
       cy.visit('http://localhost:2368/ghost/')
        cy.wait(3000)
        //cy.get('button').click()
    })
 
    it('I login with email and password', ()=>{
        cy.get('form').within(() => {
            cy.get('input[id="ember6"]').type('mx.gomezcx@uniandes.edu.co')
            cy.wait(1000)
            cy.get('input[id="ember8"]').type('xxxxx')
            cy.get('button[id="ember10"]').click()
        })
        cy.wait(2000)
        //Redirected to login
        //cy.get('div.alert.alert-success').should('be.visible')  
        //cy.get('form').within(() => {
        //    cy.get('input[formcontrolname="username"]').type('pruebas')
        //    cy.get('input[formcontrolname="password"]').type('MISO4208')
        //    cy.get('button.btn.btn-primary').click()
        //})
        //cy.wait(1000)
        //logged in
        cy.get('h2').then(($header)=>{
            expect($header[0].innerText).to.equal('Dashboard')
        })  
    })
  })