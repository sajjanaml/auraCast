({
    handleClick : function(component, event, helper) {
        
        // 1. Mention the name of the Apex Method  
        var action = component.get('c.foobar');
        var message ="Hey Laxman!!";

        // 2. Set the Params
        action.setParams({
            'accountName': 'sForce'
        });

        // 3. Define Call Back function

        action.setCallback(this,function(response){
            var state=response.getState();
            console.log(message);
                console.log('I am in Apex Call Controller JS');

                if(state === 'SUCCESS' ){
                    var returnValue = response.getReturnValue();
                    console.log(returnValue);

                }

                else if(state === 'INCOMPLETE'){
                    
                }
                else if(state === 'ERROR'){

                }
                else {

                }

            });

        




        // 4. Push the request in to queue
        $A.enqueueAction(action);






    }
})
