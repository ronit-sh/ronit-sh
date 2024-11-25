describe("Test home page", () => {
	it("visits home page", () => {
		cy.on("uncaught:exception", () => false);
		cy.visit("/");
		cy.get('[data-cy="card"]');
	});
});
