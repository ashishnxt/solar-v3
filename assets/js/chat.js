  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Add 'show' class to messages when they are in the viewport
  window.addEventListener('scroll', () => {
    const messages = document.querySelectorAll('.message');
    messages.forEach((msg) => {
      if (isInViewport(msg)) {
        msg.classList.add('show');
      }
    });
  });