const tabOne = document.getElementById('t1');
const tabTwo = document.getElementById('t2');
const tabThree = document.getElementById('t3');
const tabFourth = document.getElementById('t4');
const textTabOne = document.getElementById('text1');
const textTabTwo = document.getElementById('text2');
const textTabThree = document.getElementById('text3');
const textTabFourth = document.getElementById('text4');

const tabCollection = document.querySelectorAll('.tabs .item');
const tabs = document.getElementById('tabs');

const toggleClass = (el, className) => el.classList.toggle(className);
const removeClass = (el, className) => el.classList.remove(className);
const addClass = (el, className) => el.classList.add(className);

const changeTabV2 = (className, ...elements) => {
  for (let i = 0; i <= elements.length; i++) {
      console.log(elements[i].classList);
      if (!elements[i].classList.value.includes(className) ) {
          addClass(elements[i], className);
      }

      removeClass(elements[i], className);
  }
};

const changeTab = (actualEl, className , ...otherElements) => {
    addClass(actualEl, className);
    otherElements.forEach(element => removeClass(element, className));
};

const changeContent = (actualEl, className, ...otherElements) => {
    removeClass(actualEl, className);
    otherElements.forEach(element => addClass(element, className));
};

tabOne.addEventListener('click', (e) => {
    if (tabOne.classList.value.includes('active')) {
        console.log(tabOne.classList.value.includes('active'));
        return;
    }
    console.log(e.target);
    // changeTabV2('active', tabOne, tabTwo, tabThree, tabFourth);
    changeTab(tabOne, 'active', tabTwo, tabThree, tabFourth);
    changeContent(textTabOne, 'd-none', textTabTwo, textTabThree, textTabFourth);
});

tabTwo.addEventListener('click', () => {
    if (tabTwo.classList.value.includes('active')) {
        console.log('tabTwo', tabTwo.classList.value.includes('active'));
        return;
    }
    changeTab(tabTwo, 'active', tabOne, tabThree, tabFourth);
    changeContent(textTabTwo, 'd-none', textTabOne, textTabThree, textTabFourth);
});

tabThree.addEventListener('click', () => {
    if (tabThree.classList.value.includes('active')) {
        console.log('tabThree', tabThree.classList.value.includes('active'));
        return;
    }
    changeTab(tabThree, 'active', tabOne, tabTwo, tabFourth);
    changeContent(textTabThree, 'd-none', textTabOne, textTabTwo, textTabFourth);
});

tabFourth.addEventListener('click', () => {
    if (tabFourth.classList.value.includes('active')) {
        console.log('tabFourth', tabFourth.classList.value.includes('active'));
        return;
    }
    changeTab(tabFourth, 'active', tabOne, tabTwo, tabThree);
    changeContent(textTabFourth, 'd-none', textTabOne, textTabTwo, textTabThree);
});


//
// const isActive = tag => {
//     if (tag) {
//         tag.classList.remove('active')
//     }
//
//     // selectedTag = tag;
//
//     tag.classList.add('active');
// };
//
// tabs.addEventListener('click', event => {
//     console.log(event.target);
//     let target = event.target;
//     console.log(target.className);
//
//     // if (target.classList.contains('active') ) {
//     //     console.log(target.classList.value);
//     //     target.classList.remove('active')
//     // };
//
//     // if (target.classList.contains('active')) {
//     //     target.classList.remove('active');
//     // }
//     //
//     // target.classList.add('active')
//
//     // target.classList.add('active');
//
//     if (target.classList.contains('active')) {
//         console.log(target.classList.contains('active'));
//         target.classList.remove('active')
//     } else if (!target.classList.contains('active')) {
//         console.log(target.classList.contains('active'));
//         target.classList.add('active');
//     }
//
// });
