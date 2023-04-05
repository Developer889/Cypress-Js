import { ShieldPage } from "./pages/shield_page";
const shieldPage=new ShieldPage()

beforeEach(function(){
    cy.visit('http://127.0.0.1/');
})
describe('All Shield Login Tests', () => {
    // it('Login Test 1 With 2FA', () => {
//     cy.visit('http://127.0.0.1/');
//     cy.get('#name').type("ehtesham");
//     cy.get('#password').type("PYTHON");
//     cy.get('#dsds').click();
//     cy.get('#one').type("jyXQ4Q");
//     cy.get('.btn').click();
// })
    it('Login Test 2 Without 2FA', () => {
        // cy.visit('http://127.0.0.1/');
        shieldPage.enterUsername('admin');
        shieldPage.enterPassword('gunie999D');
        shieldPage.clickLogin();
        // cy.get('#name').type("admin");
        // cy.get('#password').type("gunie999D");
        // cy.get('#dsds').click();
    })
})
