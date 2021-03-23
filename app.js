  //______________________________________________________________________
  //  1. closure{}
  //  2. UI VARIABLES
  //    i.  | query selectors, class and id
  //    ii. | add event listener & callback function
  //    iii.| callback functions
  //    iv. | control functions
  //______________________________________________________________________
  //  3. DATA AUTHENTIFICATIONS AND STORAGE
  //    i.  | data authentifiction
  //    ii. | data storage
  //    iii.| data fetch
  //______________________________________________________________________


  {
    function codeants() {
      // **** CREATE AND ADD NAVBAR ************************************* 
      function addNavBar() {
        const navBar = document.querySelector('.navbar');
        // create element to set items in DOM...........
        const element = document.createElement('div');
        element.classList.add("container", "flex");
        element.innerHTML = `<span class="LogoCon">
    <img src="./img/Small logo.jpeg"></span>
    <nav>
      <ul>
        <li class="homeNav">Home</li>
        <li class="featureNav">Features</li>
        <li class="aboutNav">About</li>
        <li class="projectNav">Projects</li>
        <li class="docNav">Docs</li>
      </ul>
    </nav>`;
        // select the created element for events..........
        const homeNav = element.querySelector('.homeNav');
        const featureNav = element.querySelector('.featureNav');
        const aboutNav = element.querySelector('.aboutNav');
        const projectNav = element.querySelector('.projectNav');
        const docNav = element.querySelector('.docNav');
        // add event listener to the created element..........
        homeNav.addEventListener('click', currentPage);
        featureNav.addEventListener('click', currentPage);
        aboutNav.addEventListener('click', currentPage);
        projectNav.addEventListener('click', currentPage);
        docNav.addEventListener('click', currentPage);
        // append child to the element in DOM......
        navBar.appendChild(element);

      }

      // *** HIDE, DISPLAY AND FOCUS CURRENT PAGE*************************************
      const homePage = document.querySelector('.home-page');
      const featurePage = document.querySelector('.feature-page');
      const aboutPage = document.querySelector('.about-page');
      const projectPage = document.querySelector('.project-page');
      const docPage = document.querySelector('.doc-page');
      // hide all page by default except home page
      const hideAllPage = () => {
        featurePage.classList.add('hidden');
        aboutPage.classList.add('hidden');
        projectPage.classList.add('hidden');
        docPage.classList.add('hidden');
      }

      // remove focus on inactive page by default
      const removeFocus = () => {
        const homeNav = document.querySelector('.homeNav');
        const featureNav = document.querySelector('.featureNav');
        const aboutNav = document.querySelector('.aboutNav');
        const projectNav = document.querySelector('.projectNav');
        const docNav = document.querySelector('.docNav');
        homeNav.classList.remove('active');
        featureNav.classList.remove('active');
        aboutNav.classList.remove('active');
        projectNav.classList.remove('active');
        docNav.classList.remove('active');
      }

      // targle the actice page 
      function currentPage(e) {
        homePage.classList.add('hidden');
        // target the current event
        const clickedNav = e.currentTarget.innerHTML;
        // add focus in current event
        const addFocus = () => e.currentTarget.classList.add('active');
        // call the default functions
        const check = () => {
          hideAllPage();
          window.scrollBy(0, 0);
          removeFocus();
          addFocus();
        }

        if (clickedNav === 'Features') {
          check();
          featurePage.classList.remove('hidden');
        } else if (clickedNav === 'About') {
          check();
          aboutPage.classList.remove('hidden');
        } else if (clickedNav === 'Projects') {
          check();
          projectPage.classList.remove('hidden');
        } else if (clickedNav === 'Docs') {
          check();
          docPage.classList.remove('hidden');
        } else {
          check();
          const homeNav = document.querySelector('.homeNav');

          homePage.classList.remove('hidden');
          homeNav.classList.add('active');
        }
      }

      // **** CREATE AND ADD FOOTER ************************************* 
      function addFooter() {
        const footer = document.querySelector('.footer');
        const footerDiv = document.createElement('div');
        const year = new Date().getFullYear();
        //  add class on the created elements..........
        //  create a footer html.........................
        footerDiv.innerHTML = `<div class = "social flex">
    <h4>Contact via</h4>
    <a href="https://wa.me/qr/CRRV7B262EZZG1"> 
      <i class = "fab fa-whatsapp fa-2x"> </i>
    
    <a href="https://m.facebook.com/story.php?story_fbid=1645107355663498&id=100004927487683"> 
      <i class = "fab fa-facebook fa-2x"> </i></a>
    
    <a href="https://www.instagram.com/p/CEVmY8pBwAr/?igshid=fsb61oelo46d"> 
      <i class = "fab fa-instagram fa-2x"></i></a>
    
    <a href="https://twitter.com/ThisInspiresUs/status/1292526091438043142?s=19"> 
      <i class = "fab fa-twitter fa-2x"> </i></a>
    
    <a href = "https://github.com/MrVal042"> 
      <i class = "fab fa-github fa-2x"> </i></a>
    
    <a href = "mailto:codeants.js@gmail.com?&subject=Mail from codeants Website&body=Hi Code ants team..."> 
      <i class = "fab fa-mail fa-2x"></i></a>
    
    </div>
    <hr>

    <div class="flex">
      <p>&copy; ${year} Code Ants. all rights reserved.</p>
    </div>`;
        // append child element to the parant element........
        footer.appendChild(footerDiv);
      }

      addNavBar();
      hideAllPage();
      addFooter()

    }
    codeants();
  }