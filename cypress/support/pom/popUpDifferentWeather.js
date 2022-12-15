class PopUpDifferentWeather  {

    get popUpFull () {
        return cy.get('pop-up-container')
    }

    get header () {
        return cy.get('.pop-up-header')
    }

}

module.exports = new PopUpDifferentWeather()