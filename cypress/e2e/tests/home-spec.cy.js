const loginPage = require('../../support/pom/loginPage')
const homePage = require('../../support/pom/homePage')
const guidePage = require('../../support/pom/guidePage')
const apiPage = require('../../support/pom/apiPage')

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

    it.only('API button visible and redirects to right link', () => {
        homePage.apiBtn
            .should('be.visible')
            .should('have.text', 'API')
            .click( {force: true})
        apiPage.header.should('have.text', 'Weather API')

    })

    it('Dashboard button visible and redirects to right link', () => {
        homePage.dashboardBtn.should('be.visible')
            .should('have.attr', 'href', '/weather-dashboard')
    })

    it('Marketplace button visible and redirects to right link', () => {
        homePage.marketplaceBtn.should('be.visible')
            .should('have.attr', 'href', 'https://home.openweathermap.org/marketplace')
    })

    it('Pricing button visible and redirects to right link', () => {
        homePage.pricingBtn.should('be.visible')
            .should('have.attr', 'href', '/price')
    })

    it('Maps button visible and redirects to right link', () => {
        homePage.mapsBtn.should('be.visible')
            .should('have.attr', 'href', '/weathermap')
    })

    it('Our Initiatives button visible and redirects to right link', () => {
        homePage.ourInitiativesBtn.should('be.visible')
            .should('have.attr', 'href', '/our-initiatives')
    })

    it('Partners button visible and redirects to right link', () => {
        homePage.partnersBtn.should('be.visible')
            .should('have.attr', 'href', '/examples')
    })

    it('Blog button visible and redirects to right link', () => {
        homePage.blogBtn.should('be.visible')
            .should('have.attr', 'href', 'https://openweather.co.uk/blog/category/weather')
    })

    it('For Business visible and redirects to right link', () => {
        homePage.forBusinessBtn.should('be.visible')
            .should('have.attr', 'href', 'https://openweather.co.uk')
    })

    it('Sign in visible and redirects to right link', () => {
        homePage.signInBtn.should('be.visible')
            .should('have.attr', 'href', 'https://openweathermap.org/home/sign_in')
    })

    it('Support is visible and redirects to right link', () => {
        homePage.supportBtn.should('exist')
        homePage.verifySupportBtn()
    })

})






















