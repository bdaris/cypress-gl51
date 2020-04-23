describe('the conduit application', () => {
    it('Show some posts', () => {
        cy.visit('/')
        cy.get('.article-preview').should('have.length',10)
    })
    it('show the first posts', () => {
        cy.server()
        // we set the response to be the activites.json fixture
        cy.route('GET', 'api/articles*', 'fixture:posts.json')
        cy.visit('/')
        cy.get(':nth-child(1)').contains('fusername')
    })

    it('It should handle an empty database', () => {
        cy.server()
        // we set the response to be the activites.json fixture
        cy.route('GET', 'api/articles*', 'fixture:posts.json')
        cy.visit('/')
        cy.contains('No articles are here... yet.')
    })
  })