$(document).ready(function () {
    var VALID = '.cube-contain.valid';

    var cubes = {
        init: function () {
            this.bind();
        },

        bind: function () {
            $(VALID).click(function () {
                $(this).detach();
            });
        }
    };

    cubes.init();
});