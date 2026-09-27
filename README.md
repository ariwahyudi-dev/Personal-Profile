# Personal Profile — Ari Wahyudi

Website personal profile satu halaman untuk Ari Wahyudi, Junior Frontend Developer, dibuat dengan HTML5 + CSS3 + JavaScript murni (tanpa framework, tanpa dependency eksternal selain Google Fonts).

## Struktur Project

```
personal-profile/
├── index.html
├── assets/
│   ├── images/
│   │   └── og-image.svg
│   └── icons/
│       └── favicon.svg
├── css/
│   ├── style.css        (design tokens & semua komponen)
│   └── responsive.css   (media queries semua breakpoint)
├── js/
│   └── script.js        (navbar, form validasi, dsb.)
└── README.md
```

## Cara Menjalankan di Visual Studio Code

1. Buka folder `personal-profile` di VS Code.
2. Install ekstensi **Live Server** (oleh Ritwick Dey) dari VS Code Marketplace.
3. Klik kanan pada `index.html` → **Open with Live Server**.
4. Website terbuka otomatis di browser, dan akan reload otomatis setiap kali Anda menyimpan perubahan.

Tanpa Live Server pun, Anda tetap bisa membuka `index.html` langsung di browser — hanya saja tidak ada auto-reload.

## Catatan Soal Positioning & "Rebranding"

Karena Anda masih junior tanpa project klien, saya sengaja **tidak** membuat klaim pengalaman atau testimoni palsu — itu berisiko merusak kepercayaan begitu klien bertanya lebih detail. Sebagai gantinya, arah brand yang dipakai:

- **Tagline inti**: fokus pada *akurasi data* dan *kerapian visual* — ini jadi diferensiasi yang jujur dan bisa dibuktikan, bukan sekadar kata-kata pemasaran.
- **Bagian "Studi Kasus Latihan"** ditampilkan apa adanya (status "Dalam pengerjaan" / "Segera hadir"), bukan sebagai project klien. Ini justru menunjukkan Anda proaktif membangun rekam jejak.
- **Bagian "Sedang saya pelajari"** di section Keahlian menunjukkan Anda jujur soal batas kemampuan sekarang, sambil menunjukkan arah pertumbuhan.

### Yang perlu Anda lakukan sebelum publish

- [ ] Kerjakan minimal 1 dari 3 project di section "Studi Kasus Latihan" dan ganti status menjadi tautan project asli (link demo + link GitHub).
- [ ] Tambahkan link GitHub dan/atau LinkedIn Anda (saat ini belum ada di footer/navbar — beri tahu saya linknya, saya bisa tambahkan).
- [ ] Ganti `assets/images/og-image.svg` dan `assets/icons/favicon.svg` dengan versi PNG/JPG asli jika ingin preview link di WhatsApp/media sosial tampil maksimal (beberapa platform belum mendukung SVG untuk og:image).
- [ ] Update `<link rel="canonical">` dan URL Open Graph di `index.html` setelah domain/hosting final ditentukan.

## Cara Mengganti Konten

- **Nama & tagline**: edit langsung di `<h1 class="hero__title">` dan `<p class="hero__label">` pada `index.html`.
- **Warna**: semua warna diatur sebagai CSS variable di bagian atas `css/style.css` (`:root { --color-bg, --color-accent, dst }`) — ubah di satu tempat, berlaku ke seluruh halaman.
- **Email kontak**: cari dan ganti `ariwahyudi.karier@gmail.com` di `index.html` (2 tempat) dan `js/script.js` (1 tempat).
- **Studi kasus**: setiap project ada di dalam `<article class="project-card">` — duplikasi blok ini untuk menambah project baru.

## Rekomendasi Hosting (Gratis)

Untuk personal profile seperti ini, tiga opsi termudah:

1. **GitHub Pages** — gratis, otomatis dapat domain `namakamu.github.io`, cocok karena Anda developer dan ini juga menunjukkan Anda familiar dengan Git.
2. **Netlify** — drag-and-drop folder project, dapat domain gratis, mendukung custom domain jika nanti beli domain sendiri.
3. **Vercel** — mirip Netlify, deploy langsung dari repository GitHub.

Untuk profil freelance, **GitHub Pages** sedikit lebih strategis karena link GitHub Anda otomatis terlihat aktif digunakan.

## Checklist Sebelum Dipublikasikan

- [ ] Cek tampilan di lebar 1920px, 1440px, 1366px, 768px, 480px, dan 375px
- [ ] Pastikan tidak ada horizontal scroll di mobile
- [ ] Tes form kontak (validasi nama, email, pesan)
- [ ] Tes menu hamburger di mobile
- [ ] Cek semua link `#anchor` mengarah ke section yang benar
- [ ] Jalankan Lighthouse (DevTools → Lighthouse) untuk cek skor Performance, Accessibility, SEO
