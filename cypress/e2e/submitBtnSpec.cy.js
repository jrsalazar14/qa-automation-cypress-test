describe("Add Note Test", () => {
  it("Should add a note to the notes array and render it", () => {
    cy.visit("/");

    const inputValue = "Random and Awesome Test Note";
    cy.getByDataCy("input").type(inputValue).should("have.value", inputValue);

    cy.getByDataCy("form").submit();

    cy.getByDataCy("note").should("exist");
    cy.contains(".note-container", inputValue).should("exist");
  });

  it("Add multiple notes to the notes array and render them", () => {
    cy.visit("/");

    const inputValues = ["TestNote 1", "TestNote 2", "TestNote 3"];

    inputValues.forEach((inputValue) => {
      cy.getByDataCy("input").type(inputValue).should("have.value", inputValue);
      cy.getByDataCy("form").submit();
    });

    inputValues.forEach((inputValue) => {
      cy.getByDataCy("note").should("exist");
      cy.contains(".note-container", inputValue).should("exist");
    });
  });
});
