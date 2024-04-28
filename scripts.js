    const div = document.querySelector(".about-me");
    const description = "Jestem Technikiem Informatykiem, a także przyszłym Front-End Developerem chcącym rozwijać swoje umiejętności."

    function typewriting(element, text, i = 0){
        if(i === 0){
            element.textContent = "";
        }
        element.textContent += text[i];
        if(i === text.length - 1){
            return;
        }
        
        setTimeout(() => {typewriting(element, text, i + 1);},50)
    }

    let counter = 0;
    function setWidth(element){
        const percentValues = ["70%", "90%", "85%", "60%", "20%", "30%"]
        if(counter == percentValues.length) counter = 0;
        element.style.width = percentValues[counter]
        counter++;
    }

    function addText(element){
        const percentValues = ["B2", "Bardzo dobry", "Bardzo dobry", "Dobry", "Początkujący", "Początkujący"]
        if(counter == percentValues.length) counter = 0;
        element.textContent = percentValues[counter]
        counter++;
    }


    const showPercentage = () => {
        const percentage = Array.from(document.getElementsByClassName("percentage"))
        setTimeout(()=> percentage.forEach(setWidth),200)
    }

    const showPercentageDescription = () => {
        const percentage = Array.from(document.getElementsByClassName("percentage"))
        setInterval(()=> percentage.forEach(addText),1000)
    }

    
    typewriting(div,description);
    
    window.onload = showPercentage();
    window.onload = showPercentageDescription();