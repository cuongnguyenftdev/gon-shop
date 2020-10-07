
//reload website
document.querySelector('header > .mid-header > img').addEventListener('click', () => {
    location.reload();
});
document.querySelector('header > .bottom-header > ul li:first-child').addEventListener('click', () => {
    location.reload();
});

//scroll to top or bottom of the website

var scrollBtn = document.querySelectorAll('.scroll i');
scrollBtn[0].addEventListener('click', () => {
    window.scrollTo(0,0);
})
scrollBtn[1].addEventListener('click', () => {
    window.scrollTo(0,document.body.scrollHeight);
})

// search feature

var search = document.querySelector('.mid-header .search');
search.addEventListener('click', function () {
    // var getText = document.querySelector('.mid-header input');
    // var value = getText.value;
    window.location.replace("https://www.google.com/search?sxsrf=ALeKk01M2BB_Lnj3D-NhBC4VqJ927eGmSw%3A1601993191152&ei=53l8X5juCNaJoATH74S4DQ&q=google+&oq=google+&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECCMQJzIECCMQJzIECAAQQzIFCAAQywEyBQgAEMsBMgUIABDLATICCAAyBQgAEMsBMgUIABDLAToECAAQR1C3BFi0B2CmCmgAcAJ4AIABgwGIAcECkgEDMi4xmAEAoAEBqgEHZ3dzLXdpesgBAsABAQ&sclient=psy-ab&ved=0ahUKEwjY_dzYkaDsAhXWBIgKHcc3AdcQ4dUDCA0&uact=5");
});

// categories

var category = document.querySelector('.mid-header .categories');
category.addEventListener('click', () => {
    var ul = document.querySelector('.mid-header .categories ul');
    ul.classList.toggle('is-show');
});

var ulCategory = document.querySelector('.mid-header .categories ul');
ulCategory.addEventListener('click', (event) => {
    var content = event.target.innerHTML;
    document.querySelector('.mid-header .categories span').innerHTML = content;
    category.classList.toggle('is-show');
})