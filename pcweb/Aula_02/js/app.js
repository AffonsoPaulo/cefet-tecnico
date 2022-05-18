const banner = document.querySelector("#demo");
console.log(banner);
/* 
banner.onclick = () => {
    banner.innerHTML = "Mudando o contéudo";
} */
/* 
banner.onclick = changeContent;
function changeContent() {
        banner.innerHTML = "Mudando o conteúdo";
 } */
/* 
const changeContent = function() {
     banner.innerHTML = "Mudando o conteúdo";
}
banner.onclick = changeContent; */
/* 
banner.classList.add("title"); */
const changeContent = () => banner.innerHTML = "Mudando o texto";

const changeStyle = () => banner.classList.add("title");

banner.addEventListener("click", changeContent, changeStyle)
