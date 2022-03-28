({
    handleUpdate : function(component, event, helper) {
        component.find('record').saveRecord($A.getCallback(function(saveResult){

            // console.log(JSON.stringify(saveResult));

            if(saveResult.state ==="SUCCESS" || saveResult.state==="DRAFT"){
                console.log("HEY Record is Saved");

            }else if(saveResult.state ==="INCOMPLETE"){

            }else if(saveResult.state === "ERROR"){

            }else {
                console.log('Unknown Error')
            }
        }));

    }
})
