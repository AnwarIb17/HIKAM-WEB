# 📖 Al-Hikam Visual — Kajian Digital Kitab Al-Hikam

Aplikasi web interaktif dan kontemplatif untuk menyelami kedalaman mahakarya tasawuf **Kitab Al-Hikam** karya _Al-Imam Tajuddin Abu al-Fadhl Ahmad bin Muhammad bin Atha'illah as-Sakandari_ (w. 709 H), dengan rujukan syarah mendalam dari _Al-'Allamah Ibn 'Abbad ar-Rundi_ dan _Kitab At-Tanwir_.

🔗 **Live Demo:** [https://anwarib17.github.io/HIKAM-WEB/](https://anwarib17.github.io/HIKAM-WEB/)

---

## ✨ Fitur Utama

- **Desain Estetik & Hening**: Mengusung konsep visual _Deep Green_ & _Sand Gold_ yang tenang, kontemplatif, dan ramah dibaca dalam waktu lama.
- **Mode Gelap & Terang (Dark/Light Mode)**: Fleksibel menyesuaikan kenyamanan mata pembaca dengan penyimpanan preferensi otomatis (_Local Storage_).
- **Kajian Visual Panjang & Mendalam**: Dilengkapi teks Arab berharakat penuh, terjemahan, rincian syarah berseri (Definisi, Golongan Hati, Dialog Perenungan, Diagram Muhasabah, hingga Dalil & Doa Munajat).
- **Indeks Katalog Dinamis & Pencarian Cepat**: Navigasi sidebar, sistem filter kategori (_chip_) yang dibangun otomatis dari data, serta pagination (9 kartu per halaman) untuk memudahkan pencarian untaian hikmah.
- **Navigasi Berbasis URL**: Tautan langsung ke setiap hikmah melalui _hash routing_ (`#hikmah-9`), kompatibel dengan tombol _back_ browser dan _gesture_ HP.
- **Sepenuhnya Client-Side (SPA)**: Dibangun murni menggunakan teknologi web modern tanpa memerlukan instalasi database tambahan.

---

## 📚 Daftar Materi Kajian yang Tersedia

Sembilan hikmah telah tersedia untuk dibaca (_Siap Dibaca_), sedangkan nomor berikutnya masih berupa _placeholder_ dan akan dilengkapi bertahap.

| No.     | Judul                                           | Kategori          | Fokus Kajian                                                                                                                 |
| ------- | ----------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| #01     | Tanda Bersandar pada Amal                       | Tawakal vs Asbab  | Al-i'timad, 4 Fase Hati, Kisah Yusuf bin Husain ar-Razi                                                                      |
| #02     | Tentang Asbab dan Tajrid                        | Tawakal vs Asbab  | Asbab & Tajrid, Syahwat Samar, Kemerosotan Himmah, Tanda Iqomah, Tipu Daya _At-Tanwir_                                       |
| #03     | Kekuatan Himmah dan Benteng Takdir              | Qadha & Qadar     | _Sawaabiqul Himam_, Karomah vs Istidraj, Tauhid Af'al, Rahasia _Bab Tadbir_                                                  |
| #04     | Istirahatkan Jiwamu dari Mengatur               | Tadbir & Tawakal  | Definisi _Tadbir Madzmum_, Bahaya Ruhani, Mutiara Ma'rifat                                                                   |
| #05     | Butanya Mata Hati (_Inthimas al-Bashirah_)      | Bashirah & Rezeki | Dua Istilah Pokok, Nash Syari' & Atsar, Konsekuensi Ruhani, Tafsir _At-Tanwir_ (QS. Thaha: 132)                              |
| #06     | Adab Doa, Jaminan Ijabah, dan Rahasia Idthirar  | Doa & Tawakal     | 2 bagian: Adab Doa & Jaminan Ijabah (4 dalil), serta Rahasia _Isti'jal_ & _Idthirar_ (Tafsir Sayyidi Abu Hasan asy-Syadzili) |
| #07     | Menjaga Basirah Ketika Janji Tertunda           | Basirah & Yaqin   | Tafsir kata kunci, Rahasia Kenapa Belum Terjadi, Rantai Janji, _Rabth_, Dalil Janji Allah yang pasti                         |
| #08     | Pintu Ta'arruf di Balik Balā' — Wijhah Ma'rifat | Ma'rifat & Balā'  | 2 bagian: Maqom Ta'arruf & Mitsal Balā'; Hadits Qudsi, Qoul _Al-Hakim At-Tirmidzi_, Tiga Kisah Wali                          |
| #09     | Ragam Amal Lahir dari Ragam Warid Hati          | Warid & Hal Qalbi | Definisi _Waridatul Ahwal_, Empat Warni Hati (Haibah, Uns, Qabdh, Basth), Kaidah Emas, Kunci Penutup                         |
| #10–#26 | _Segera Hadir / Dalam Penyusunan_               | Kearifan Tasawuf  | Placeholder otomatis — dapat dibuka setelah materi ditulis                                                                   |

> **Catatan navigasi:** Beranda menampilkan 9 kartu per halaman. Hikmah #10 ke atas masih terkunci dan menampilkan modal _"Materi Sedang Disusun"_ ketika diklik.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5** (Struktur Semantic)
- **CSS3** (Custom Properties / CSS Variables, Flexbox, Grid, Responsive Design)
- **JavaScript (Vanilla ES6+)** (Single Page Application State & Dynamic DOM Rendering)
- **Font Google**: _Amiri_ & _Scheherazade New_ (Arab), serta _Plus Jakarta Sans_ (Latin)
- **Icon**: _Font Awesome 6.5.1_

---

## 📂 Struktur Direktori Proyek

```text
HIKAM-WEB/
├── css/
│   └── style.css
├── js/
│   ├── data/
│   │   ├── index-data.js     # Pusat data: agregasi hikmah + placeholder otomatis #10–#26
│   │   ├── hikmah-01.js      # ... s.d.
│   │   ├── hikmah-02.js
│   │   ├── hikmah-03.js
│   │   ├── hikmah-04.js
│   │   ├── hikmah-05.js
│   │   ├── hikmah-06.js
│   │   ├── hikmah-07.js
│   │   ├── hikmah-08.js
│   │   └── hikmah-09.js
│   └── app.js                # Logika SPA: routing, pagination, filter, tema, dsb.
└── index.html
```

---

## 🧩 Cara Menambah Materi Hikmah Baru

1. **Buat file data** `js/data/hikmah-XX.js` dengan objek `hikmahXX` (lihat pola di `hikmah-09.js`).
2. **Daftarkan di `index-data.js`** dengan blok aman `if (typeof hikmahXX !== "undefined") { ... }`.
3. **Muat skripnya** di `index.html` (sebelum `index-data.js`).
4. Placeholder nomor berikutnya akan otomatis menyesuaikan seiner.

### Skema Objek Hikmah

```javascript
const hikmahXX = {
  id: 9, // ID numerik unik
  nomor: "09", // Nomor urut string (2 digit)
  judul: "…", // Judul hikmah
  kategori: "…", // Kategori untuk filter
  arab: "…", // Teks Arab berharakat (matan)
  terjemah: "…", // Terjemahan Bahasa Indonesia
  isReady: true, // Tandai siap dibaca
  renderContent: function () {
    // Isi syarah mendalam (HTML)
    return `…`;
  },
};
```

---

## 📜 Rujukan & Credits

- **Matan**: _Kitab Al-Hikam_ — Imam Tajuddin Abu al-Fadhl bin Atha'illah as-Sakandari (w. 709 H)
- **Syarah utama**: _Ghayts al-Mawahib al-'Aliyyah_ — Ibn 'Abbad ar-Rundi
- **Pendamping**: _Iqadh al-Himam_ — Ibn 'Ajibah al-Hasani, dan _At-Tanwir fi Isqath at-Tadbir_ — Ibnu Atha'illah
- **Pembimbing & Penelaah Ilmiah**: Ustadz Ahmad Subarnas (Pimpinan Pondok Pesantren Tajalliddin, Kp. Sinarjaya, Kab. Garut) — murid langsung KH. Mama Ruhiyat

---

## 📄 Lisensi

Lihat berkas [LICENSE](./LICENSE).
