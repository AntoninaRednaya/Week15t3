function changeTheme() {
    switch (document.getElementById("theme").value) {
        case "grey": {
            document.body.classList.remove('whiteTheme');
            document.body.classList.remove('blueTheme');
            document.body.classList.add('greyTheme');
            break;
        }
        case "blue": {
            document.body.classList.remove('whiteTheme');
            document.body.classList.remove('greyTheme');
            document.body.classList.add('blueTheme');
            break;
        }
        case "white": {
            document.body.classList.remove('blueTheme');
            document.body.classList.remove('greyTheme');
            document.body.classList.add('whiteTheme');
            break;
        }
    }
}
