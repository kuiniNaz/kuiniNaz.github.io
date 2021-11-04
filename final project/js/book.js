let bookNowBtn = document.getElementById("bookNowBtn")
bookNowBtn.addEventListener('click', function () {
    let name = document.getElementById("name")
    let nameVal = name.value

    let email = document.getElementById("email")
    let emailVal = email.value

    let phone = document.getElementById("phone")
    let phoneVal = phone.value

    let country = document.getElementById("country")
    let countryVal = country.value

    let arrive = document.getElementById("arrive")
    let arriveVal = arrive.value

    let depart = document.getElementById("depart")
    let departVal = depart.value

    let pax = document.getElementById("pax")
    let paxVal = pax.value

    let comments = document.getElementById("comments")
    let commentsVal = comments.value

    BookNow(nameVal, emailVal, phoneVal, countryVal, arriveVal, departVal, paxVal, commentsVal)

})

function BookNow(name, email, phone, country, arrive, depart, pax, comments) {
    let url = 'https://api.sheety.co/aeea0daa90881305a4fc51f23ce6488a/bookingApp/bookings';
    let body = {
        booking: {
            name: name,
            email: email,
            phone: phone,
            country: country,
            arrive: arrive,
            depart: depart,
            pax: pax,
            comments: comments
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