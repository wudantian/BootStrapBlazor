// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

window.exampleJsFunctions = {
    showPrompt: function (message) {
        return prompt(message, 'Type anything here');
    }
};

window.bootstrapModalFunctions = {
    show: function (element) {
        $(element).modal('show');
    },
    close: function (element) {
        $(element).modal('hide');
    },
    onclosed: function (element, id) {
        $(element).on('hidden.bs.modal', function (e) {
            DotNet.invokeMethodAsync("BootStrapBlazor", 'ModelClosed', id);
        })
    }
};

window.bootstrapDropDownFunctions = {
    show: function (element) {
        $(element).addClass('show');
    },
    hide: function (element) {
        $(element).removeClass('show');
    },
    toggle: function (element) {
        if ($(element).hasClass('show')) {
            this.hide(element);
        }
        else {
            this.show(element);
        }
    }
};
