import * as Images from '../../../assets';

const companyImg = [
    {
        id: 1,
        imageUrl: `${Images.Make_mmb1}`,
        title: "Slide 1",
        description: "Description for slide 1"
    },
    {
        id: 2,
        imageUrl: `${Images.Make_mmb2}`,
        title: "Slide 2",
        description: "Description for slide 2"
    },
    {
        id: 3,
        imageUrl: `${Images.mmb_module1}`,
        title: "Slide 3",
        description: "Description for slide 3"
    },
    {
        id: 4,
        imageUrl: `${Images.mmb_module2}`,
        title: "Slide 4",
        description: "Description for slide 3"
    },
    {
        id: 5,
        imageUrl: `${Images.mmb_module3}`,
        title: "Slide 5",
        description: "Description for slide 3"
    },
    {
        id: 6,
        imageUrl: `${Images.mmb_module4}`,
        title: "Slide 5",
        description: "Description for slide 3"
    },
    {
        id: 7,
        imageUrl: `${Images.mmb_module5}`,
        title: "Slide 5",
        description: "Description for slide 3"
    },

]


const numItems = companyImg.length;
const style = document.createElement('style');
style.innerHTML = `
div.item:nth-of-type(n) {
--offset: calc(n + 1);
}

input:nth-of-type(n) {
grid-column: calc(n + 1) / calc(n + 2);
grid-row: 2 / 3;
}

input:nth-of-type(n):checked ~ main#carousel {
--position: calc(n + 1);
}
`.replace(/n/g, numItems);

document.head.appendChild(style);