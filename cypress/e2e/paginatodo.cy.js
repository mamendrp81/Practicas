describe('TodoMVC', () => {
  beforeEach(() => {
    // Navega a la página de la aplicación antes de cada prueba
    cy.visit('https://todomvc.com/examples/typescript-react/#/')
  });

  it('Agregar una nueva tarea', () => {
    cy.get('.new-todo').type('Comprar el pan{enter}');
    cy.get('.todo-list li').should('have.length', 1);
    cy.get('.todo-list li').first().should('contain', 'Comprar el pan');
  });

  it('Marcar una tarea como completada', () => {
    cy.get('.new-todo').type('Comprar el pan{enter}');
    cy.get('.todo-list li').first().find('.toggle').check();
    cy.get('.todo-list li').first().should('have.class', 'completed');
  });

  it('Eliminar una tarea', () => {
    cy.get('.new-todo').type('Comprar el pan{enter}');
    cy.get('.todo-list li').first().find('.destroy').click({ force: true });
    cy.get('.todo-list li').should('have.length', 0);
  });
});
  

