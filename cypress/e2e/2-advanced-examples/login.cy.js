/// <reference types="cypress" />

//import { deleteTestUser } from "../../../src/firebase/usersController"

describe('Testeamos la gestion de usuarios', () => {
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        cy.visit('http://localhost/3000')
      })

    it('Se renderiza correctamente', () => {
        // eslint-disable-next-line no-undef
        cy.contains('Fire-Shop V3')
    })
    
    it('podemos acceder a la ruta de login', () => {
        // eslint-disable-next-line no-undef
        cy.contains('Este es el login').should('not.exist')
        // eslint-disable-next-line no-undef
        cy.contains('Login').click()
        // eslint-disable-next-line no-undef
        cy.contains('Este es el login')
    })

    it('podemos acceder a la ruta de Registrasrse', () => {
        const registerTitle = 'Registrarse';
        cy.contains(registerTitle).should('not.exist')
        cy.contains('Registrate').click()
        cy.contains(registerTitle).should('exist') 
    })

    it('Podemos registrar usuarios', () => {
        //await deleteTestUser();
        const email= "fireshop@gmail.com"
        const password= "fireshop@gmail.com"
        cy.contains('Registrate').click()
        cy.get('input[placeholder="Email"]').type(email)
        cy.get('input[placeholder="Password"]').type(password)
        // cy.get('button.submit-button').click()
        // cy.contains('Home')
    })

    it('Podemos iniciar sesion', () => {
        const email= "fireshop@gmail.com"
        const password= "fireshop@gmail.com"
        cy.contains('Login').click()
        cy.get('input[placeholder="Email"]').type(email)
        cy.get('input[placeholder="Password"]').type(password)
        cy.get('button.submit-button').click()
        cy.contains('Logout').should('exist')
    })



})