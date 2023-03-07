const rewards = [
    {
        id:"7b5wtl",
        name:"увидеться с друзьями",
        price:25
    },
    {
        id:"cb3zew",
        name:"выпить пивка",
        price:25
    },
    {
        id:"f6wd6i",
        name:"играть в комплюхтер",
        price:25
    },
    {
        id:"qwk4qd",
        name:"катнуть на борде",
        price:25
    }
]

if (!localStorage.getItem("rewards")) {
    localStorage.setItem("rewards", JSON.stringify(rewards));
}
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("rewards")));
        }, 2000);
    });

export default {
    fetchAll
};