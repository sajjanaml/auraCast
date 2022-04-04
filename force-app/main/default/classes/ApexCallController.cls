public with sharing class ApexCallController {
   
   
    @AuraEnabled
    public static List<Account> foobar(String message) {
        return [Select Id, Name from Account where Name=:message];

    }
}
