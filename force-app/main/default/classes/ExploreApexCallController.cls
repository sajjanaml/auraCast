public with sharing class ExploreApexCallController {
    
    @AuraEnabled
    public static List<Account> foobar(String accountName){
       return [Select Id, Name from Account Where Name=: accountName];
    }
   
}
