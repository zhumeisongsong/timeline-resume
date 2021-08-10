const scrollAnimation = () => {
  [].forEach.call(document.getElementsByClassName('scroll'), (el: any) => {
    const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
    if (scrollTop + window.innerHeight >= el.offsetTop) {
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