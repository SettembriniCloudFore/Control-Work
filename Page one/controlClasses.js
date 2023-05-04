'use strict'

class Tabs {
    constructor() {
      this.myTabsParent = document.querySelector('.tab__wrapper');
      this.mySlides = document.querySelectorAll('.display__content__area');
      this.myTabs = document.querySelectorAll('.myTab');
      this.currentIndex = 0;
      
      this.hideSlidesContent();
      this.showSlidesContent();
  
      this.myTabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('myTab')) {
          this.myTabs.forEach((item, index) => {
            if (target == item) {
              this.hideSlidesContent();
              this.showSlidesContent(index);
            }
          })
        }
      })
    }
  
    hideSlidesContent() {
      this.mySlides.forEach(item => {
        item.style.display = 'none';
      });
      
      this.myTabs.forEach(item => {
        item.classList.remove('is__active');
      });
    }
  
    showSlidesContent(index = 0) {
      this.mySlides[index].style.display = 'block';
      this.myTabs[index].classList.add('is__active');
      this.currentIndex = index;
    }
  }
  
  window.addEventListener('DOMContentLoaded', () => {
 const tabs = new Tabs()
  });