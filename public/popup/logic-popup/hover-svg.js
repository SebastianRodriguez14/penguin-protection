

const $buttonSetting = document.getElementById("button-settings");
const $iconSetting = document.getElementById("icon-setting");

$buttonSetting.addEventListener("mouseenter", function() {
    $buttonSetting.style.borderColor = "#1D73E5";
    $buttonSetting.style.backgroundColor = "#47B5FF";

    
    $iconSetting.setAttribute("stroke", "#ecf7ff");

})

$buttonSetting.addEventListener("mouseleave", function() {
    $buttonSetting.style.borderColor = "#BCC6CD";
    $buttonSetting.style.backgroundColor = "#ecf7ff";
    $iconSetting.setAttribute("stroke", "#a3a9ad");
})

// $buttonSetting.onmouseout
$buttonSetting.addEventListener("mousedown", function() {
    $buttonSetting.style.backgroundColor = "#1F91DE";
})

$buttonSetting.addEventListener("mouseup", function() {
    $buttonSetting.style.backgroundColor = "#47B5FF";
})




