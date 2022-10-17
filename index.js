let tab = ["Message 1", "Message 2", "Message 3"]
document.querySelector("#button").onclick = () => {
    console.log('yo');
    document.querySelector("#contenu").innerHTML = tab.map(item => 
        `<p>${item}<p/>`).join('')
    
}
document.querySelector("#inputchat").onkeyup = (e)=>{
console.log(e.target.value);
document.querySelector("#contenuchat").innerHTML = `<p>${e.target.value}<p/>`

}