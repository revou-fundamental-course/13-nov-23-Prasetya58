const submitButton = document.getElementsByClassName('primary-button')
const nameInput = document.getElementById('name-input')
const emailInput = document.getElementById('email-input')
const nameOutput = document.getElementById('sign')
const imageSlider = document.getElementById('slider')

submitButton[0].addEventListener("click", function(event){
    if (nameInput.value.length === 0 || emailInput.value.length === 0) {
        alert("Nama atau email tidak boleh kosong")
    } else {
        nameOutput.innerText = "Selamat anda sudah berhasil masuk";

        setTimeout(function(){
            nameOutput.innerText = "";
        }, 5000)
    }

    if (nameInput.value.length === 0) {
        alert("Nama tidak boleh kosong")
    } else {
        nameOutput.innerText = "Selamat anda sudah berhasil masuk";

        setTimeout(function(){
            nameOutput.innerText = "";
        }, 5000)
    }

    if (emailInput.value.length === 0) {
        alert("email tidak boleh kosong")
    } else {
        nameOutput.innerText = "Selamat anda sudah berhasil masuk";

        setTimeout(function(){
            nameOutput.innerText = "";
        }, 5000)
    }
})
    var i = 0
    const images = [
        "assets/OIP.jpg",
        "assets/photo-of-fall-foliage-m.jpg",
        "assets/th.jpg"
    ]
    function bannerSlide(){
        i += 1
        if (i == images.length){
            i = 0
        }
        imageSlider.src = images[i]
    }
    setInterval(bannerSlide, 1500)
        


