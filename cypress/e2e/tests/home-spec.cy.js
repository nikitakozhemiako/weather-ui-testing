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

describe('NavBar Labels exist and redirects to right pages', () => {
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
            .click({force: true})
        guidePage.header.should('have.text', 'Weather data in a fast and easy-to-use way')
    })

    it('API button visible and redirects to right link', () => {
        homePage.apiBtn
            .should('be.visible')
            .should('have.text', 'API')
            .click({force: true})
        apiPage.header.should('have.text', 'Weather API')

    })

    it('Dashboard button visible and redirects to right link', () => {
        homePage.dashboardBtn
            .should('be.visible')
            .should('have.text', 'Dashboard')
            .click({force: true})
        dashboardPage.header.should('have.text', 'OpenWeather Dashboard')

    })

    it('Marketplace button visible and redirects to right link', () => {
        homePage.marketplaceBtn.invoke('removeAttr', 'target')
            .should('be.visible')
            .should('have.text', 'Marketplace')
            .click({force: true})
        // Works fine with invoke
        marketplacePage.header.should('have.text', 'Custom Weather Products')

    })

    it('Pricing button visible and redirects to right link', () => {
        homePage.pricingBtn
            .should('be.visible')
            .should('have.text', 'Pricing')
            .click({force: true})
        pricingPage.header.should('contain', 'Pricing')
    })

    it('Maps button visible and redirects to right link', () => {
        homePage.mapsBtn
            .should('be.visible')
            .should('have.text', 'Maps')
            .click({force: true})
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
        homePage.blogBtn.invoke('removeAttr', 'target')
            .should('be.visible')
            .should('have.text', 'Blog')
            .click()
        cy.origin('https://openweather.co.uk/blog/category/weather', () => {
            cy.get('#blog-categories').should('be.visible')
            // blogPage.categories.should('be.visible')
            // passing only when invoke and origin
        })
    })


    it.skip('For Business visible and redirects to right link', () => {
        homePage.forBusinessBtn
            // .invoke('removeAttr', 'target')
            .should('be.visible')
            .should('have.text', 'For Business')
            .click()
        cy.origin('https://openweather.co.uk/', () => {
            cy.get('h1').should('contains', 'OpenWeatherfor business')
            //forBusinessPage.header.should('have.text', 'OpenWeatherfor business')
            // dont pass at all
        })
    })

    it('Sign in visible and redirects to right link', () => {
        homePage.signInBtn
            .should('be.visible')
            // .should('contains', 'Sign In')
            .click({force: true})
        loginPage.header.should('have.text', 'Sign In To Your Account')
    })

    it('Support is visible and redirects to right link', () => {
        homePage.supportBtn.should('exist')
        homePage.verifySupportBtn()
    })
})

describe('Header Image ', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.wait(2000)
    })

    it('header image exists and visible', () =>{
        homePage.headerImage.should('be.visible')
    })

    it('h1 text exists and visible', () =>{
        homePage.h1Text.should('be.visible').should('have.text', 'OpenWeather')
    })

    it('h2 text exists and visible', () =>{
        homePage.h2Text.should('be.visible')
            .should('have.text', 'Weather forecasts, nowcasts and history in a fast and elegant way')
    })

    // it.only('h2 text exists and visible', () =>{
    //     homePage.search2('London')
    //
    // })


    it.only('Search operates as expected', () => {

        const city = ['Berlin', 'Dubai', 'London', 'Test City']

        homePage.placeholderInSearchField.should('have.attr', 'placeholder', 'Search city')

        cy.wrap(city).each(city => {
            homePage.searchField.type(city)
            homePage.buttonSearch.click()
            homePage.searchField.clear()
            cy.wait(500)
            if(city === 'Test City') {
                homePage.cityNotFound
                    .should('be.visible')
                    .should('have.text', 'Not found. To make search more precise put the city\'s name, comma, 2-letter country code (ISO3166).')
            } else {
                homePage.searchDropDown.should('be.visible')
            }
        })
    })





})























