(function() {

    tinymce.PluginManager.add( 'twentysixteen_child_custom_class', function( editor, url ) {
        // Add Button to Visual Editor Toolbar
       
        editor.addButton('contact_information_shortcode_button', {
            title: 'Insert Shortcode',
            cmd: 'contact_information_shortcode_button',
            image: url + '../images/code.png',
        });

        // Add Command when Button Clicked
        editor.addCommand('contact_information_shortcode_button', function() {
            editor.execCommand('mceReplaceContent', false, '[twentysixteen_child_contact_information]');
        });

    });
})();