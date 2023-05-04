'use strict'


window.addEventListener('DOMContentLoaded', ()=>{
const myParentTab = document.querySelector('.tab__wrapper'),
      myTabs = document.querySelectorAll('.myTab'),
      mySlides = document.querySelectorAll('.display__content__area');


    function showWindows(index = 0){
        mySlides[index].style.display = 'block';
        myTabs[index].classList.add('is__active')
    }  

    function hideWindows(){
        mySlides.forEach(item=>{
            item.style.display = 'none'
        })

        myTabs.forEach(item =>{
            item.classList.remove('is__active')
        })
    }

    hideWindows()
    showWindows(0)

    myParentTab.addEventListener('click', (event)=>{
        const target = event.target;
        if(target && target.classList.contains('myTab')){
            myTabs.forEach((item,index)=>{
                if(target==item){
                    hideWindows()
                    showWindows(index)
                }
            })
        }
    })
    
    class FoodCard{
        constructor(src,alt,title,description,price){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.parentSelector = document.querySelectorAll('.display__content__area');
        }

        append(){
            const element = document.createElement('div');

            element.innerHTML = `
            
             `

            this.parentSelector.append(this.element)
        }


    }






})






























// const myTabsParent = document.querySelector(`.tab__wrapper`),
//       mySlides = document.querySelectorAll('.display__content__area'),
//       myTabs = document.querySelectorAll('.myTab');

// function hideSlidesContent(){
//          mySlides.forEach(item =>{
//             item.style.display = 'none'
//     })
//         myTabs.forEach(item =>{
//             item.classList.remove('.is__active')
//         })
//     }

//    function showSlidesContent(index=0){
//     mySlides[index].style.display = 'block'
//     myTabs[index].classList.add('is__active')
//    }
   
   
//    hideSlidesContent()
//    showSlidesContent(0);
   
//    myTabsParent.addEventListener('click', (event)=>{
//     const target = event.target;
//     if(target && target.classList.contains('myTab')){
//         myTabs.forEach((item, index)=>{
//             if(target == item){
//                 hideSlidesContent();
//                 showSlidesContent(index);
//             }
//         })
//     }
//    })