function typeWriter() {
    const text = [ "ChristianCoin is designed to bring faith and finance together." ,
                   "We aim to provide a secure and ethical financial system rooted in Christian values.", 
                   "Join us on this divine journey to create a better world."];
    
    let wordCount = 0;
    let letterCount = 0;

    let currentText = "";
    let currentWord = "";

    let timeOut = 400;

    let isDeleting = false;

    function type() {
        if(wordCount == text.length){
            wordCount = 0;
        }
        currentWord = text[wordCount];

        if(isDeleting){
            currentText = currentWord.slice(0, --letterCount);
        } else {
            currentText = currentWord.slice(0, ++letterCount);
        }

        document.querySelector('.typewrite').textContent = currentText;
        timeOut = isDeleting ? 35 : 100;
                        //writing : deleting

        if(!isDeleting && currentText.length === currentWord.length){
            timeOut = 1000; //pause after showing full text
            isDeleting = true;
        } else if (isDeleting && currentText.length === 0){
            timeOut = 300; //pause after deleting full text
            isDeleting = false;
            wordCount++;
        }
        setTimeout(type,timeOut);
    }
    type();

}
typeWriter();     

window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})