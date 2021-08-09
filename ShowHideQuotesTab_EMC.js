// JavaScript source code
function showHideQuoteTab(executionContext) {
    formContext = executionContext.getFormContext();

    var clienttype = formContext.getAttribute("emc_clienttype");
    var quotestab = formContext.ui.tabs.get("QUOTES");

    if (clienttype != null) {
        clienttypevalue = clienttype.getValue();

        if (clienttypevalue == 100000001) {
            quotestab.setVisible(false);
        }
        if (clienttypevalue == 100000000) {
            quotestab.setVisible(true);
        }
    }

}

