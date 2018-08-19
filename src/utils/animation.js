const scrollAnimation = () => {
  [].forEach.call(document.getElementsByClassName('scroll'), (el) => {
    if (document.documentElement.scrollTop + window.innerHeight >= el.offsetTop) {
      el.className += " is-scoped";
    }
  })
};

export default () => {
  scrollAnimation();
  window.addEventListener('scroll', () => {
    scrollAnimation()
  });
};