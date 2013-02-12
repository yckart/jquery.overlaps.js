/*!
 * jquery.overlaps.js 0.0.1 - https://github.com/yckart/jquery.overlaps.js
 * Determine if an element overlaps another.
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/09
*/
(function($){
    $.fn.overlaps = function(obj) {
        var elems = {targets: [], hits:[]};
        this.each(function() {
            var bounds = $(this).offset();
            bounds.right = bounds.left + $(this).outerWidth();
            bounds.bottom = bounds.top + $(this).outerHeight();

            var compare = $(obj).offset();
            compare.right = compare.left + $(obj).outerWidth();
            compare.bottom = compare.top + $(obj).outerHeight();

            if (!(compare.right < bounds.left ||
                  compare.left > bounds.right ||
                  compare.bottom < bounds.top ||
                  compare.top > bounds.bottom)
               ) {
                elems.targets.push(this);
                elems.hits.push(obj);
            }
        });

        return elems;
    };
}(jQuery));