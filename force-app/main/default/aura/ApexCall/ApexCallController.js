({
    handleCallMe : function(component, event, helper) {

        // Step 1: Mention the Apex Class Method Name
        var action = component.get('c.foobar');
        var message="Hey this is to explain 'THIS'";

        //Step 2: Set the params
        action.setParams({
            'message':'sForce'
        });

        //Step 3:Define the Set Call Back function

        action.setCallback(this,function(response){
            var state = response.getState();
            console.log(message);

            if(state === 'SUCCESS'){
                var returnValue = response.getReturnValue();
                console.log(JSON.stringify(returnValue));

            }
            else if(state === 'INCOMPLETE'){
                
            }
            else if(state === 'ERROR'){
                
            }
            else{

            }

            

        });


        //Step 4: Push the action to queue
        $A.enqueueAction(action);

        

    }
   

    
})
