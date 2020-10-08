
// import swal from 'sweetalert';

/* ----- reload website  ----- */
document.querySelector('header > .mid-header > img').addEventListener('click', () => {
    location.reload();
});
document.querySelector('header > .bottom-header > ul li:first-child').addEventListener('click', () => {
    location.reload();
});

/* ----- scroll to top or bottom of the website ----- */

var scrollBtn = document.querySelectorAll('.scroll i');
scrollBtn[0].addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
scrollBtn[1].addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
})

/* ----- search feature ----- */

var search = document.querySelector('.mid-header .search');
search.addEventListener('click', function () {
    // var getText = document.querySelector('.mid-header input');
    // var value = getText.value;
    window.location.replace("https://www.google.com/search?sxsrf=ALeKk01M2BB_Lnj3D-NhBC4VqJ927eGmSw%3A1601993191152&ei=53l8X5juCNaJoATH74S4DQ&q=google+&oq=google+&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECCMQJzIECCMQJzIECAAQQzIFCAAQywEyBQgAEMsBMgUIABDLATICCAAyBQgAEMsBMgUIABDLAToECAAQR1C3BFi0B2CmCmgAcAJ4AIABgwGIAcECkgEDMi4xmAEAoAEBqgEHZ3dzLXdpesgBAsABAQ&sclient=psy-ab&ved=0ahUKEwjY_dzYkaDsAhXWBIgKHcc3AdcQ4dUDCA0&uact=5");
});

/* ----- categories ----- */

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

/* -----  zoom the image when click to it ----- */

var getImg = document.querySelector('.products .product');
getImg.addEventListener('click', (event) => {
    var url = event.target.src;
    document.querySelector('.products .zoom img').src = url;
});


/* ----- feature add-to-cart ----- */

var amountBtn = document.querySelectorAll('.buy .amount button');
var amount = document.querySelector('.buy .amount span');

// amountBtn[0] is increase
amountBtn[0].addEventListener('click', () => {
    if (parseInt(amount.innerHTML) >= 5) {
        swal({
            text: 'Our shop does not have the quantity you need. Please feel free to contact us. Thank you!',
            icon: "warning",
        });
        return;
    }
    amount.innerHTML = parseInt(amount.innerHTML) + 1;
});

// amountBtn[1] is decrease
amountBtn[1].addEventListener('click', () => {
    if (amount.innerHTML != 0) {
        amount.innerHTML = (amount.innerHTML - 1);
    }
});