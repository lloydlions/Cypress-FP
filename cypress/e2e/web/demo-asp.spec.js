import { switchWebpage,setFilter } from "../../pages/demo-main";

describe('Demo Page - Functional Programming', ()=>{
    it('Should launch the website', ()=>{
        cy.visit(Cypress.env('demopage'));
        cy.title().then( title => expect(title).to.be.equal('ASP.net Core Awesome Controls overview- ASP.net Core MVC Awesome demos') );
    })

    it('Should switch to Asp', ()=>{
        switchWebpage('aweui (Angular, React, Vue)')
    })

    it('Should scroll into view', ()=>{
        cy.xpath(`//h2[text()='Grid Filter Row']`).scrollIntoView({ easing:'linear'})
    })

    it('Should filter the values', ()=>{
        cy.fixture('demo-web.json').then( data => {
            for(const[key,value] of Object.entries(data['request'])){
                setFilter(key,value);
            }
        }       
        )
    })

    it('Verify values if correct', ()=>{
        cy.xpath(`(//table[@class='awe-table'])[2]//tbody`).find('tr').its('length').should('be.greaterThan',0);

        cy.fixture('demo-web.json').then( data => {
            let i=1;
            for(const[key,value] of Object.entries(data['response'])){
                cy.xpath(`(//table[@class='awe-table'])[2]//td[${i}]`).should('have.text', value)
                if( i == 3){
                    cy.xpath(`(//table[@class='awe-table'])[2]//td[3]//img`).should('have.attr', 'src')
                }
                i++;
            }
        }       
        )
    })
})