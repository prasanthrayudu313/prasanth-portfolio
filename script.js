function copyEmail() {
    navigator.clipboard.writeText("rprasanth2024@gmail.com").then(() => {
        alert("Email copied to clipboard!");
    });
}

function copyPhone() {
    navigator.clipboard.writeText("(408)396-1546").then(() => {
        alert("Phone number copied to clipboard!");
    });
}