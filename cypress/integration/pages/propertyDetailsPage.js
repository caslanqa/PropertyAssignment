class PropertyDetailsPage{
    getTitle(){
        return cy.get('.panel.panel--style1.panel--style3 > h1').invoke('text').then((title)=>{
            return title;
        })
    }

    getDescription(){
        return cy.get('[data-qs="text-trimmer"]').invoke('text').then((description)=>{
            return description;
        })
    }

    getLocation(){
        return cy.get('.property-location__detail-area').then((location)=>{
            return location.text();
        })
    }

    getPropertySize(){
        return cy.get('.property-facts__text:nth-child(2)').then((size)=>{
            let text = size.text()
            text = text.replaceAll('\t','');
            text = text.replace('\n',' ');
            return text;
        })
    }

    getPropertyPrice(){
        return cy.xpath("(//div[@class='property-page__column--right']//div[@class='property-price__price'])[2]").invoke('text').then((price)=>{
            return price;
        })
    }

    getPropertyBath(){
        return cy.xpath("//ul[@class='property-facts']/li[3]/div[2]").invoke('text').then((bath)=>{
            return bath;
        })
    }

    checkPropertyExist(property){
        return cy.get('li>div>span').then((list)=>{
            let bool;
            for (const prop of list) {
                if(prop.innerText.indexOf(property)!==-1){
                    bool = true;
                    break;
                }else{
                    bool = false;
                }
            }
            return bool;
        })
    }

    verifyPropertyNotNull(property){
        this.checkPropertyExist(property).then((bool)=>{
            expect(true).to.equal(bool);
        })
    }


}
const propDetailsPage = new PropertyDetailsPage();
export default propDetailsPage;