class BasePage {
    protected _url = '/';

    getUrl() {
        return this._url;
    }

    open(url = this._url) {
        cy.visit(url);
        cy.url().should('include', url);

        return this;
    }

    clearCookies() {
        cy.clearCookies();
    }

    clearLocalStorage() {
        cy.clearLocalStorage();
    }

    reload() {
        return cy.reload();
    }
}

export default BasePage;

