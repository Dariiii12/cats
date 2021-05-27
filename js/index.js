document.getElementById('scroll').addEventListener('click', onScroll);

function onScroll() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.getElementById('form-email').oninput = function () {
    if (validEmail(this.value) || this.value.length === 0) {
        document.getElementById('form-email-error').style.display = 'none';
        this.classList.remove('invalid');
    } else if (!validEmail(this.value)) {
        document.getElementById('form-email-error').style.display = 'initial';
        this.classList.add('invalid');
    }
}

function validEmail(email) {
    let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}