import gsap from 'gsap'

let searchForm = document.querySelector('.comp__search-form');
let inputGroup = document.querySelector('.comp__search-form .input-group');
let searchInput = document.querySelector('.comp__search-form .input-group .input-group-field');

let navigation = document.querySelector('.site--header .comp__navigation');
let navigationLsItem = document.getElementById('navLs').children;
let LangLs = document.getElementById('LangLs');
let ToggleSearch = document.getElementById('ToggleSearch');


export function searchAnimation(){

  let tweenSearch = TweenMax.fromTo(searchForm, 0.2, {
    display: 'none',
    y: 100,
    opacity: 0
  }, {
    display: 'flex',
    y: 0,
    opacity: 1,
    ease: Sine.easeInOut
  });

  let tweenInputGroup = TweenMax.fromTo(inputGroup, 0.2, {
    y: 30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    ease: Sine.easeInOut,
    onComplete: function(){
      searchInput.focus();
    }
  })


  let animationSearch = new TimelineMax()
  .add(tweenSearch)
  .add(tweenInputGroup)
  .pause();

  return {
    animation: animationSearch
  }

}


export function mobileMenuAnimation(){

  let tweenMenuBg = TweenMax.fromTo(navigation, 0.2, {
    opacity: 0,
    visibility: 'hidden'
  }, {
    opacity: 1,
    visibility: 'visible',
    ease: Sine.easeInOut,
  })

  let tweenMenuItem01 = TweenMax.staggerFromTo(navigationLsItem, 0.1, {
    opacity: 0,
    y: -20
  },{
    opacity: 1,
    y: 0
  },0.05)

  let tweenMenuItem02 = TweenMax.staggerFromTo([LangLs, ToggleSearch], 0.1, {
    opacity: 0,
    y: -20,
  },{
    opacity: 1,
    y: 0,
  },0.05)


  let animationMobileMenu = new TimelineMax()
  .add(tweenMenuBg)
  .add(tweenMenuItem01)
  .add(tweenMenuItem02)
  .pause();

  return {
    animation: animationMobileMenu
  }

}