/// <reference types="Cypress" />

const URL = 'http://127.0.0.1:8080/';

context('Test Leaderboard', () => {
  describe('Pruebas sobre la tabla y perfil', () => {
    beforeEach(() => {
      cy.visit(URL);
      cy.intercept('GET', 'https://api.chess.com/pub/player*', { fixture: 'jugador.json' }).as('respuestaJugador');
      cy.intercept('GET', 'https://api.chess.com/pub/leaderboards*', { fixture: 'leaderboards.json' }).as('respuestaLeaderboards');
      cy.get('[data-cy="tabla"]').as('tabla');
      cy.get('[data-cy="selector"]').as('selector');
    });

    it('La tabla existe y tiene elementos HTML hijos', () => {
      cy.get('@tabla')
        .should('exist')
        .and('have.descendants', 'tr')
        .and('be.visible');
    });

    it('El selector existe y tiene elementos HTML hijos', () => {
      cy.get('@selector')
        .should('exist')
        .and('have.descendants', '*')
        .and('not.be.disabled');
    });

    it('Las filas de la tabla tienen algún contenido y no estan vacias', () => {
      cy.get('@tabla')
        .find('.nombre')
        .should('not.be.NaN')
        .and('not.be.undefined');
    });

    it('Al seleccionar dos leaderboard distintos, se regenera la tabla', () => {
      cy.get('@selector')
        .select(1);
      cy.get('@tabla').as('leaderboard1');

      cy.get('@selector')
        .select(3);

      cy.get('@tabla').should('not.eq', '@leaderboard1');
    });

    it('Los perfiles se ven', () => {
      cy.get('@tabla')
        .find('.nombre').get('[data-posicion="3"]').as('jugador');
      cy.get('@jugador').click();

      cy.get('[data-cy="perfil"]').should('be.visible');
    });

    it('El nombre del perfil coincide con el de la tabla', () => {
      cy.get('@tabla')
        .find('.nombre').get('[data-posicion="3"]').as('jugador');

      cy.get('@jugador').invoke('text')
        .as('nombre-jugador');

      cy.get('@jugador').click();

      cy.get('[data-cy="nombre-perfil"]').should('contain.text', 'Hikaru Nakamura');
    });

    it('El enlace al perfil de Chess.com funciona', () => {
      cy.get('@tabla')
        .find('.nombre').get('[data-posicion="3"]').as('jugador');
      cy.get('@jugador').click();

      cy.get('[data-cy="enlace-perfil"]').should('have.attr', 'href');
      cy.get('[data-cy="enlace-perfil"]').invoke('attr', 'href').as('enlace');
      cy.get('@enlace').should('not.be.undefined').should('not.be.NaN').should('not.be.null');
    });
  });
});

context('Test API', () => {
  describe('Testea respuesta 200 de API', () => {
    it('Request a la api es exitoso', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.chess.com/pub/leaderboards/',
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
