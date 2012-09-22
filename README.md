Detect the Vimium Chrome extension
==================================

This adds two methods to the `document` object: `hasVimium` and `onDetectVimium`.

`document.hasVimium` returns true if Vimium is detected, false otherwise. This detection is NOT 100% accurate.

```javascript
if (document.hasVimium())
  alert("Hey, you have Vimium!");
else
  alert("I don't detect Vimium, but it might still be there.");
 ```

`document.onDetectVimium` executes a function when Vimium is detected. It basically calls `document.hasVimium()` once a second until it's true, and then executes your function.

```javascript
document.onDetectVimium(function() {
  alert("I just saw Vimium!");
});
```

You can also pass it a scope, and the callback will be executed in that scope.

```javascript
var zooey = { name: "Zooey" };
document.onDetectVimium(function() {
  alert(this.name + " has Vimium!");
}, zooey);
// alerts "Zooey has Vimium!" when Vimium is detected
```

See LICENSE for license info.
