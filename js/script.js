/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services_modal"),
    modalBtns = document.querySelectorAll(".services_button"),
    modalClose = document.querySelectorAll(".services_modal_close");

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active_modal');
}
modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})
modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove("active_modal")
        })
    })
})








// This is For Loader Hide And Show Main...
setTimeout(function() {
    const loader = document.querySelector('.loader');
    const main = document.querySelector('.main');

    // Add transition for opacity
    loader.style.transition = 'opacity 0.5s ease';
    main.style.transition = 'opacity 0.5s ease';

    
    loader.style.opacity = 0;

    
    setTimeout(function() {
      loader.style.display = 'none';
      main.style.opacity = 1;
      main.style.display = 'block';
    }, 500); 
  }, 4500);



// This is For Loading Animation 
document.addEventListener("DOMContentLoaded", function() {
    const defaultWord = 'django';
    const words = ['python', 'c++', 'developer']; // Array of words
  
    const swipeContainer = document.getElementById('swipeContainer');
    let currentIndex = 0;
    let currentWordElement = null;
  
    // Function to initialize with default word
    function initializeDefaultWord() {
      const defaultWordElement = document.createElement('p'); // Create <p> element
      defaultWordElement.classList.add('swipe-text');
      defaultWordElement.textContent = defaultWord;
      swipeContainer.appendChild(defaultWordElement);
      currentWordElement = defaultWordElement;
  
      // After displaying default word, start showing next words
      setTimeout(showNextWords, 1500); // Delay before transitioning
    }
  
    // Function to show next words from array
    function showNextWords() {
      if (currentIndex < words.length) {
        const newWord = words[currentIndex];
        const newWordElement = document.createElement('p'); // Create <p> element
        newWordElement.classList.add('swipe-text');
        newWordElement.textContent = newWord;
  
        swipeContainer.removeChild(currentWordElement); // Remove current word
        swipeContainer.appendChild(newWordElement); // Add new word
        currentWordElement = newWordElement;
  
        currentIndex++;
        setTimeout(showNextWords, 1000); // Delay before transitioning
      }
    }
  
    // Start by initializing with default word
    initializeDefaultWord();
});
  










document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('in-view');
        return;
      }
      entry.target.classList.remove('in-view')
    })
  });

  const allAnimatedElements = document.querySelectorAll('.section-animate')
  allAnimatedElements.forEach((element) => observer.observe(element))


});
