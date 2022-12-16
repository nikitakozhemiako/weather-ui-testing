class PopUpDifferentWeather  {

    get popUpFull () {
        return cy.get('pop-up-container')
    }

    get header () {
        return cy.get('.pop-up-header')
    }

    get iconsWeather () {
        return cy.get('li[data-v-3cdad65e]')
    }

    get exitButton () {
        return cy.get('.icon-close')
    }

    get moreOptionsDropDown () {
        return cy.get('.more-options')
    }
}

module.exports = new PopUpDifferentWeather()