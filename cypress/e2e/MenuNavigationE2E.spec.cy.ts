import LandingPage from "../support/pages/LandingPage";
import ProductDetailsPage from "../support/pages/ProductDetailsPage";
import ProductsPage from "../support/pages/ProductsPage";


describe('Navigate through the menu', () => {
    const productName = 'Sauce Labs Backpack';

    const landingPage = new LandingPage();
    const productsPage = new ProductsPage();
    const productDetailsPage = new ProductDetailsPage();

    before(() => {
        landingPage.openAndLogin();
    });

    it('Open burger menu from products details page and select all items', () => {
        productsPage.openBurgerMenu();
        productsPage.selectProductByName(productName);

        productDetailsPage.openBurgerMenu();
        productDetailsPage.burgerMenu.selectAllItems();
    });

    it('Add product to cart from products details page and reset app state from burger menu', () => {
        productsPage.selectProductByName(productName);

        productDetailsPage.clickAddToCart();
        productDetailsPage.shoppingCart.getShoppingCartBadgeTotal().should('equal', '1');
        productDetailsPage.openBurgerMenu();
        productDetailsPage.burgerMenu.selectResetAppState();
        productDetailsPage.shoppingCart.getShoppingCartBadgeTotal().should('equal', '');
        productDetailsPage.burgerMenu.clickCloseBurgerMenuButton();
        productDetailsPage.clickBackToProducts();
    })

    it('Open burger menu from products page and log out', () => {
        productsPage.openBurgerMenu();
        productsPage.burgerMenu.selectLogout();
    })
});