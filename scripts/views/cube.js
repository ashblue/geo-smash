var cs = cs || {};

var BORDER_SIZE = 5;

var _sideRotation = [
    'rotateY(   0deg )', // front
    'rotateX( 180deg )', // back
    'rotateY(  90deg )', // right
    'rotateY( -90deg )', // left
    'rotateX(  90deg )', // top
    'rotateX( -90deg )'  // bottom
];

cs.viewCube = function (size) {
    var $cube = $('<div class="cube-contain"><div class="cube"></div></div>').css({
            width: size + 'px',
            height: size + 'px'
        }),
        $cubeSide = $('<span class="cube-side"></span>').css({
            width: size - (BORDER_SIZE * 2) + 'px',
            height: size - (BORDER_SIZE * 2) + 'px'
        });

    // Create cube faces via transforms
    for (var i = 0; i < _sideRotation.length; i++) {
        $cube.children('.cube').append(
            $cubeSide.clone().css({
                WebkitTransform: _sideRotation[i] + ' translateZ(' + size / 2 + 'px)',
                transform: _sideRotation[i] + ' translateZ(' + size / 2 + 'px)'
            })
        );
    }

    return $cube;
};