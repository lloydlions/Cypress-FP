require('cypress-xpath');

export const switchWebpage = (section) => {
    cy.xpath(`//button[@id='ddlFmw-awed']//i[@class='o-caret']`).click().then( ()=>{
        cy.xpath(`//li[text()='${section}']`).click()
    })
}

export const setFilter = (columnName, filterValue) => {
    switch (columnName){
        case "Person":
            cy.xpath(`//*[@id='GridFrowfltPerson-awed']`).type(filterValue)
            break;
        case "Food":
            cy.xpath(`//*[@id='GridFrowfltFood-awed']//i[@class='o-caret']`).click().then( ()=>{
                const food = `//*[@id='GridFrowfltFood-dropmenu']//div[text()='${filterValue}']`;
                cy.xpath(food).scrollIntoView({ easing: 'linear' }).then( 
                    ()=> cy.xpath(food).click()
                    )
            } )
    }
}