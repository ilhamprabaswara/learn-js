function readBooks(time, book, callback) {
    console.log("saya membaca " + book.name)
    setTimeout(function () {
        let sisaWaktu = 0
        if (time >= book.timeSpent) {
            sisaWaktu = time - book.timeSpent
            console.log("saya sudah membaca " + book.name + ", sisa waktu saya " + sisaWaktu)
            callback(sisaWaktu) //menjalankan function callback
        } else {
            console.log('waktu saya habis')
            callback(time)
        }
    }, book.timeSpent)
}

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

function execute(time, index) {
    readBooks(time, books[index], function (sisaWaktu) {
        if (sisaWaktu !== 0) {
            execute(sisaWaktu, index + 1)
        }
    })
}
execute(10000, 0)