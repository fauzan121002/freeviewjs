const box = document.getElementById("imgPreview");
const submitButton = document.getElementById("submitPhoto");
const photo = document.getElementById("photo");

submitButton.addEventListener("click",() => {
    
    let fakePath = photo.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(fakePath);
    reader.onload = (e) => {
        box.src = e.target.result;
    }
    //lupa lagi bjirr
    
});