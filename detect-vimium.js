function hasVimium () {
  try {
    var shadowRoot = document.querySelector('html > div').shadowRoot;
    return Boolean(shadowRoot.querySelector('style').textContent.match(/vimium/));
  } catch (e) {
    return false;
  }
}

if (typeof exports !== 'undefined') {
  exports.__esModule = true;
  exports.default = hasVimium;

  if (typeof module !== 'undefined') {
    module.exports = hasVimium;
  }
}
