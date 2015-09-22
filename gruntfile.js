// var require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

module.exports = function(grunt) {
        grunt.initConfig({
            babel: {
                options: {
                    sourceMap: true //maps compiled code errors to the source code error messages
                },
                dist: {
                    files: {
                        //"expressplayground/public/javascripts/app.js": "src/index.js"
                        "ecm5.js": "src/index.js"
                    }
                }
            },
            watch: {
                babel: {
                    files: ['src/**/*.js'],
                    tasks: ['babel']
                }
            }
    });

    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadTasks("default", ["babel"]);
}
