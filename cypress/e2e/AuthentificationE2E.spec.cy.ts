import LandingPage from "../support/pages/LandingPage";
import ProductsPage from "../support/pages/ProductsPage";


describe('Authentification', () => { 
    const landingPage = new LandingPage();
    const productsPage = new ProductsPage();

    beforeEach(() => {
        landingPage.open();
    });

    afterEach(() => {
        cy.clearAllCookies();
    });

    it('Successful log in for standard user', () => {
        landingPage.login();
        productsPage.getInevtoryContainer().should('be.visible');
    });

    it('Unsuccessful log in for locked out user', () => {
        const lockedoutUser = "lockedOutUser";

        landingPage.login(lockedoutUser);
        landingPage.loginForm.getErrorButton().should('be.visible');
    });

    it('Unsuccessful log in for user with wrong password', () => {
        const visualUser = "visualUser";

        landingPage.login(visualUser);
        landingPage.loginForm.getErrorButton().should('be.visible');
    });
});