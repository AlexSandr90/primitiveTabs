const tabOne = document.getElementById('t1');
const tabTwo = document.getElementById('t2');
const tabThree = document.getElementById('t3');
const tabFourth = document.getElementById('t4');
const textTabOne = document.getElementById('text1');
const textTabTwo = document.getElementById('text2');
const textTabThree = document.getElementById('text3');
const textTabFourth = document.getElementById('text4');

const toggleClass = (el, className) => el.classList.toggle(className);
const removeClass = (el, className) => el.classList.remove(className);
const addClass = (el, className) => el.classList.add(className);

tabOne.addEventListener('click', () => {
    if (tabOne.classList.value.includes('active')) {
        console.log(tabOne.classList.value.includes('active'));
        return;
    }

    addClass(tabOne, 'active');
    removeClass(tabTwo, 'active');
    removeClass(tabThree, 'active');
    removeClass(tabFourth, 'active');


    removeClass(textTabOne, 'd-none');
    addClass(textTabTwo, 'd-none');
    addClass(textTabThree, 'd-none');
    addClass(textTabFourth, 'd-none');
});

tabTwo.addEventListener('click', () => {
    if (tabTwo.classList.value.includes('active')) {
        console.log('tabTwo', tabTwo.classList.value.includes('active'));
        return;
    }

    removeClass(tabOne, 'active');
    addClass(tabTwo, 'active');
    removeClass(tabThree, 'active');
    removeClass(tabFourth, 'active');

    addClass(textTabOne, 'd-none');
    removeClass(textTabTwo, 'd-none');
    addClass(textTabThree, 'd-none');
    addClass(textTabFourth, 'd-none');
});

tabThree.addEventListener('click', () => {
    if (tabThree.classList.value.includes('active')) {
        console.log('tabThree', tabThree.classList.value.includes('active'));
        return;
    }

    removeClass(tabOne, 'active');
    removeClass(tabTwo, 'active');
    addClass(tabThree, 'active');
    removeClass(tabFourth, 'active');

    addClass(textTabOne, 'd-none');
    addClass(textTabTwo, 'd-none');
    removeClass(textTabThree, 'd-none');
    addClass(textTabFourth, 'd-none');
});

tabFourth.addEventListener('click', () => {
    if (tabFourth.classList.value.includes('active')) {
        console.log('tabFourth', tabFourth.classList.value.includes('active'));
        return;
    }

    removeClass(tabOne, 'active');
    removeClass(tabTwo, 'active');
    removeClass(tabThree, 'active');
    addClass(tabFourth, 'active');

    addClass(textTabOne, 'd-none');
    addClass(textTabTwo, 'd-none');
    addClass(textTabThree, 'd-none');
    removeClass(textTabFourth, 'd-none');
});
