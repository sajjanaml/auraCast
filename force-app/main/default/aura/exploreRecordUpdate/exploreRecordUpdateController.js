({
    handleRecordUpdate : function(component, event, helper) {
        var changeType = event.getParams().changeType; 
        console.log(JSON.stringify(changeType)); //Need to check with brother about Change Typee

        if(changeType === "ERROR"){
            console.log('There is an Error in Fetching the record');
        }else if(changeType==="LOADED"){
            console.log('Record is Loaded');
        }else if(changeType ==="CHANGED"){
            console.log(JSON.stringify(event.getParams().changedFields.Rating.oldValue));
            console.log(JSON.stringify(event.getParams().changedFields.Rating.value));

            console.log(JSON.stringify(event.getParams().changedFields.Type.oldValue));
            console.log(JSON.stringify(event.getParams().changedFields.Type.value));
        }else if(changeType ==="REMOVED"){
            console.log("Record is Deleted");

        }else{
            console.log('Unknown Error!!');
        }

    }
})
