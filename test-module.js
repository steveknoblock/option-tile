/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */

/* tl;dr
    There is a jQuery object. All jQuery functions are methods of this object
    thusly: $.fn.somejqueryfunction. Since javascript is a prototype based
    language, you can freely add methods to the object without a class
    definition.
*/


// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ( $, window, document, undefined ) {

    console.log("Running function");
    // undefined is used here as the undefined global
    // variable in ECMAScript 3 and is mutable (i.e. it can
    // be changed by someone else). undefined isn't really
    // being passed in so we can ensure that its value is
    // truly undefined. In ES5, undefined can no longer be
    // modified.

    // window and document are passed through as local
    // variables rather than as globals, because this (slightly)
    // quickens the resolution process and can be more
    // efficiently minified (especially when both are
    // regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "defaultPluginName",
        defaults = {
            propertyName: "value"
        };

        console.log(pluginName);

    // The actual plugin constructor
    function Plugin( element, options ) {
        console.log("Constructor");
        this.element = element;

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.options
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.options).
            // ^ Why? This and the two properties mentioned are automatically passed into the function scope.
            //console.log('clear optionTiles');

            

            
            
            // this shows to me what these mean and contain
            console.log(this.element); // this is the matched element
            console.log(this.options); // these are the options specified in the default
 
            this_select = this;

            // iterate over source selects
            $('select.option-tile-source').each(function(index, value){

                optionTiles = '';
                console.log(this); // this contains the selected element and all of its children, that is this is set to the item currently being iterated by the function it calls


                console.log("Building option tiles ");
               
                optionTiles += '<div class="option-surface">';
                optionTiles += '    <ul id="' + this.id + '" class="option-tiles">';

                    // this is the select being iterated over, passed to each
                    $.each(this, function(index, value) {
                    
                        // this is the option being iterated over by the each
                        optionTiles += '        <li class="option-tile" data-select-index="' + this.value;
                        optionTiles += '" data-cost="' + $(this).attr('data-cost')
                        optionTiles += '">&nbsp;<span>' + $( this ).text() + '</span>&nbsp;<span class="delta"></span></li>';

                    });

                optionTiles += '    </ul>';
                optionTiles += '</div>';
                
                $("body").append(optionTiles);
                
            });

             $('.option-tiles li').each(function(index) {
                $(this).on('click', function() {
                var data = $(this).attr('data-select-index');
                var delta = $(this).attr('data-cost');
                var id = $(this).parent().attr('id');
                $('#' + id).val(data);
        
                // If a cost or callout is defined for this option
                // display it
                if( delta !== 'undefined' ) {
                    $('span.delta').text('');
                    $(this).children('span.delta').text(delta);
                }

            });
});
            // I assume to build the HTML shadow control and pass it to the function
            // it needs to be assigned to a variable or contained in an anon function
            // passed to the "method" function.

            console.log("this should reference the Plugin now");
            console.log(this);
            this.yourOtherFunction(optionTiles);

        },

        yourOtherFunction: function(optionTiles) {
            /*
                tl;dr
                Acccess the elements and options defined by your plugin
                within a function just by saying this.element or
                this.options. "this" is still accessible
                within the function scope.
            */
            console.log("Element");
            console.log(this.element);
            console.log("Options");
            console.log(this.options);
            console.log("optionTiles");
            console.log(optionTiles);
            
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );

$(document).ready(function(ind, val){
    $('<div>').defaultPluginName();
});


