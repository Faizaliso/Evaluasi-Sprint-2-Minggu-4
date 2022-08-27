let formatPhone = (...angka) => {
    let potong = angka.splice(0, 3)
    let potong2 = angka.splice(0, 3)
    let reserv = `(${potong.join(" ")}) ${potong2.join("")} - ${angka.join("")}`

    console.log(reserv)
}

//================|2|===============
let data = [{
    nama: 'huda',
    Jabatan: 'Kepala Chef',
    'Gaji Perhari': 'Rp100.000',
    Absen: '2 hari'
}, {
    nama: 'Abdullah',
    Jabatan: 'Asisten Chef',
    "Gaji Perhari": 'Rp 90.000',
    Absen: '3 hari'
}, {
    nama: 'Imran',
    Jabatan: 'Kasir',
    'Gaji Perhari': 'Rp 50.000',
    Absen: '1 hari'
}, {
    nama: 'Fajar',
    Jabatan: 'Pelayan',
    'Gaji Perhari': 'Rp 50.000',
    Absen: '1 hari'
}]

function hitungGaji(nama, Absen) {

    for (index in data) {
        index['Gaji Perhari'] * 30 - (Absen * ['Gaji Perhari'])
    }

}

//===============[3]==============

function orderPizza(type, name) {
    console.log('Pizza ordered ...')
    console.log('Pizza is for preparation')
    setTimeout(function () {
        let msg = `Your ${type} ${name} Pizza is ready! The total bill is $13`
        console.log(`On the Pizzahub server ${msg}`)
    }, 3000);
}
function notification(callback) {
    callback('name')
}
// notification(name = alert(msg))