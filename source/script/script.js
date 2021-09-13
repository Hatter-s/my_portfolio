// MAKE PROJECT ITEM MOVE WHEN PROJECT ITEM TITLE MOUSE ON
const projectItem = document.querySelectorAll('.project-item'); //make array has 3 element 0 -> 2
const projectItemTitle = document.querySelectorAll('.project-item-title'); //make array has 3 element 0 -> 2
let itemTitleIndex = 0;
const mouseOverProjectItemTitle0 = () => {
    projectItem[0].style.transform = 'translate(-0.5%, -0.5%)';
}
const mouseOverProjectItemTitle1 = () => {
    projectItem[1].style.transform = 'translate(-0.5%, -0.5%)';
}
const mouseOverProjectItemTitle2 = () => {
    projectItem[2].style.transform = 'translate(-0.5%, -0.5%)';
}
const mouseOutProjectItemTitle0 = () => {
    projectItem[0].style.transform = 'translate(0, 0)';
}
const mouseOutProjectItemTitle1 = () => {
    projectItem[1].style.transform = 'translate(0, 0)';
}
const mouseOutProjectItemTitle2 = () => {
    projectItem[2].style.transform = 'translate(0, 0)';
}

console.log(projectItemTitle[0].parentNode)
projectItemTitle[0].onmouseover = mouseOverProjectItemTitle0;
projectItemTitle[1].onmouseover = mouseOverProjectItemTitle1;
projectItemTitle[2].onmouseover = mouseOverProjectItemTitle2;
projectItemTitle[0].onmouseout = mouseOutProjectItemTitle0;
projectItemTitle[1].onmouseout = mouseOutProjectItemTitle1;
projectItemTitle[2].onmouseout = mouseOutProjectItemTitle2;
