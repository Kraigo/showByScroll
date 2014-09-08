Show by scroll
========

JQuery plugin for display blocks by scrolling window

Need JQuery http://jquery.com/download/

#### 1. First need connect jquery.showbyscroll plugin

```html
<script src=”jquery.showbyscroll.min.js”></script>
```

#### 2. Initialization function for the desired element
```javascript
$(function() {
	$( '.showbyscroll' ).showByScroll({
		'class': 'show',
		'offsetIndex': 1.5
	});
});
```
**class** - which class add when the object is visible (default: "show");.
**offsetIndex** - screen height divided by the Index (default: 2).