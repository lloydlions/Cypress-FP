import postRequest from '../../fixtures/demo-api-post.json'

describe('Demo Api Test', ()=> {

    it('Get', ()=>{
        cy.request({
            url: Cypress.env('reqres')+'/api/users?page=2',
            method: 'GET'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).property('total').to.not.be.oneOf([null,0])
            const data = response.body['data']
            console.log(`GET RESPONSE : ${JSON.stringify(data)}`)
          })
    })
 
    it('Post', ()=>{
        cy.request({
            url: Cypress.env('reqres')+'/api/users',
            method: 'POST',
            body: postRequest
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).not.null
            const data = response.body['id']
            console.log(`POST RESPONSE : ${JSON.stringify(data)}`)
          })
    })


})