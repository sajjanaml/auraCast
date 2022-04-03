({
    cYes : function(component, event, helper) {
        // clickBtn = event.getSource();
        // label = clickBtn.get('v.label');
        // component.set('v.message',event.getSource().get("v.label"));
        helper.helperMethod(component,event);

    },

    cNo : function(component, event, helper) {
        // clickBtn = event.getSource();
        // label = clickBtn.get('v.label');
        // component.set('v.message',label);
        // component.set('v.message',event.getSource().get("v.label"));
        helper.helperMethod(component,event);

    },
})
