const button = document.getElementById("js--menu");
const navigation = document.getElementById("js--navigation");
const body = document.getElementById("js--body");
const hamburger = button.querySelector('.hamburger');
const links = document.querySelectorAll('.mainNavigationListItem > a');

button.onclick = function () {
    const isVisible = navigation.style.visibility === "visible";
    navigation.style.visibility = isVisible ? "hidden" : "visible";
    navigation.style.opacity = isVisible ? 0 : 1;
    body.style.overflow = isVisible ? "auto" : "hidden";
    hamburger.classList.toggle("active");
};

links.forEach(link => {
    link.onclick = function (event) {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" }); 
        }

        navigation.style.visibility = "hidden";
        navigation.style.opacity = 0;
        body.style.overflow = "auto";
        hamburger.classList.remove("active");
    };
});
