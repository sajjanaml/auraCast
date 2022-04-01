({
    commonFunc : function(component,event) {
        // var btnClick = event.getSource();
        // var btnLabel = btnClick.get("v.label");

        component.set('v.message',event.getSource().get("v.label"));


    }
})
