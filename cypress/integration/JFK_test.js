/* global cy */
describe("Drawing App", function () {
	it("Test that the range input is changing properly ", function () {
		cy.visit("http://localhost:3000/");
        cy.get("input.stroke-width").click();
    });
    it("Tests dashed line drawing ability", function () {
		cy.get("div.line-types").get("input").eq(1).click();
		cy.get("canvas").click();
	});
	it("Tests if Eraser is stable when it draws.", function () {
		cy.get(".nav-bar__tool").eq(1).click();
		cy.get("canvas").click();
    });
   
});