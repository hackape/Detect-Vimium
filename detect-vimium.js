/*

Detect the Vimium Chrome extension
by Evan Hahn (evanhahn.com)

This adds two methods to the document object: hasVimium and onDetectVimium.

document.hasVimium returns true if Vimium is detected, false otherwise. This
detection is NOT 100% accurate.

    if (document.hasVimium())
      alert("Hey, you have Vimium!");
    else
      alert("I don't detect Vimium, but it might still be there.");

document.onDetectVimium executes a function when Vimium is detected. It
basically calls document.hasVimium() once a second until it's true, and then
executes your function.

    document.onDetectVimium(function() {
      alert("I just saw Vimium!");
    });

You can also pass it a scope, and the callback will be executed in that scope.

    var zooey = { name: "Zooey" };
    document.onDetectVimium(function() {
      alert(this.name + " has Vimium!");
    }, zooey);
    // alerts "Zooey has Vimium!" when Vimium is detected

This bit of code is licensed under the Unlicense (see bottom of file).

*/

;(function(doc) {

	// Do we have Vimium?
	// Hunt for an element with the vimiumReset class.
	doc.hasVimium = function() {
		return doc.getElementsByClassName('vimiumReset').length > 0;
	};

	// When Vimium is detected, execute the callback.
	doc.onDetectVimium = function(callback, scope) {

		// Default scope is window
		scope || (scope = window);

		// If we already have it, we're done
		if (doc.hasVimium()) {
			callback.call(scope);
		}

		// We don't already detect Vimium, so check for it once a second.
		else {
			var interval = setInterval(function() {
				if (doc.hasVimium()) {
					clearInterval(interval);
					callback.call(scope);
				}
			}, 1000);
		}

	};

})(document);

/*

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>

*/
