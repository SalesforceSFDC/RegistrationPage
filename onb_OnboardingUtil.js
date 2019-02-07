window.OnboardingUtils = (function() {

    //var value = 0; // private

    return {
        fetchPickListVals: function(component, fieldName, elementId) {
            var action = component.get("c.getSelectOptions");

            var objInfo = component.get("v.objInfo");

            console.log(objInfo);

            action.setParams({
                "objObject": objInfo,
                "fld": fieldName
            });
            var opts = [];
            action.setCallback(this, function(response) {
                if (response.getState() == "SUCCESS") {
                    var allValues = response.getReturnValue();

                    if (allValues != undefined && allValues.length > 0) {
                        opts.push({
                            class: "optionClass",
                            label: "--- None ---",
                            value: ""
                        });
                    }
                    for (var i = 0; i < allValues.length; i++) {
                        opts.push({
                            class: "optionClass",
                            label: allValues[i],
                            value: allValues[i]
                        });
                    }
                    component.find(elementId).set("v.options", opts);
                }
            });
            $A.enqueueAction(action);
        },
        getParameterByName: function(component, event, name) {
          name = name.replace(/[\[\]]/g, "\\$&");
          var url = window.location.href;
          var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
          var results = regex.exec(url);
          if (!results) return null;
          if (!results[2]) return '';
          return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
    };
}());