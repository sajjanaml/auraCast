({
    doInit : function(component, event, helper) {
        //Contact c = new Contact();

        

        component.find('contactRecord').getNewRecord(
            "Contact", //SObject
            null, //recordTypeId
            false, //Skip Cache
            $A.getCallback(function(){
                var rec = component.get('v.newContact');
                var error = component.get('v.errors');

                if(error || (rec=== null) ){
                    console.log('Error in Initalizing');
                }else{
                    console.log('Record got initialized');
                }



            })






        );

    },

    handleSave : function(component, event, helper) {
            var recId=   component.get('v.recordId');
            console.log(recId);

            component.set('v.newContact.AccountId',recId);

        component.find('contactRecord').saveRecord($A.getCallback(function(saveResults){
            if(saveResults.state === 'SUCCESS' || saveResults.state ==='DRAFT'){
                console.log('Record got saved');
            }


        }))
    }
})
