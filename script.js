const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

const lenis = new Lenis()

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

requestAnimationFrame(raf)

const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars'})

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 120%',
            end: 'top 50%',
            scrub: true,
        },
        scaleY: 0,
        y: -20,
        transformOrigin: 'top',
        opacity: 0.2,
        stagger: 0.1
    })
})


document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

const elasticList = document.querySelectorAll('.elastic');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const width = window.innerWidth;

  const percentage = (mouseX / width);

  const fontVariation = `'wght' ${Math.round(percentage * 800)}`;

  elasticList.forEach(elastic => {
    elastic.style.fontVariationSettings = fontVariation;
  });
});



function randomType(element, characters, duration, sequential = false) {
    let originalText = element.innerText;
    let textArray = originalText.split('');
    let charactersArray = characters.split('');
    let startTime = new Date().getTime();
    let interval;

    if (sequential) {
        let currentIndex = 0;
        interval = setInterval(function() {
            textArray[currentIndex] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
            element.innerText = textArray.join('');
            currentIndex++;
            if (currentIndex === textArray.length) {
                currentIndex = 0;
            }
            if (new Date().getTime() - startTime >= duration) {
                clearInterval(interval);
                element.innerText = originalText;
            }
        }, 20);
    } else {
        interval = setInterval(function() {
            for (let i = 0; i < textArray.length; i++) {
                textArray[i] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
            }
            element.innerText = textArray.join('');
            if (new Date().getTime() - startTime >= duration) {
                clearInterval(interval);
                element.innerText = originalText;
            }
        }, 0);
    }
}

let p = document.querySelector('.random-type');

let originalText = p.innerText;


const texts = ['Fotógrafa', 'Diseñadora'];
let currentIndex = 0;

function updateText() {
    const textElement = document.querySelector('.random-type');
    
    textElement.textContent = texts[currentIndex];

    randomType(textElement, '01', 500, true);

    currentIndex = (currentIndex + 1) % texts.length;
}

updateText();

setInterval(updateText, 2000);

