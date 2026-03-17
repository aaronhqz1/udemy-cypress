/// <reference types="cypress" />

// Nuestras funciones de cypress se comportan como archivos de JavaScript normales, por lo que podemos escribir cualquier código JavaScript dentro de ellos. 
it('Hello world 1', () => {
    // En este segmentos podemos escribir nuestra función de javaScript para realizar la prueba.
})

it('Hello world 2', () => { })


// la palabra 'describe' nos permite agrupar nuestras funciones de prueba.
describe('My First Test', () => {

    // 'beforeEach' es una funcion que se ejecuta antes de cada una de las funciones de prueba dentro de nuestro 'describe'. Ejecutara pagina de inicio y luego cada caso de pruebas. 
    beforeEach('Abrir pagina de inicio', () => {
        // 'cy.visit' es una funcion de cypress que nos permite visitar un URL. Dado que se había indicado el 'baseUrl' en el archivo de configuración, no se necesario indicar el URL a visitar. 
        cy.visit('/')
    })

    it('Hello world 1', () => {
        // En este segmentos podemos escribir nuestra función de javaScript para realizar la prueba.
    })

    it('Hello world 2', () => { })
})

