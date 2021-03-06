// Gruntfile.js
module.exports = function(grunt) {
    grunt.initConfig({

        // get the configuration info from package.json ----------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),

        // connect
        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname: 'localhost',
                    open: true
                }
            }
        },
        // jshint
        jshint: {
            options: {
                reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
            },

            // when this task is run, lint the Gruntfile and all js files in src
            build: ['Gruntfile.js', 'resources/js/functions.js']
        },
        // UGLIFY
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'resources/js/functions.min.js': 'resources/js/functions.js'
                        // 'dist/js/magic.min.js': ['src/js/magic.js', 'src/js/magic2.js']
                }
            }
        },
        // MIN CSS
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'resources/css/styles.min.css': 'resources/css/styles.css'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'resources/css/styles.css': 'resources/sass/styles.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            stylesheets: {
                // files: ['resources/**/*.css', 'resources/**/*.less'],
                files: ['resources/**/*.scss'],
                // tasks: ['less', 'cssmin']
                tasks: ['sass']
            },
            html: {
                files: ['*.html'],
            },
            scripts: {
                files: 'resources/**/*.js',
                // tasks: ['jshint', 'uglify']
                tasks: ['jshint']
            }
        }
        // all of our configuration will go here
    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // tasks yo
    grunt.registerTask('default', ['connect', 'watch']);

};
