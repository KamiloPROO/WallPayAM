const copyToClipboard = (element) => {
    const $tempInput = $("<input>");

    $("body").append($tempInput);
    $tempInput.val($(element).text()).select();
    document.execCommand("copy");
    $tempInput.remove();

    tooltipFunction();
};

const tooltipFunction = () => {  
    const tooltip = document.getElementById("tooltip");

    tooltip.classList.add('active');
    setTimeout(() => {
       tooltip.classList.remove('active');
    }, 1500);
}