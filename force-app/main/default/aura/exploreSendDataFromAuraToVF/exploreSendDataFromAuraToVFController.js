({
    handleSendData : function(component, event, helper) {
        //1. Get Component Message

        var message=component.get('v.message');
        //2. Get URL

        var baseDomain = 'https://' + component.get('v.baseDomain');

        //3. Get the iFrame to which you need to send the Data
        var vfWindow = component.find('vframe').getElement().contentWindow;

        //4.Post the Message

        vfWindow.postMessage(message,baseDomain);
        

    }
})
