module.exports = function (grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	
	var userConfig = require('./build.config.js');
	
	var taskConfig = {
		
		pkg: grunt.file.readJSON('package.json'),
		
		/**
		 * Minifies RJS files and makes it production ready Build files are
		 * minified and encapsulated using RJS Optimizer plugin
		 */
        requirejs: {
            compile: {
                options: {
                    baseUrl: "../app/",
                    paths   :
                    {
                        // Configure alias to full paths; relative to `baseURL`

                    	 // Modules
                        'iseApp'                 : './iseApp',
                        'notificacao'            : './notificacao',
                        'estatistica'            : './estatistica',
                        'soe'                    : './soe',
                        'versao'                 : './versao',
                        'mod_totais'             : './mod_totais',
                        'mod_secretaria_escola'  : './mod_secretaria_escola',
                        'mod_adm'                : './mod_adm',
                        'filters'                : './filters',
                        'directives'             : './directives',

                    },
                    out: '<%= buildDir %>/assets/js/ise.min.js',
                    name: 'iseApp'

                },
                preserveLicenseComments : false,
                optimize: "uglify"
            }
        },
        /**
		 * `grunt concat` concatenates multiple source files into a single file.
		 */
        concat: {

            /**
			 * The `source` target is the concatenation of our application
			 * source code and all specified vendor source code into a single
			 * file.
			 */
            source: {
//                options: {
//                    banner: '<%= meta.banner %>'
//                },
                src: [
                    '<%= buildDir %>/assets/js/ise.min.js'
                ],
                dest: '<%= buildDir %>/assets/js/ise.min.js'
            }
        },
		
		/**
         * The directories to delete when `grunt clean` is executed.
         */
        clean: {
            build: [
                '<%= buildDir %>'
            ],
            compileDir: [
                '<%= compileDir %>'
            ],
            hooks: [
            ],
            options: {
                force: true
            }
        },
		
		copy: {
            /*new process*/
            /*app*/
			/* Copia fontes nao minificados caso dore o uglify sera sobreescrito */
			appjs: {
                expand: true,
                cwd: '<%= devDir %>',
                src: ['**/*.js'],
                dest: '<%= compileDir %>/assets/js/'
            },
            
            vendorjs: {
                files: [
                    {
                        src: [ '**' ],
                        cwd: '<%= devDir %>/vendor',
                        dest: '<%= compileDir %>/vendor',
                        expand: true
                    }
                ]
            },
			
            build_vendorjs: {
                files: [
                    {
                        src: [ '**' ],
                        cwd: '<%= devDir %>/vendor',
                        dest: '<%= buildDir %>/vendor',
                        expand: true
                    }
                ]
            },
            
            prod_boot: {
                files: [
                    {
                        src: './requirejs/bootstrap_prod.js',
                        dest: '../../webapp/build.config.js',
                        expand: false
                    }
                ]
            },
            
            dev_boot: {
                files: [
                    {
                        src: './requirejs/bootstrap_dev.js',
                        dest: '../../webapp/build.config.js',
                        expand: false
                    }
                ]
            },
            
            view: {
                expand: true,
                cwd: '../view/',
                src: ['**/*'],
                dest: '../../webapp/resources/assets/view'
            },
            
            images: {
                expand: true,
                cwd: '../images/',
                src: ['**/*'],
                dest: '../../webapp/resources/assets/images'
            },
			
			font_awesome_css: {
                expand: true,
                flatten: true,
                cwd: '../app/vendor/font-awesome/',
                src: ['css/*'],
                dest: '../../webapp/resources/assets/css'
            },
            
            font_awesome_fonts: {
                expand: true,
                flatten: true,
                cwd: '../app/vendor/font-awesome/',
                src: ['fonts/*'],
                dest: '../../webapp/resources/assets/fonts'
            },

            font_awesome_less: {
                expand: true,
                flatten: true,
                cwd: '../app/vendor/font-awesome/',
                src: ['less/*'],
                dest: '../../webapp/resources/assets/less'
            },
            
            compile: {
                files: [
                    {
                        src: [ '**' ],
                        cwd: '<%= buildDir %>/assets',
                        dest: '<%= compileDir %>/assets',
                        expand: true
                    },
                    {
                        src: [ '**' ],
                        cwd: '<%= buildDir %>/vendor',
                        dest: '<%= compileDir %>/vendor',
                        expand: true
                    }
                ]
            }
        },
	};
	
	grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));
	
	
	
	grunt.registerTask("dev", [
		'clean:build',
		'clean:compileDir',
        'copy:appjs',
        'copy:vendorjs',
        'copy:dev_boot',
        'copy:view',
        'copy:images',
        'copy:font_awesome_css',
        'copy:font_awesome_fonts',
        'copy:font_awesome_less',
    ]);

    
    grunt.registerTask( "prod", [
    	'clean:build',
    	'clean:compileDir',
    	'copy:build_vendorjs',
        'copy:prod_boot',
        'copy:view',
        'copy:images',
        'copy:font_awesome_css',
        'copy:font_awesome_fonts',
        'copy:font_awesome_less',
        "requirejs",
        "concat:source",
        "copy:compile"
    ]);
	
	
	
};