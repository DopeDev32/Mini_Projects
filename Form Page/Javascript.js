document.getElementById('surveyForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for submitting the survey!');
            this.reset();
        });
        const value = document.querySelector("#value");
        const input = document.querySelector("#pi_input");
        value.textContent = input.value;
        input.addEventListener("input", (event) => {
        value.textContent = event.target.value;
});

