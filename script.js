const resetBtn = document.querySelector('.btn__reset');
function resetAnimation(el) {
  el.style.animation = 'none';
  el.offsetHeight;
  el.style.animation = null;
}
resetBtn.addEventListener('click', () => {
  var spinner = document.querySelector('.pie.spinner');
  var filler = document.querySelector('.pie.filler');
  var mask = document.querySelector('.wrapper .mask');
  var elems = [spinner, filler, mask];
  elems.forEach(elem => {
    resetAnimation(elem);
  })
})