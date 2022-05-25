setTimeout(function () {
  fetch('/index.html').then(() => {
    document.querySelector('form').innerHTML =
      document.querySelector('form').innerHTML
  })
}, 10)
