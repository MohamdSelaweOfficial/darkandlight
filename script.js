// we imported checkbox as value to javascripte so we can control it
const toggleSwitch=document.querySelector('input[type="checkbox"]');
const nav=document.getElementById('nav');
const toggleIcon=document.getElementById('toggle-icon');
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');
const textBox=document.getElementById('textbox');



// dark mode
function darkMode(){
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor='rgb(255 255 255 / 50%)';
    console.log(toggleIcon.children);
    // how to change the sun to moon 
    toggleIcon.children[0].textContent='Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    // swiching the images or illstartions check the "id=about" in HTML file
    image1.src="img/undraw_add_color_re_buro_dark.svg";
    image2.src="img/undraw_maker_launch_re_rq81_dark.svg";
    image3.src="img/undraw_online_discussion_re_nn7e_dark.svg";
    image4.src="img/undraw_people_re_8spw_dark.svg";

}


function lightMode(){
    nav.style.backgroundColor='rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor='rgb(0 0 0 / 50%)';
    console.log(toggleIcon.children);
    // how to change the sun to moon 
    toggleIcon.children[0].textContent='light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    // swiching the images or illstartions check the "id=about" in HTML file
    image1.src="img/undraw_add_color_re_buro_light.svg";
    image2.src="img/undraw_maker_launch_re_rq81_light.svg";
    image3.src="img/undraw_online_discussion_re_nn7e_light.svg";
    image4.src="img/undraw_people_re_8spw_light.svg";

}
// switch theme 
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        //localStorage.setItem set and store theme and dark in user storage so we can use them later
        localStorage.setItem('theme','dark');
        darkMode();
    } else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightMode();
    }

}

// event listener
toggleSwitch.addEventListener('change',switchTheme);

//Check local storage for themes
const currentTheme=localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);
    if (currentTheme==='dark'){
        toggleSwitch.checked=true;
        // dark mode will change everything back to dark
        darkMode();
    }
}