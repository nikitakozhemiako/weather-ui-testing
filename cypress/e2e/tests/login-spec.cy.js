const loginPage = require('../../support/pom/loginPage')
const homePage = require('../../support/pom/homePage')

    describe('Login', () => {
    it('should not be able to login with none matching credentials', () => {
        cy.visit('/')
        homePage.signInBtn.click({force: true})
        loginPage.login('testdata@gmail.com', '123123')
        //Verify error message
        loginPage.failedAlertHeader.should('be.visible').should('have.text', 'Alert')
        loginPage.failedAlertBody.should('be.visible').should('have.text', 'Invalid Email or password.')
    })

        it.only('should be able to login with matching credentials', () => {
            cy.visit('/')
            homePage.signInBtn.click({force: true})
            loginPage.login('dinostake@gmail.com', '12121212')
            //Verify Notice message is visible
            loginPage.successAlertHeader.should('be.visible').should('contain.text', 'Notice')
            //Verify LogOut button exists.
            loginPage.successAlertBody.should('be.visible')
                .should('have.text', 'Signed in successfully.')
            loginPage.logOutBtn.should('have.attr', 'href','/users/sign_out')
                .should('contain.text', 'Logout')
        })

        it('should not be able to login when 2 fields are empty', () => {
            cy.visit('/')
            homePage.signInBtn.click({force: true})
            loginPage.login('', '')
            //Verify error message
            loginPage.failedAlertHeader.should('be.visible').should('have.text', 'Alert')
            loginPage.failedAlertBody.should('be.visible').should('have.text', 'Invalid Email or password.')
        })

})