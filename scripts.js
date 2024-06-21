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

    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('userForm');
        const emailInput = document.getElementById('name');
        const contentInput = document.getElementById('content');
    
        // Save form data to Local Storage
        function saveFormData(event) {
            event.preventDefault();
            localStorage.setItem('name', emailInput.value);
            localStorage.setItem('content', contentInput.value);
            alert('Wiadomość wysłana pomyślnie! (załadowano do localStorage)');
            form.reset()
        }
    
        form.addEventListener('submit', saveFormData);
    });
    
    typewriting(div,description);
    
    window.onload = showPercentage();
    window.onload = showPercentageDescription();