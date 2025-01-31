const emailInput = document.getElementById("emailInput");
const submitBtn = document.querySelector(".submitBtn");
const errorMessage = document.querySelector(".errorMessage");
const formStart = document.querySelector(".formStart");
const successMessage = document.querySelector(".successMessage");

function verificarEmail(email) {
    const padrao = /@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|aol\.com|icloud\.com|mail\.com|zoho\.com|protonmail\.com)$/;
    return padrao.test(email);
}

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!verificarEmail(email)) {
        errorMessage.classList.remove("hidden");
        successMessage.classList.add("hidden");
    } else {
        errorMessage.classList.remove("hidden"); // Esconde a mensagem de erro (se estiver visível)
        formStart.classList.add("hidden"); // Esconde o formulário *apenas se o email for válido*
        successMessage.classList.remove("hidden");
    }
});