## Lightning components as reusable services—or service components
* 

## User Story
* [sign-up page](https://docs.google.com/document/d/1jn4VuSM9SvGvlLMda-BPHaRLfl7tNKWAycNpPbAzn4E/edit?ts=5c58a4a5#)
* 

## Josh Notes
* There is an `init` method in the lightning component controller that calls `helper.getCountries`, which, in turn calls `OnboardingUtils.fetchPicklistVals` and that method is in the `onb_OnboardingUtil` static resource.
* I’m doing some work on `onb_LightningSelfRegisterController` at the moment because I am blocked until we can get logged into the community as the community user we create.
* The user and contact we are creating are not associated correctly with the account and application records we create. During sign up. There is a limitation on community licenses that prevents us from setting them as the owner of an account. My understanding is that we might be able to do it with community plus licenses.
* Right now after the user completes the reg form and submits it, we create an account, application, user, and contact in that order, we set their password to a random string and log them in automatically so they are logged in for the rest of the reg flow.
* Which is what I need, I need to be able to login as the community user we create during reg for the piece I’m working on. That was a blocker for me, which is now resolved, but we still need to figure out how to relate the account and application records to the user and contact records correctly, which I will leave to you or come back to.
* We might need to get some community plus licenses to get this to work.
* `Site.createPortalUser` and `Site.createExternalUser` will both fail if we try to create them under an account id that is not the Community owner account id.
* And I haven’t been able to create community users correctly manually. They don’t get added to the community correctly if we don’t use the Site methods for creating them.
* I created two private static methods in the controller called `selfRegisterWorking` and `selfRegisterExperimental`. Please don’t touch selfRegisterWorking.
* You can just route the `selfRegister` method to one or the other as needed
* Vuk - figure out how to relate the account and application records to the user and contact records
* 

## Set Up a Customer Account Portal
* members using profiles: Customer Community User

### Prep Your Org for a Login Registration Flow

## sObject Class
* add user permissions for Apex classes
* enforce sharing rules

### Accessing sObject fields
* [sObject Class](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_methods_system_sobject.htm#apex_methods_system_sobject)
* accessed or changed with dot notation
* Apex runtime engine
* formula field values and values for other fields that are read-only for the context user cannot be changed
* If you use the generic sObject type instead of a specific object, such as Account, you can retrieve only the Id field using dot notation. 
* 

## Apex Controllers for Lightning Component design
* use the @AuraEnabled and static signatures.
* Base Lightning components - handle the creation of the corresponding HTML and CSS from the Salesforce Lightning Design System (SLDS)
* [Lightning Components Developer Guide](https://developer.salesforce.com/docs/component-library/overview/components)
* Lightning Data Service - to create a new property record—without writing Apex
* Lightning Data Service uses an object named `force:recordData` to perform CRUD interactions on records. 
* There are several other attributes for `force:recordData`
* When a value is assigned to the recordId attribute, behind the scenes, Lightning Data Service retrieves either the entire record or the requested fields. 
* The resulting fields are stored in the attribute defined by the targetFields attribute; in this case, propertyRecord
* the mode attribute defines whether or not this instance of force:recordData is in VIEW mode or EDIT mode