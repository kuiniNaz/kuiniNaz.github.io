let bookNowBtn = document.getElementById("bookNowBtn")
bookNowBtn.addEventListener('click', function () {
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    let userPhoneVal = document.getElementById("userPhone").value

    BookNow(userNameVal, userEmailVal, userPaxVal, userPhoneVal)

})

function BookNow(userName, userEmail, userPax, userPhone) {
    let url = 'https://api.sheety.co/aeea0daa90881305a4fc51f23ce6488a/bookingApp/bookings';
    let body = {
        booking: {
            name: userName,
            email: userEmail,
            pax: userPax,
            Phone: userPhone
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert("ID: " + json.booking.id + ", " + json.booking.name + " successfully added!")
        });
}