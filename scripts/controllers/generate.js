var cs = cs || {};

var $WRAPPER = $('.wrapper-center');

cs.generate = {
    /**
     * Generates a cube's HTML from given params
     * @TODO Only works on a 2x2 cube, needs to work on 3x3, 4x4, 5x5, and so on
     * @param size Actual size of the cube such as 400px
     * @param sideFaces A 2 x 2 cube would have 2 sideFaces
     */
    getCube: function (size, sideFaces) {
        var sideCubes = sideFaces * sideFaces,
            $collection = cs.viewCollection(size),
            $wall,
            wallSize = size / sideFaces,
            wallOffset = size / sideFaces,
            cubeSize = size / sideFaces,
            j;

        for (var i = 0; i < sideFaces; i++) {
            // Create each wall
            $wall = cs.viewWall(size).css({
                WebkitTransform: 'translateZ(' + wallSize - wallOffset + 'px)',
                transform: 'translateZ(' + wallSize - wallOffset + 'px)'
            });

            // inject the proper number of cubes
            // Important to keep the cubes at the proper position
            for (j = 0; j < sideCubes; j++) {
                $wall.append(
                    cs.viewCube(cubeSize).css({
                        left: wallOffset - (cubeSize * (j % sideFaces)) + 'px',
                        top: wallOffset - (cubeSize * Math.floor(j / sideFaces)) + 'px'
                    })
                );
            }

            $collection.append($wall);
        }

        return $collection;
    },

    addCube: function () {

    }
};