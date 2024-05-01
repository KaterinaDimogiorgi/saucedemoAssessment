import LandingPage from "../support/pages/LandingPage";
import ProductDetailsPage from "../support/pages/ProductDetailsPage";
import ProductsPage from "../support/pages/ProductsPage";

describe('Navigate through the menu', () => {
    const productName = 'Sauce Labs Backpack';

    let landingPage = new LandingPage();
    let productsPage = new ProductsPage();
    let productDetailsPage = new ProductDetailsPage();

    beforeEach(() => {
        landingPage.open();
        landingPage.login();
    });

    it('Open burger menu from products page and log out', () => {
        productsPage.openBurgerMenu();
        productsPage.burgerMenu.selectLogout();
    })

    it('Add product to cart from products details page, open burger menu and reset app state', () => {
        productsPage.openBurgerMenu();
        productsPage.selectProductByName(productName);

        productDetailsPage.clickAddToCart();
        productDetailsPage.shoppingCart.getShoppingCartBadgeTotal().should('equal', '1');
        productDetailsPage.openBurgerMenu();
        productDetailsPage.burgerMenu.selectResetAppState();
        productDetailsPage.shoppingCart.getShoppingCartBadgeTotal().should('equal', '');
    })
});