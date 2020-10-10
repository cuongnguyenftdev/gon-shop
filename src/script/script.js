
/* ----- reload website  ----- */
document.querySelector('header > .mid-header > img').addEventListener('click', () => {
    location.reload();
});
document.querySelector('header > .bottom-header > ul li:first-child').addEventListener('click', () => {
    location.reload();
});

/* ----- scroll to top or bottom of the website ----- */

// scroll to top
var scrollBtn = document.querySelectorAll('.scroll i');
scrollBtn[0].addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
// scroll to bottom
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
    ul.classList.toggle('is-show'); // show category list
});

var ulCategory = document.querySelector('.mid-header .categories ul');
ulCategory.addEventListener('click', (event) => {
    var content = event.target.innerHTML;
    document.querySelector('.mid-header .categories span').innerHTML = content; // show the user's choice
    category.classList.toggle('is-show'); // close category list
})

/* -----  zoom the image when click to it ----- */

var getImg = document.querySelector('.products .product');
getImg.addEventListener('click', (event) => {
    var url = event.target.src;
    document.querySelector('.products .zoom img').src = url;
    // set the target div is current
    document.querySelector('.products .product div.current').classList.remove('current');
    event.target.parentElement.classList.toggle('current');
});



/* ----- feature add-to-cart ----- */

var amountBtn = document.querySelectorAll('.buy .amount button'); // get two button increase and decrease
var amount = document.querySelector('.buy .amount span');   // the amount that the user choice

// amountBtn[0] is increase
amountBtn[0].addEventListener('click', () => {
    if (parseInt(amount.innerHTML) >= 5) { // if the user chooses more than the remaining amount, a notification will be sent
        swal({
            text: 'Our shop does not have the quantity you need. Please feel free to contact us. Thank you!',
            icon: "info",
        });
        return;
    }
    amount.innerHTML = parseInt(amount.innerHTML) + 1;
});

// amountBtn[1] is decrease
amountBtn[1].addEventListener('click', () => {
    if (amount.innerHTML > 1) {     // only active when amount is greater than 1
        amount.innerHTML = (amount.innerHTML - 1);
    }
});

// add-to-cart button

var addToCartBtn = document.querySelector('.buy .buy-btn'); // add to cart button

addToCartBtn.addEventListener('click', () => {
    //check out of stock
    if (document.querySelector('.product .current > div').classList.contains('out-of-stock')) {
        swal({
            text: "Sorry. Out of stock :(",
        })
        return;
    }
    // set value of the cart
    var value = document.querySelector('.price span').innerHTML.split('$');
    var currentValue = document.querySelector('.cart span').innerHTML.split("$");
    document.querySelector('.cart span').innerHTML = "Cart: $" + (parseFloat(currentValue[1]) + parseFloat(amount.innerHTML) * parseFloat(value[1])).toFixed(2);

    // add out-of-stock tag to product if user bought 5 products
    if (parseInt(amount.innerHTML) == 5) {
        document.querySelector('.product .current > div').classList.add('out-of-stock');
    }
    // amount reset
    amount.innerHTML = "1";

    //message
    swal({
        text: "Add to cart successfully",
        icon: "success",
    });

});

/* ----- click to "love button" -----*/

document.querySelector('.love').addEventListener('click', () => {
    document.querySelector('.love').classList.toggle("isLove");
});

/* ----- click to "rotate button" ----- */
var deg = 0; // current deg
document.querySelector('.rotate').addEventListener('click', () => {
    var img = document.querySelector('.zoom img'); // get img needs rotate
    deg += 90; // +90deg when click to button
    var tmp = "rotate(" + deg + "deg" + ")";
    img.style.transform = tmp;
});

// choose-color 

var chooseSize = document.querySelector(".choose-size");
var sizeList = document.querySelector(".choose-size ul")
chooseSize.addEventListener('click', (event) => {
    sizeList.classList.toggle("is-show"); // show or close size list
});
sizeList.addEventListener('click', (event) => {
    var content = event.target.innerHTML;
    document.querySelector(".choose-size dsiv span").innerHTML = content;
})

/* ----- rating ----- */


function rate(rating) {
    for (let i = 0; i < rating.length; i++) {
        rating[i].addEventListener('click', () => {
            for (let j = 0; j <= i; j++) {
                rating[j].style.color = "yellow";
            }
            for (let j = i + 1; j < rating.length; j++) {
                rating[j].style.color = "#ebebeb";
            }
        })
    }
}
var rating = document.querySelectorAll(".rating .stars i");
rate(rating);

var rating5cols = document.querySelectorAll(".product-5-cols .p5-products span:last-child");
for (let i = 0; i < rating5cols.length; i++) {
    rate(rating5cols[i].children);
}


