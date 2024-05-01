import LandingPage from "../support/pages/LandingPage";
import ProductsPage from "../support/pages/ProductsPage";



describe('Products page overview', () => {
    let landingPage = new LandingPage();
    let productsPage = new ProductsPage();

    before(() => {
        landingPage.open();
        landingPage.login();
    });

    it('Products list loads', () => {
        productsPage.productsList.getInevtoryContainer().should('be.visible');
    });
});