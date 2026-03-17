/// <reference types="cypress" />

// Sitio https://playground.bondaracademy.com/pages/forms/layouts

beforeEach('Open Test playground', () => {
        cy.visit('/')
    })

it('Hello world 1', () => {
    
    // by Tag
    // Elemento 'get' permite obtener elementos del DOM buscando el unique identifier como ID.
    // Al seleccionar 'input', cypress seleccionara todos los elementos de tipo input
    cy.get('input')

    // el Simbolo de Hash apunta directamente al ID del elemento en el DOM. En la pagina donde se realizara la prueba.
    cy.get('#InputEmail1')

    // By Class
    // en punto selecciona unicamente el elemento de la clase. Para el siguiente ejemplo, cypress seleccionara todos las class que sean de tipo:
    cy.get('.input-full-width')

    // by attribute
    //HTML attributes provide additional information about HTML elements.
    // el siguiente caso selecciona todos los elementos HTML con el atributo mencionado
    cy.get('[fullwidth]')

    // by attribute with value
    cy.get('[placeholder="Email"]')

    // by entire class value
    cy.get('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')
 })

