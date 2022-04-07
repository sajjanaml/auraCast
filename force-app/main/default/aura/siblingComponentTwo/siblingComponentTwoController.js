({
    handleApplicationEvent : function(component, event, helper) {
        var greeting = event.getParam("message");

        component.set('v.greeting',greeting );

    }
})
