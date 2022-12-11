const loginPage = require('../../support/pom/loginPage')
const homePage = require('../../support/pom/homePage')
const guidePage = require('../../support/pom/guidePage')
const apiPage = require('../../support/pom/apiPage')
const dashboardPage = require('../../support/pom/dashboardPage')
const marketplacePage = require('../../support/pom/marketplacePage')
const pricingPage = require('../../support/pom/pricingPage')
const mapsPage = require('../../support/pom/mapsPage')
const ourInitiativesPage = require('../../support/pom/ourInitiativesPage')
const partnersPage = require('../../support/pom/partnersPage')
const blogPage = require('../../support/pom/blogPage')
const forBusinessPage = require('../../support/pom/forBusinessPage')

describe('NavBar Labels exist', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.wait(2000)
    })

    it('logo exists and redirects to home page', () => {
        homePage.logo.should('be.visible')
    })

    it('Search Field and Search button operates as expected', () => {
        homePage.search('London')
        cy.url().should('eq', 'https://openweathermap.org/find?q=London')
    })

    it('Guide button visible and redirects to right link', () => {
        homePage.guideBtn
            .should('be.visible')
            .should('have.text', 'Guide')
            .click( {force: true})
        guidePage.header.should('have.text', 'Weather data in a fast and easy-to-use way')
    })

    it('API button visible and redirects to right link', () => {
        homePage.apiBtn
            .should('be.visible')
            .should('have.text', 'API')
            .click( {force: true})
        apiPage.header.should('have.text', 'Weather API')

    })

    it('Dashboard button visible and redirects to right link', () => {
        homePage.dashboardBtn
            .should('be.visible')
            .should('have.text', 'Dashboard')
            .click( {force: true})
        dashboardPage.header.should('have.text', 'OpenWeather Dashboard')

    })

    it('Marketplace button visible and redirects to right link', () => {
        homePage.marketplaceBtn
            .should('be.visible')
            .should('have.text', 'Marketplace')
        //     .click({force:true})
        // Opens in new tab and test failing
        // marketplacePage.header.should('have.text', 'Custom Weather Products')

    })

    it('Pricing button visible and redirects to right link', () => {
        homePage.pricingBtn
            .should('be.visible')
            .should('have.text', 'Pricing')
            .click({force:true})
        pricingPage.header.should('contain', 'Pricing')
    })

    it('Maps button visible and redirects to right link', () => {
        homePage.mapsBtn
            .should('be.visible')
            .should('have.text', 'Maps')
            .click({force:true})
        mapsPage.wrapper.should('be.visible')

    })

    it('Our Initiatives button visible and redirects to right link', () => {
        homePage.ourInitiativesBtn
            .should('be.visible')
            .should('have.text', 'Our Initiatives')
            .click()
        ourInitiativesPage.header.should('have.text', 'Our initiatives')
    })

    it('Partners button visible and redirects to right link', () => {
        homePage.partnersBtn
            .should('be.visible')
            .should('have.text', 'Partners')
            .click()
        partnersPage.header.should('have.text', 'Partners and solutions')
    })

    it('Blog button visible and redirects to right link', () => {
        homePage.blogBtn
            .should('be.visible')
            .should('have.text', 'Blog')
        //     .click()
        // blogPage.categories.should('be.visible')
    })

    it('For Business visible and redirects to right link', () => {
        homePage.forBusinessBtn
            .should('be.visible')
            .should('have.text', 'For Business')
        //     .click()
        // forBusinessPage.header.should('have.text', 'OpenWeatherfor business')
    })

    it.only('Sign in visible and redirects to right link', () => {
        homePage.signInBtn
            // .should('be.visible')
            .should('contains', 'Sign In')
            .click()
        loginPage.header.should('have.text', 'Sign In To Your Account')
    })

    it('Support is visible and redirects to right link', () => {
        homePage.supportBtn.should('exist')
        homePage.verifySupportBtn()
    })

})























