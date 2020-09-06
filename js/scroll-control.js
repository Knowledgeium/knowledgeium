/* 
    Made By Aum Bhatt.
    
    The following code is Intellectual Property of Aum Bhatt.
    No changes can be brought without taking permission Aum Bhatt.

    Copyrighted By Aum Bhatt.
    All Rights Reserved. 
*/



/* ------ Note ------
    Top-right corner = 0px, 0px;

    deltaY -ve = up
    deltaY +ve = down

*/


var divArray = ['hero', 'about', 'testm', 'contact'];

var called = false;

window.addEventListener('wheel', function(event){
    if(called === false){
        called = true;
        if(event.deltaY < 0){
            scrollPage('up');
        }
        else if(event.deltaY > 0){
            scrollPage('down');
        }
        setTimeout(function(){
            called = false;
            /* console.log('Resetting to : ' + called); */
        }, 1000);
    }
});

var start, end;

window.addEventListener('touchstart', function(event){
    if(called === false){
        called = true;
        start = event.changedTouches[0].screenY;
        setTimeout(function(){
            called = false;
            /* console.log('Resetting to : ' + called); */
        }, 500);
    }
});

window.addEventListener('touchend', function(event){
    end = event.changedTouches[0].screenY;
    if(called === true){
        called = true;
        if(start < end){
            scrollPage('up');
        }
        else if(start > end){
            scrollPage('down');
        }
        
    }
});
var lastNum = 0;

var scrollCtr = 0, prev, lastMoment;
setTimeout(function(){
    document.querySelector(`.${divArray[scrollCtr]}`).style.transform = 'translateY(0%)';
    /* console.log(divArray[scrollCtr]); */
    prev = 0;
    ++scrollCtr;
    document.querySelector('.scrollIndicate').style.display = 'inherit';
},1200);


function scrollPage(dir){
    if(dir === 'up'){
        if(lastMoment === 'down'){
            --scrollCtr;
            /* console.log('Scroll Dir. Change : ' + scrollCtr); */
        }
        if(scrollCtr > 0){
            /* document.querySelector(`.${divArray[prev]}`).style.transform = 'translateY(0%)'; */
            document.querySelector(`.${divArray[scrollCtr]}`).style.transform = 'translateY(200%)';
            /* console.log(divArray[scrollCtr]); */
            /* prev = scrollCtr; */
            --scrollCtr;
        }
        /* if(scrollCtr === 0){
            ++scrollCtr;
        } */
    }
    else if(dir === 'down'){
        if(lastMoment === 'up'){
            ++scrollCtr;
            /* console.log('Scroll Dir. Change : ' + scrollCtr); */
        }
        /* document.querySelector(`.${divArray[prev]}`).style.transform = 'translateY(-200%)'; */
        if(document.querySelector(`.${divArray[scrollCtr]}`)){
            document.querySelector(`.${divArray[scrollCtr]}`).style.transform = 'translateY(0%)';
        }
        /* console.log(divArray[scrollCtr]); */
        /* prev = scrollCtr; */
        if(scrollCtr <= 3){
            ++scrollCtr;
        }
    }
    /* console.log(scrollCtr); */
    lastMoment = dir;
}
function navScroll(num){
    /* for(var i = num+1; i<divArray.length; ++i){
        if(document.querySelector(`.${divArray[i]}`)){
            document.querySelector(`.${divArray[i]}`).style.transform = 'translateY(200%)';
        }
    }


    document.querySelector(`.${divArray[num]}`).style.transform = 'translateY(0%)';
    navBtn.click();
    scrollCtr = num;
    ++scrollCtr; */
    if(lastNum > num){
        scrollCtr = 3;
        /* while(scrollCtr > num){
            scrollPage('up');
        } */
        for(var i = 3; i > num; --i){
            document.querySelector(`.${divArray[i]}`).style.transform = 'translateY(200%)';
        }
        scrollCtr = ++i;
    }
    else if(lastNum < num){
        /* scrollCtr = 0;
        while(scrollCtr <= num){
            scrollPage('down');
        } */
        for(var i = 0; i <= num; ++i){
            document.querySelector(`.${divArray[i]}`).style.transform = 'translateY(0%)';
        }
        scrollCtr = --i;
    }
    lastNum = num;
    /* console.log('navScroll active : '+scrollCtr); */
    setTimeout(navBtn.click(), 1200);
}



/* 
    Made By Aum Bhatt.
    
    The following code is Intellectual Property of Aum Bhatt.
    No changes can be brought without taking permission Aum Bhatt.

    Copyrighted By Aum Bhatt.
    All Rights Reserved. 
*/