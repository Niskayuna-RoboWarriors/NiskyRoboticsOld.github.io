const theme = window.localStorage.getItem("theme");
if (theme == null)
{
    window.localStorage.setItem("theme", "light");
}
else if (theme == "dark")
{
    lightClick();
}
function darkClick()
{
    $(".footer").css("background-color", "#EDF2F4");
    $("body").css("background-color", "#EDF2F4");
    $(".footer-line").css("stroke", "#2B2D42");
    $("#copyright").css("color", "#2B2D42");
    $(".mode-dark").attr("onclick", "lightClick();");
    $(".mode-dark").attr("class", "mode-light col-lg-6");
    $("h2").css("color", "#2B2D42");
    $("h3").css("color", "#2B2D42");
    $("h4").css("color", "#2B2D42");
    $("p").css("color", "#2B2D42");
    window.localStorage.setItem("theme", "light");
}
function lightClick()
{
    $(".footer").css("background-color", "#303035");
    $("body").css("background-color", "#303035");
    $(".footer-line").css("stroke", "#EDF2F4");
    $("#copyright").css("color", "#EDF2F4");
    $(".mode-light").attr("onclick", "darkClick();");
    $(".mode-light").attr("class", "mode-dark col-lg-6");
    $("h2").css("color", "#EDF2F4");
    $("h3").css("color", "#EDF2F4");
    $("h4").css("color", "#EDF2F4");
    $("p").css("color", "#EDF2F4");
    window.localStorage.setItem("theme", "dark");
}
document.getElementById("copyright").innerText += ` ${new Date().getFullYear()}`;