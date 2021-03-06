

module.exports = function(grunt) {

grunt.initConfig({
  nggettext_extract: {
    pot: {
      files: {
        'po/template.pot': ['*.html']
      }
    },
  },
  nggettext_compile: {
    all: {
      options: {
        module: 'sample'
      },
      files: {
        'translations.js': ['po/*.po']
      }
    },
  }
});

	grunt.loadNpmTasks('grunt-angular-gettext');
  grunt.registerTask('default', ['nggettext_extract']);
  grunt.registerTask('compile_it', ['nggettext_compile']);
 
}