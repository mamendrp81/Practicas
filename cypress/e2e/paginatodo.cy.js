describe('TodoMVC', () => {
  beforeEach(() => {
    // Navega a la página de la aplicación antes de cada prueba
    cy.visit('https://todomvc.com/examples/typescript-react/#/')
  });

  it('Agregar una nueva tarea', () => {
    cy.get('.new-todo').type('Comprar pan{enter}');

  });

  it('Marcar una tarea como completada', () => {
    cy.get('.new-todo').type('Comprar pan{enter}');
    cy.get('.toggle').click()
    
  });

  it('Añadir varias tareas y completar una', () => {
    cy.get('.new-todo').type('Comprar pan{enter}');
    cy.get('.new-todo').type('Comprar agua{enter}');
    cy.get('.new-todo').type('Comprar fruta{enter}');
    cy.get(':nth-child(2) > .view > .toggle').click()
  });
});
  

