const log = console.log;
const $ = document.querySelector.bind(document);
//Choose age range
$(".form-range").addEventListener("input", (e)=>{
    $(".ageInput").value = e.target.value;
});
//Show table when DOM loaded;
document.addEventListener("DOMContentLoaded", uiHandler.showPersons());

//# sourceMappingURL=index.d10b686b.js.map
