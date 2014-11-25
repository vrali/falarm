
module.exports = function(grunt){
	grunt.initConfig({
		bower : {
			install:{
				options:{
					targetDir : "./src/lib"
				}
			}
		},
		less : {
			development: {
					dest : "src/css/site.css",
					src: ["less/*.less"]				
			}
		}

	});

	grunt.registerTask("default", ["less:development", "bower:install"]);

	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-less');
};