const hamburger = document.getElementById('hamburger');
const hamburgerspan = document.getElementsByClassName("hamburger_span")
const navLinks = document.getElementById('nav');
const body = document.getElementById('body');
const btnOne = document.getElementById('log-in');
const btnTwo = document.getElementById('person');

        
        document.onclick = function(e){
            if(e.target.id !== 'nav' && e.target.id !=='hamburger' && e.target.className !=="hamburger_span")
            {
                hamburger.classList.remove('open')
                navLinks.classList.remove('active')
                body.classList.remove("fixed-class")
                btnOne.classList.remove('active')
                btnTwo.classList.remove('active')
            }
        }
        
        hamburger.onclick = function(){
            hamburger.classList.toggle('open')
            navLinks.classList.toggle('active')
            body.classList.toggle("fixed-class")
            btnOne.classList.toggle('active')
            btnTwo.classList.toggle('active')
        }