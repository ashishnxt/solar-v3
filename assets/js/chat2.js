let animateMessages = true;

window.addEventListener('load', () => {
  const messages = document.querySelectorAll('.message');

  if (animateMessages) {
    messages.forEach((msg, index) => {
      setTimeout(() => {
        msg.classList.add('show');
      }, index * 1000);
    });
  } else {
    messages.forEach((msg) => {
      msg.classList.add('show');
    });
  }
});