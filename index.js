const genius = $

let tab = ["Message 1", "Message 2", "Message 3"]

document.querySelector("#button").onclick = () => {

    document.querySelector("#contenu").innerHTML = tab.map(item =>
        `<p>${item}<p/>`).join('')

}
document.querySelector("#inputchat").oninput = (e) => {
    console.log(this.value);
    document.querySelector("#contenuchat").innerHTML = `<p>${e.target.value}<p/>`

}

genius.event("#color", "click", (e) => {

    if (!window.EyeDropper) {
        document.querySelector("#couleur").textContent =
            "Your browser does not support the EyeDropper API";
        return;
    }
    const eyeDropper = new EyeDropper();
    eyeDropper
        .open()
        .then((result) => {
            let couleur = result.sRGBHex;
            document.body.style.backgroundColor = couleur
            document.querySelector("#couleur").textContent = ` ${couleur}`
            navigator.clipboard.writeText(couleur).then(function () {
                console.log('Async: Copying to clipboard was successful!');
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
            });


        })
        .catch((e) => {

        })



})

genius.event("#file", "mousedown", (e) => {
    window.showOpenFilePicker()
        .then((result => {
            console.log(result);

        }));


})

if ('geolocation' in navigator) {
    console.log('geo ok');
    navigator.geolocation.watchPosition((position) => {
        console.log(position);
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
      open(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`)

      });
    /* geolocation is available */
  } else {
    console.log('geo error');
    /* geolocation IS NOT available */
  }

  //  navigator.mediaDevices.getDisplayMedia(); CAPTURE ECRAN