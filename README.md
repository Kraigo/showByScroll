Show by scroll
========

Plugin for display items when scrolling down and appearing item on the screen.

**Supported JQuery** but available vanilla js way.

#### 1. Include script

```html
<script src=”show-by-scroll.min.js”></script>
```

#### 2. Initialization function for the desired element

```javascript
// Vanilla Javascript

const elements = document.querySelectorAll('.showbyscroll');
const options = {
    className: 'show',
    offsetIndex: 1.5
};

new ShowByScroll(elements, options);
```

```javascript
// jQuery

$(function() {
    $('.showbyscroll').showByScroll({
        className: 'show',
        offsetIndex: 1.5
    });
});
```
- **className** *[string]* - what class will be added when the item is visible (default: "show");
- **offsetIndex** *[number]* - percentage of screen causing the event (default: 1).
<s>**onlyView** *[boolean]* - handle the items above viewport? (default: false)</s>

#### 3. Trigger for added class and element showed
```javascript
// Vanilla Javascript

const element = document.querySelector('.showbyscroll');
element.addEventListener('showedByScroll', function() {
    // when element triggered 
})
```

```javascript
// jQuery

$('.showbyscroll').on('showedByScroll', function() {
    // when element triggered 
});
```