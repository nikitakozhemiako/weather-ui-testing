class Blog {
    get categories () {
        return cy.get('#blog-categories')
    }
}

module.exports = new Blog ()