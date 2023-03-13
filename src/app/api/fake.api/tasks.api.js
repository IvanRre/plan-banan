const tasks = [
    {
        id:"bys5p5",
        name:"пылесося",
        completed:false
        // price:25,
        // difficulty:"easy",
        // repeat:false
    },
    {
        id:"ele84n",
        name:"мыть посуду",
        completed:false
        // price:15,
        // difficulty:"easy",
        // repeat:false
    },
    {
        id:"5yqs97",
        name:"треня",
        completed:false
        // price:10,
        // difficulty:"easy",
        // repeat:false
    },
    {
        id:"dpfvyk",
        name:"допилить фэсткомпани",
        completed:false
        // price:100,
        // difficulty:"hard",
        // repeat:false
    },
    {
        id:"rddn4c",
        name:"медитация",
        completed:false
        // price:10,
        // difficulty:"easy",
        // repeat:false
    },
    {
        id:"t7b92z",
        name:"ремонькать тачку",
        completed:false
        // price:30,
        // difficulty:"normal",
        // repeat:false
    },
    {
        id:"olr2v0",
        name:"нитрахлицырин",
        completed:false
        // price:5,
        // difficulty:"easy",
        // repeat:false
    },
    {
        id:"5byfdh",
        name:"вернуть флешку",
        completed:false
        // price:5,
        // difficulty:"easy",
        // repeat:false
    }
]

if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("tasks")));
        }, 2000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("tasks")).find(
                    (task) => task.id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById
};