import LandingPage from "../support/pages/LandingPage";
import ProductDetailsPage from "../support/pages/ProductDetailsPage";
import ProductsPage from "../support/pages/ProductsPage";
import ShoppingCartPage from "../support/pages/ShoppingCartPage";


describe('Products page overview', () => {
    const productName = 'Sauce Labs Backpack';

    const landingPage = new LandingPage();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();
    const productDetailsPage = new ProductDetailsPage();

    before(() => {
        landingPage.openAndLogin();
    });

    it('Products list loads correctly upon login', () => {
        productsPage.getInevtoryContainer().should('be.visible');
        productsPage.product.getProductElementByName(productName).should('be.visible');
        productsPage.getOpenBurgerMenuButton().should('be.visible');
        productsPage.shoppingCart.getShoppinCartElement().should('be.visible');
    });

    it('Product details page loads correctly upon selecting a product', () => {
        productsPage.selectProductByName(productName);
        productDetailsPage.getInevtoryContainer().should('be.visible');
        productDetailsPage.clickBackToProducts();
    });

    it('Shopping cart with one added product loads correctly', () => {
        productsPage.selectProductByName(productName);
        productDetailsPage.clickAddToCart();
        productDetailsPage.shoppingCart.getShoppingCartBadgeTotal().should('equal', '1');
        productDetailsPage.clickShoppingCart();
        shoppingCartPage.getProductElementByName(productName).should('be.visible');
        shoppingCartPage.clickContinueShopping();
    });

    it('Shopping cart total items updated correctly upon product removal', () => {
        productsPage.selectProductByName(productName);
        productDetailsPage.clickRemove();
        productDetailsPage.getAddToCartButton().should('be.visible');
        productDetailsPage.shoppingCart.getShoppingCartBadgeTotal().should('equal', '');
    });
});