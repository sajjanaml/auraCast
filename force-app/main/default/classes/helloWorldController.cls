public with sharing class helloWorldController {
    @AuraEnabled
    public static Lead getLeads() {
        return [SELECT Id, Name, Email FROM Lead limit 1];
    }

}
