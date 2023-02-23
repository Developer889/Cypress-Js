import { LoginPage } from "./pages/login_page";
const loginPage=new LoginPage()
beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})
describe('All Login Tests', () => {

    // beforeEach(function(){
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // })

    it('Login Test 1', () => {
    
        
        loginPage.enterUsername('Admin');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();
        cy.get('.oxd-userdropdown-name').click();
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
        // cy.get('.oxd-button').click()
    })
    
    it('Login Test 2', () => {
        
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.enterUsername('Admin');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();
        cy.get('.oxd-userdropdown-name').click();
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
        // cy.get('.oxd-button').click()
    })
  })
it('Login Test 3', () => {
        
    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();
    cy.get('.oxd-userdropdown-name').click();
    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
    // cy.get('.oxd-button').click()
})