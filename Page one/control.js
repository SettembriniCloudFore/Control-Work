'use strict'


window.addEventListener('DOMContentLoaded', ()=>{
    const parentTab = document.querySelector('.tab__wrapper'),
          myTabs = document.querySelectorAll('.myTab'),
          mySlides = document.querySelectorAll('.display__content__area'),
          backgroundDiv = document.querySelector('.flex__slider__container');



          function hideWindow(){
            myTabs.forEach(item=>{
                item.classList.remove('is__active')
            })
            mySlides.forEach(item=>{
                item.style.display ='none'
            })
          }

          function showWindow(index=0){
            myTabs[index].classList.add('is__active');
            mySlides[index].style.display ='block'
          }
          
      


          parentTab.addEventListener('click', (event)=>{
            const target = event.target;
            if(target && target.classList.contains('myTab')){
                myTabs.forEach((item,index)=>{
                    if(target==item){
                        hideWindow()
                        showWindow(index)
                        switch(index){
                            case 0:
                                return backgroundDiv.style.backgroundImage ='linear-gradient(to right, rgb(128, 0, 128, 0.2) 60%, transparent 40%)';
                            case 1:
                                return backgroundDiv.style.backgroundImage ='linear-gradient(to right, rgb(255, 0, 0, 0.2) 60%, transparent 40%)';
                            case 2:
                                return backgroundDiv.style.backgroundImage ='linear-gradient(to right, rgb(0, 128, 0, 0.3) 60%, transparent 40%)';
                            case 3:
                                return backgroundDiv.style.backgroundImage ='linear-gradient(to right, rgb(255, 215, 0, 0.25) 60%, transparent 40%)';
                            default:
                                return console.log('No background');
                            
                        }

                    }
                })
            }
          })



    
    class FoodCard{
        constructor(src,alt,text){
            this.src = src;
            this.alt = alt;
            this.text = text;
            this.parentSelector = document.querySelectorAll('.display__content__area');
            
        }

        render(i=0){
            const element = document.createElement('div');

            element.innerHTML = `  <img src=${this.src} 
            alt=${this.alt}  class="imging" >
            <div class="side__text">
                <p>${this.text} </p>
            </div>
            
             `

            this.parentSelector[i].append(element);
            
        }

    }

    const blub = new FoodCard(
        "https://i.ibb.co/R0d1TmV/bluberry-Sweet.jpg",
        "bluberry-Sweet",
        "I can't get enough of the blueberry pancakes! They're so fluffy and bursting with sweet blueberries. Definitely the highlight of my breakfast."
    ).render(0);
    const meat = new FoodCard(
        "https://i.ibb.co/HthtYdR/Savory-meat.jpg",
        "savory-meat",
        "The savory meat with veggies dish is a real showstopper. The meat is perfectly cooked and the vegetables are fresh and flavorful. It's a delicious and satisfying meal."
    ).render(1);
    const health = new FoodCard(
        "https://i.ibb.co/nQSyDXH/healthy-food-768x576.jpg",
        "health-food",
        "Who says healthy food has to be boring? I had so much fun experimenting with new recipes. Eating healthy doesn't have to be a chore!"
    ).render(2);

    const cookies = new FoodCard(
        "https://i.ibb.co/k8VW4K7/gorg.jpg",
        "cookies",
        "These cookies with blackberries are not only delicious, but also a work of art. The blackberries add a  burst of flavor, making them the perfect treat for any occasion."
    ).render(3);

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