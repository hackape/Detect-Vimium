Detect the Vimium Chrome extension
==================================

Detect whether the [Vimium Chrome extension](http://vimium.github.io/) is installed. Tested on Vimium __v1.59__. As for an official solution to Vimium detection, keep an eye on [Vimium issue#2399](https://github.com/philc/vimium/issues/2399)

`hasVimium` returns true if Vimium is detected, false otherwise. This detection is not 100% accurate.

```javascript
if (hasVimium()) {
  alert("Hey, you have Vimium!");
} else {
  alert("I don't detect Vimium, but it might still be there.");
}
```
