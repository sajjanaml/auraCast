({
    handleSendData : function(component, event, helper) {
        var greeting = component.get('v.greeting');
        var appEvent =$A.get("e.c:exploreApplicationEvent");
        appEvent.setParams({
            message:greeting

        });
        appEvent.fire();

    }
})
