import LandingPage from "../support/pages/LandingPage";
import ProductsPage from "../support/pages/ProductsPage";



describe('Authentification', () => { 

    let landingPage = new LandingPage();
    let productsPage = new ProductsPage();

    beforeEach(() => {
        landingPage.open();
    });

    afterEach(() => {
        cy.clearAllCookies();
    });

    it('Log in as a standard user', () => {

        landingPage.login();
        productsPage.productsList.getInevtoryContainer().should('be.visible');
    });

    it('Log in as a lockedout user', () => {
        const lockedoutUSer = "lockedOutUser";

        landingPage.login(lockedoutUSer);
        landingPage.loginForm.getErrorButton().should('be.visible');
    });
});