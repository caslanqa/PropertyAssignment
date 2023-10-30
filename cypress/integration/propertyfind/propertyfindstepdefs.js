import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';

import mainPage from '../pages/mainPage';
import propDetailsPage from '../pages/propertyDetailsPage';
import verifications from '../pages/e2eVerificationPage';
import apiUtils from '../pages/apiUtils';
import searchResultPage from '../pages/searchResultPage';

let propDetails;

Given('Go to the url',() => {
    cy.visit('/');
})

When('Set Property type {string} and Price less then {string}',(type,price) => {
    mainPage.setPropertyType(type);
    mainPage.setPrices('0',price);
})

Then("Click to search icon for search",() => {
    mainPage.clickSearchBtn();
})

And("Verify API and UI counts",() => {
    searchResultPage.getPropertyCount().then((text)=>{
        verifications.verifyApiAndUiPropCounts(parseInt(text));                
    })
})

When("Select {string} checkbox",(cbLabel) => {
    mainPage.selectCheckbox(cbLabel);
})

Then("Select {string} category",(catText) => {
    searchResultPage.goToCategory(catText);
})

Then("Get property details from API",() => {
    apiUtils.storePropDetailsFromApi(0).then((body) => {
        propDetails = body;
    })
})

Then("Go to {string} property details page",(orderOfProp) => {
    searchResultPage.goToPropertyDetails(orderOfProp);
})

And("Verify property details",() => {
    verifications.verifyPropDetails(propDetails);
})

When("Type {string} to the search box",(searchText) => {
    mainPage.searchText(searchText);
})

Then("Select the first matched suggestion from list",()=>{
    mainPage.selectNthSuggestion(1);
})

And("Verify {string} date is not null",(property) => {
    propDetailsPage.verifyPropertyNotNull(property);
})