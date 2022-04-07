({
    handleSendData : function(component, event, helper) {

        var greeting = component.get('v.greeting');
        var appEvent = $A.get('e.c:myApplicationEvent');

        appEvent.setParams({
            message:greeting
        });
        appEvent.fire();


    }
})
