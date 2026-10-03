// ====== DATA PEMAIN ======
const pemain = [
    {
        klub: "Manchester United",
        posisi: "Gelandang Serang",
        nama: "Bruno Fernandes",
        nomor: 8,
        negara: "Portugal",
        foto: "bruno.jpg",
        deskripsi: "Gelandang serang yang dikenal lewat umpan terobosan dan tendangan penaltinya."
    },
    {
        klub: "Fortuna Sittard",
        posisi: "Penyerang",
        nama: "Ole Romeny",
        nomor: 10,
        negara: "Indonesia",
        foto: "ole.jpg",
        deskripsi: "Penyerang asal Indonesia yang dikenal memiliki kecepatan, pergerakan lincah, dan kemampuan mencetak gol."
    },
    {
        klub: "Paris Saint-Germain",
        posisi: "Penyerang",
        nama: "Kvaratskhelia",
        nomor: "7",
        negara: "Georgia",
        foto: "kvarat.jpg",
        deskripsi: "Pemain sayap asal Georgia yang dikenal dengan dribel lincah, kecepatan, dan kemampuan menciptakan peluang."
    }
];

const daftar = document.getElementById("daftarPemain");
const detail = document.getElementById("detail");
let kartuTerakhir = null;

// ====== BUAT KARTU ======
pemain.forEach(function (p) {
    const kartu = document.createElement("button");
    kartu.className = "kartu";
    kartu.type = "button";
    kartu.setAttribute("aria-label", "Lihat profil " + p.nama + ", " + p.klub);

    kartu.innerHTML =
        '<div class="foto">' +
            '<img src="' + p.foto + '" alt="Foto ' + p.nama + '">' +
            '<span class="nomor">#' + p.nomor + '</span>' +
        '</div>' +
        '<div class="info">' +
            '<h3>' + p.klub + '</h3>' +
            '<p class="posisi">' + p.posisi + '</p>' +
            '<p class="nama">' + p.nama + '</p>' +
        '</div>';

    // kalau foto belum ada, tetap tampil rapi (latar biru)
    kartu.querySelector("img").addEventListener("error", function () {
        this.style.display = "none";
    });

    kartu.addEventListener("click", function () {
        kartuTerakhir = kartu;
        bukaDetail(p);
    });

    daftar.appendChild(kartu);
});

// ====== POP-UP ======
function bukaDetail(p) {
    const foto = document.getElementById("detailFoto");
    foto.src = p.foto;
    foto.alt = "Foto " + p.nama;
    document.getElementById("detailKlub").textContent = p.klub;
    document.getElementById("detailNama").textContent = p.nama;
    document.getElementById("detailPosisi").textContent = p.posisi;
    document.getElementById("detailNomor").textContent = p.nomor;
    document.getElementById("detailNegara").textContent = p.negara;
    document.getElementById("detailDeskripsi").textContent = p.deskripsi;
    detail.showModal();
}

document.getElementById("tutup").addEventListener("click", function () {
    detail.close();
});

// klik area gelap di luar kotak = tutup
detail.addEventListener("click", function (e) {
    if (e.target === detail) detail.close();
});

// kembalikan fokus ke kartu setelah ditutup (Esc juga otomatis jalan)
detail.addEventListener("close", function () {
    if (kartuTerakhir) kartuTerakhir.focus();
});