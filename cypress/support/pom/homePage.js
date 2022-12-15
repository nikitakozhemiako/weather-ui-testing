class HomePage {

    get logo () {
        return cy.get('.logo')
    }
    get searchField () {
        return cy.get('#desktop-menu').find('[role="search"]')
    }
    get searchBtn () {
        return cy.get('#first-level-nav').find('[role="search"]').find('[placeholder="Weather in your city"]')
    }
    get guideBtn () {
        return cy.get('#desktop-menu').find('[href="/guide"]')
    }

    get apiBtn () {
        return cy.get('#desktop-menu').find('[href="/api"]')
    }

    get dashboardBtn () {
        return cy.get('#desktop-menu').find('[href="/weather-dashboard"]')
    }

    get marketplaceBtn () {
        return cy.get('#desktop-menu').find('[href="https://home.openweathermap.org/marketplace"]')
    }

    get pricingBtn () {
        return cy.get('#desktop-menu').find('[href="/price"]')
    }

    get mapsBtn () {
        return cy.get('#desktop-menu').find('[href="/weathermap"]')
    }

    get ourInitiativesBtn () {
        return cy.get('#desktop-menu').find('[href="/our-initiatives"]')
    }

    get partnersBtn () {
        return cy.get('#desktop-menu').find('[href="/examples"]')
    }

    get blogBtn () {
        return cy.get('#desktop-menu').find('[href="https://openweather.co.uk/blog/category/weather"]')
    }

    get forBusinessBtn () {
        return cy.get('#desktop-menu').find('[href="https://openweather.co.uk"]')
    }

    get signInBtn() {
        return cy.get('.user-li > a')
        // return cy.get('#desktop-menu').contains('Sign in')
    }

    get supportBtn () {
        return cy.get('#support-dropdown')
    }

    get supportDropDown () {
        return cy.get('#support-dropdown-menu')
    }

    get headerImage () {
        return cy.get('.section.where-to')
    }

    get h1Text () {
        return cy.get('h1').find('.orange-text')
    }

    get h2Text () {
        return cy.get('h2').find('.white-text')
    }

    get searchField () {
        return cy.get('.search-container')
    }

    get buttonSearch () {
        return cy.get('button[data-v-68963a64]')
    }

    get searchDropDown () {
        return cy.get('ul[data-v-68963a64]')
    }

    get cityNotFound () {
        return cy.get('.sub.not-found.notFoundOpen')
    }

    get placeholderInSearchField () {
        return cy.get('.search-container').find('[placeholder="Search city"]')
    }

    get differentWeatherBtn () {
        return cy.get('.controls').contains('Different Weather?')
    }

    get geoBtn () {
        return cy.get('.controls .control-el')
    }


    //This function is to type any input in search field
    search(input){
        this.searchField.type(input)
        this.searchBtn.type('{enter}')
    }

    //This function verifies SupportBtn is a dropdown and after click has 'drop-down visible' attribute in CSS
    verifySupportBtn() {
        this.supportBtn.click()
        this.supportDropDown.invoke('attr', 'class')
            .should('contain', 'dropdown-visible')
    }


    search2 (input) {
        this.searchField.type(input)
        this.buttonSearch.click()
        this.searchDropDown.should('be.visible')
    }


}


module.exports = new HomePage ()