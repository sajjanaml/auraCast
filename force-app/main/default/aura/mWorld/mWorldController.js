({
    doInit : function(component, event, helper) {
        //Step 1: Mention Apex Class Aura enable method

        var action = component.get('c.getLead');

        //Set Params

        action.setCallback(this,function(response){
            var state = response.getState();

            if(state === 'SUCCESS'){
               var returnValue  = response.getReturnValue();
               console.log(returnValue);
               component.set('v.message',returnValue);

            }
            else if(state === 'INCOMPLETE'){

            }
            else if(state === 'ERROR'){

            }
            else{

            }

        });

        // Push to queue

        $A.enqueueAction(action);

    }
})
