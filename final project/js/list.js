let refreshNow = document.getElementById("refreshNowBtn")
refreshNow.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/aeea0daa90881305a4fc51f23ce6488a/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            let bookingNameList = document.getElementById("bookingNameList")
            let bookingIds = []

            //clear the table/list
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }

            //load the new data/list
            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name
                let gCountry = json.bookings[i].country
                let gPax = json.bookings[i].pax
                let gArrive = json.bookings[i].arrive
                let gDepart = json.bookings[i].depart
                let gId = json.bookings[i].id
                let btnId = "delete" + gId

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gCountry
                row.insertCell(3).innerHTML = gPax
                row.insertCell(4).innerHTML = gArrive
                row.insertCell(5).innerHTML = gDepart
                row.insertCell(6).innerHTML = "<button id='" + btnId + "' class='btn btn-danger'>Delete</button>"

                bookingIds.push(btnId)
            }

            //attach listener to buttons
            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    let theId = bookingIds[j].replace("delete", "")
                    DeleteBooking(theId)
                })
            }
        });
}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/aeea0daa90881305a4fc51f23ce6488a/bookingApp/bookings/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + id + " deleted!")
            GetBooking()
        });
}