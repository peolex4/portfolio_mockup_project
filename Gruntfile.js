module.exports = function(grunt) {

  grunt.initConfig({

  responsive_images: {

    myTask: {
      options: {
        sizes:
        [{
          suffix: '_large_2x',
          width: 1600,
          quality: 50,
          rename: false
        },
        {
          rename: false,
          suffix: '_large_1x',
          width: 800,
          quality: 50,
        },
        {
          rename: false,
          suffix: '_small',
          width: 480,
          quality: 50,
        },
        {
          rename:false,
          suffix: '_medium',
          width:600,
          quality:50,
        }]
      },
      files: [{
        expand: true,
          cwd: 'images/',
          src: ['**/ken.jpg'],
          dest: 'images/resized/'
      }]
    },


  },

});
    grunt.loadNpmTasks('grunt-responsive-images');
};