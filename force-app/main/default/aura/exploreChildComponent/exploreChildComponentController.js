({
    handleData : function(component, event, helper) {

        //$A.get("e.c:ApplicationEvent")
        var cmpEvent = component.getEvent('cmpEvent'); //we have to give name of the event
        var greeting=component.get('v.greeting');

        cmpEvent.setParams({
            message:greeting
        });

        cmpEvent.fire();

    }
})
