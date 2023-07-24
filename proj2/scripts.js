const red=document.querySelector(".red")
const cyan=document.querySelector(".cyan")
const violet=document.querySelector(".violet")
const orange=document.querySelector(".orange")
const pink=document.querySelector(".pink")

const center=document.querySelector(".center")

//console.log(window.getComputedStyle(red).background);
const getBGcolor=(SelectedElement)=>{
    return window.getComputedStyle(SelectedElement).backgroundColor;
}
// var Color=getBGcolor(pink);

// pink.addEventListener("mouseenter",()=>{
//     center.style.background = Color;
// });


const magicColorChanger=(element,Color)=>{
return element.addEventListener("mouseenter",()=>{
    center.style.background = Color;
});
}

magicColorChanger(red,getBGcolor(red));
magicColorChanger(cyan,getBGcolor(cyan));
magicColorChanger(violet,getBGcolor(violet));
magicColorChanger(pink,getBGcolor(pink));