module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	//SASS
	sass: {
		dist:{
			files:{
				'css/style.css': 'css/style.scss'
			}
		}
	},

	//JADE
	jade: {
		compile : {
			options : {
				data: {
					debug: false
				}
			},
		files : {
			"test.html" : ["test.jade"]
		}
	 }	
	},

	//AUTOPREFIXER
	autoprefixer: {
		options: {
			browsers:['last 3 version','ie 8','ie 9']
		},
		no_dest: {
			src: 'css/style.css'
		}
	},
	//CONNECT
	connect: {
		server: {
			options: {
				port: 9001,
				base: ''
			}
		}
	},
	//WATCH
	watch: {
		css: {
			files: ['css/*.scss'],
			tasks: ['sass','autoprefixer']
		},
		jade: {
			files:['*.jade'],
			tasks: ['jade']
		},
		options: {
			livereload:true
		}
	}

}); //end

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-jade');

// Default task(s).
grunt.registerTask('default', ['watch']);

};
