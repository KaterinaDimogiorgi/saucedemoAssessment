class ShoppingCartComponent {
	private static shoppinCartContainerId = 'shopping_cart_container';

	getShoppinCartElement() {
		return cy.get(`#${ShoppingCartComponent.shoppinCartContainerId}`);
	}

	getShoppingCartBadgeTotal() {
		return this.getShoppinCartElement().invoke('text');
	}

	clickShoppingCart() {
		this.getShoppinCartElement().click();
	}
}

export default ShoppingCartComponent;