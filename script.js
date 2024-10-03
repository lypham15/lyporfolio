function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const timeline = document.querySelector('.timeline');
timeline.classList.remove('timeline-transition');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const timeline = entry.target.querySelector('.timeline');
  
      if (entry.isIntersecting) {
        timeline.classList.add('timeline-animation');
  	  return; 
      }

      timeline.classList.remove('timeline-animation');
    });
  });

  observer.observe(document.querySelector('.experienceWrapper'));


// const experienceContainer = document.querySelector('.experienceContainer');
// experienceContainer.classList.remove('experienceContainer-transition');

// const observerSecond = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const experienceContainer = entry.target.querySelector('.experienceContainer');
  
//       if (entry.isIntersecting) {
//         experienceContainer.classList.add('experienceContainer-animation');
//   	  return; 
//       }

//       experienceContainer.classList.remove('experienceContainer-animation');
//     });
//   });

//   observerSecond.observe(document.querySelector('.experienceWrapper'));



const observerSecond = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('experienceContainer-animation');
      return;
    }

    entry.target.classList.remove('experienceContainer-animation');
  });
});

const experienceContainer = document.querySelectorAll('.experienceContainer');

experienceContainer.forEach((element) => observerSecond.observe(element));


// document.querySelectorAll('nav a').forEach(anchor => { 
//   anchor.addEventListener('click', function (e) { e.preventDefault(); 
//     const targetId = this.getAttribute('href'); document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' }); 
//   }); 
// });

// const sections = document.querySelectorAll('.sectionDetails'); 
// const options = { threshold: 0.2 }; 
// const observers = new IntersectionObserver((entries, observers) => { 
//   entries.forEach(entry => { 
//     if (entry.isIntersecting) { 
//       entry.target.classList.add('visible'); } }); }, options); 
//       sections.forEach(section => { 
//       observers.observes(sections); 
//       });



