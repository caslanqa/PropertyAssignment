import apiUtils from './apiUtils';
import propDetailsPage from './propertyDetailsPage';

class E2eVerifications {
    verifyApiAndUiPropCounts(uiCount){
        cy.url().then((request)=>{
            apiUtils.callApiRequest(request).then((body) => {
                apiUtils.getApiPropertyCount(body).then((apiCount)=>{
                    expect(apiCount).to.eq(uiCount);
                })
            })
        })        
    }

    verifyPropDetails(propDetails){
        propDetailsPage.getDescription().then((desc)=>{
            cy.wrap(propDetails).then((body)=>{
                let expectedDesc = body.description.replaceAll('\n','');
                let actualDesc = desc.replaceAll('\n','');
                expect(actualDesc).to.eq(expectedDesc);
            })
        })
        propDetailsPage.getLocation().then((location)=>{
            cy.wrap(propDetails).then((body)=>{
                expect(body.location.full_name.replace(', ','')).to.eq(location);
            })
        })
        propDetailsPage.getPropertyBath().then((bath)=>{
            cy.wrap(propDetails).then((body)=>{
                expect(body.bathrooms).to.eq(bath);
            })
        })
        propDetailsPage.getPropertyPrice().then((price)=>{
            cy.wrap(propDetails).then((body)=>{
                expect(price.replace(',','')).to.contains(body.price.value.toString());
            })
        })
        propDetailsPage.getPropertySize().then((size)=>{
            cy.wrap(propDetails).then((body)=>{
                const expectedSize = body.size.value.toString()+' '+body.size.unit;
                expect(expectedSize).to.eq(size);
            })
        })
        propDetailsPage.getTitle().then((title)=>{
            cy.wrap(propDetails).then((body)=>{
                expect(body.title).to.eq(title);
            })
        })
    }
}
const verifications = new E2eVerifications();
export default verifications;