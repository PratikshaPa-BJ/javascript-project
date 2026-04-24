const text = document.querySelector("#text");
    const btn = document.querySelector("#btn");

    const changeText = function () {
      text.innerHTML = "  Welcome To Our World!!";
    };

    const changeMe = setTimeout(changeText, 4000);

    btn.addEventListener('click', function(){
        clearTimeout(changeMe);
        text.innerHTML += " Change STopped! "
    })