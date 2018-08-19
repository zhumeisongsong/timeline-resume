const scrollAnimation = () => {
  [].forEach.call(document.getElementsByClassName('scroll'), (el) => {
    if (document.documentElement.scrollTop + window.innerHeight >= el.offsetTop) {
      if (el.className.indexOf('is-scoped') === -1) {
        el.className += " is-scoped";
      }
    }
  })
};

export default () => {
  scrollAnimation();
  window.addEventListener('scroll', () => {
    scrollAnimation()
  });
};