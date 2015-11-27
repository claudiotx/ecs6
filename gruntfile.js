// var require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true, //maps compiled code errors to the source code error messages,
                optional: ['runtime'] //required for generators
            },
            dist: {
                files: {
                    //"expressplayground/public/javascripts/app.js": "src/index.js"
                    "dist/modules.js": "src/modules/modules.js",
                    "dist/myMath.js": "src/modules/myMath.js",
                    "dist/myMathMultiple.js": "src/modules/myMathMultiple.js",
                    "dist/objectMath.js": "src/modules/objectMath.js",
                    "dist/instantiableFunction.js": "src/modules/instantiableFunction.js"
                }
            }
        },
        watch: {
            babel: {
                files: 'src/modules/*.js',
                tasks: ['babel']
            }
        }
    });
    grunt.registerTask('es6', 'runs my tasks', function () {
        var tasks = ['watch'];

        // Use the force option for all tasks declared in the previous line
        grunt.option('force', true);
        grunt.task.run(tasks);
    });
    grunt.option('force', true); //ingore warnings
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadTasks("default", ["babel"]);
}
