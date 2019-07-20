(function($) {
    if ($) {
        $.fn.showByScroll = function(options) {
            new ShowByScroll($(this), options);
        };
    }
})(jQuery);

function ShowByScroll(elm, options) {

    var elements = Array.prototype.slice.call(elm);
    this.settings = Object.assign({
        elements: elements,
        className: 'show',
        offsetIndex: 0.8,
        delay: 0
    }, options);

    this.queue = [];
    this.queueTimeout = null;

    this.bindScroll();
    this.checkItems();

}

ShowByScroll.prototype.bindScroll = function() {
    var scrollHandler = this.checkItems.bind(this);

    window.addEventListener('scroll', scrollHandler);

    this.unbindScroll = function() {
        window.removeEventListener('scroll', scrollHandler);
    }
}

ShowByScroll.prototype.checkItems = function() {
    var settings = this.settings;
    var that = this;
    var count = 0;
    settings.elements.forEach(function(element) {

        if (element.classList.contains(settings.className)) return;       
        
        var scrollOffset = window.innerHeight * settings.offsetIndex + window.scrollY;
        var elementOffset = element.getBoundingClientRect().top + window.scrollY;
        var elementHeight = element.clientHeight;

        if (scrollOffset > elementOffset &&
            elementOffset + elementHeight > window.scrollY
        ) {

            if (that.settings.delay > 0) {
                that.addToQueue(element);
            } else {
                that.showItem(element);
            }
        }

        count ++;
    });

    if (count === 0) {
        this.unbindScroll();
    }
}

ShowByScroll.prototype.showItem = function(element) {
    if (!element) return;
    var settings = this.settings;
    var event = new Event('showedByScroll');
    element.classList.add(settings.className);
    element.dispatchEvent(event);
}

ShowByScroll.prototype.addToQueue = function(element) {
    if (this.queue.indexOf(element) < 0) {
        this.queue.push(element);
        if (!this.queueTimeout) {
            this.waitQueue();
        }
    }
}

ShowByScroll.prototype.waitQueue = function() {
    var that = this;
    this.queueTimeout = setTimeout(function() {
        var firstElement = that.queue[0];
        that.showItem(firstElement);
        that.queue.shift();

        if (that.queue.length) {
            that.waitQueue();
        } else {
            that.queueTimeout = null;
        }

    }, that.settings.delay);
}