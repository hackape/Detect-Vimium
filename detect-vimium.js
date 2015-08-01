function hasVimium() {
  return document.getElementsByClassName('vimiumReset').length > 0;
}

if (typeof module !== 'undefined') {
  module.exports = hasVimium;
}
