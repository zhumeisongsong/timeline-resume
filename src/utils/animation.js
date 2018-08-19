export default (el) => {
  if (document.documentElement.scrollTop + window.innerHeight > el.offsetTop) {
    el.className += " is-scoped";
  }
};