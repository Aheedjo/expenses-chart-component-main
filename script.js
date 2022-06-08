const bars_container_div = document.querySelector(".bars_container")
const array = [{
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]

const loadContent = () => {
    bars_container_div.innerHTML += array.map((item, index) => {
        return `
        <div class="bar_div">
            <div class="bar" id="bar_${index}"></div>
            <p>${item.day}</p>
            <div class="amount">$${item.amount}</div>
        </div>  
        `
    }).join("")
}

window.addEventListener("DOMContentLoaded", loadContent)