public with sharing class LeadCall {
    @AuraEnabled
    public static Lead getLead(){
       return [Select Id, Name from Lead limit 1];
    }
}
