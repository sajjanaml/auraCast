({
    handleCallMe : function(component, event, helper) {

        // Step 1: Mention the Apex Class Method Name
        var action = component.get('c.foobar');

        //Step 2: Set the params
        action.setParams({
            'message':'sForce'
        });

        //Step 3: Set Call Back function

        action.setCallback(this,function(response){
            var state = response.getState();

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

        $A.enqueueAction(action);

        

    }
    //Step 4: Calling

    
})
