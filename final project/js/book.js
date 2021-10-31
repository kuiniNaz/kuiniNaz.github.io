let bookNowBtn = document.getElementById("bookNowBtn")
bookNowBtn.addEventListener('click', function () {
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    let userRemarksVal = document.getElementById("userRemarks").value

    BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal)

})

function BookNow(userName, userEmail, userPax, userRemarks) {
    let url = 'https://api.sheety.co/b9b23bacbce0fa05289abc34d8cf52e6/bookingkpt/bookings';
    let body = {
        booking: {
            name: userName,
            email: userEmail,
            pax: userPax,
            remarks: userRemarks
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