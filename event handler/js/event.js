function transformUppercase(_val){
    return _val.toUpperCase();
}

let elNamaPengguna = document.getElementById("namapengguna")
elNamaPengguna.addEventListener("keyup",function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
})