module.exports = function (grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		less : {
			prod : {
				options : {
					compress : true,
					sourceMap : true,
					sourceMapFileInline: true,
					modifyVars : {}
				},
				files : {
					"app/assets/style.css" : "app/src/less/main.less"
				}
			}
		},
		watch : {
			less : {
				files : ['app/src/**/*.less'],
				tasks : ['less'],
				options : {
					spawn : false
				}
			}
		}
	});

	require('load-grunt-tasks')(grunt);
	grunt.registerTask('default', ['less']);
	grunt.registerTask('watch', ['watch']);
};
