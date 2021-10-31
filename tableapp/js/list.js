//delete all rows in the table
for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
    bookingNameList.deleteRow(k)
}

//load all rows from Sheety API
for (let i = 0; i < JSON.bookings.length; i++) {
    let gName = json.bookings[i].name;
    let gEmail = json.bookings[i].email;
    let gPax = json.bookings[i].pax;
    let gRemarks = json.bookings[i].remarks;
    let gId = json.bookings[i].id;
    let btnId = "delete" + gId;

    let row = bookingNameList.insertRow(bookingNameList.rows.length)
    
}