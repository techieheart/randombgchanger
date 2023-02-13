window.onload = ()=>{
    main();
}

function main(){
    const root = document.getElementById("root");
    const btn = document.getElementById("change-btn");
    const heading = document.querySelector(".heading");

    btn.addEventListener('click', ()=>{
        color = generateRGBColor();
        root.style.backgroundColor = color;
        heading.style.color = color;
    })

}

function generateRGBColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}