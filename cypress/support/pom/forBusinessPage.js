class Business {
    get header () {
        return cy.get('h1')
    }
}

module.exports = new Business ()