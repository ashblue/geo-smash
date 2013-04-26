var cs = cs || {};

cs.viewCollection = function (size) {
    return $('<div class="cube-collection"></div>').css({
        width: size + 'px',
        height: size + 'px'
    });
};