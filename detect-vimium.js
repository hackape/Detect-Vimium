function hasVimium () {
  const spy = document.createElement('div');
  try {
    spy.className = 'vimiumReset';
    spy.style = 'display: none';
    document.body.appendChild(spy);

    const isInstalled = window.getComputedStyle(spy).zIndex === '2140000000';
    document.body.removeChild(spy);
    return isInstalled
  } catch (err) {
    document.body.removeChild(spy);
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
