/* 
    Made By Aum Bhatt.
    
    The following code is Intellectual Property of Aum Bhatt.
    No changes can be brought without taking permission Aum Bhatt.

    Copyrighted By Aum Bhatt.
    All Rights Reserved. 
*/

var navBtn = document.querySelector('.nav-btn');
var navBtnImg = document.querySelector('.nav-btn-img');
var navMobile = document.querySelector('.nav-bar-mobile');
var navMobileLink = document.querySelector('.nav-bar-mobile-li');

var navState = 0;

navBtn.addEventListener('click', function(){

    console.log('nav clicked...');
        if(navState === 0){
            navMobile.style.display = "flex";
            navMobile.style.animationName = 'nav-bar-mobile-open';
            navMobileLink.style.animationName = 'slide-up';
            setTimeout(function(){
                navMobile.style.animationName = 'none';
                navMobileLink.style.animationName = 'none';
            }, 910);

            navBtnImg.src = 'images/Banner/Nav-Close-Btn.svg';
            navState = 1;
        }
        else{
            if(screen.width < 768){   
                navMobile.style.animationName = 'nav-bar-mobile-close';
                navMobileLink.style.animationName = 'slide-down';
                setTimeout(function(){
                    navMobile.style.display = "none";
                }, 500);
            }


            navBtnImg.src = 'images/Banner/Nav-Stairs-Btn.svg';
            navState = 0;
        }
});

/* 
    Made By Aum Bhatt.
    
    The following code is Intellectual Property of Aum Bhatt.
    No changes can be brought without taking permission Aum Bhatt.

    Copyrighted By Aum Bhatt.
    All Rights Reserved. 
*/