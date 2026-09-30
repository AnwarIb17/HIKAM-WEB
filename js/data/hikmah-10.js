// Data Materi Hikmah #10: Syarah Ibnu 'Abbad ar-Rundi — Ruhnya Amal Adalah Ikhlas
const hikmah10 = {
  id: 10,
  nomor: "10",
  judul: "Ruhnya Amal Adalah Ikhlas",
  kategori: "Ikhlas & Tauhid",
  arab: "اَلْأَعْمَالُ صُوَرٌ قَائِمَةٌ وَأَرْوَاحُهَا وُجُوْدُ سِرِّ الْإِخْلَاصِ فِيْهَا",
  terjemah:
    "Amal-amal itu adalah jasad-jasad yang tegak, dan ruh-ruhnya adalah adanya rahasia ikhlas di dalamnya.",
  isReady: true,
  renderContent: function () {
    return `
      <!-- ================= HEADER KAJIAN ================= -->
      <div style="text-align:center; margin-bottom:1.5rem; border-bottom:1px solid var(--border-color); padding-bottom:1rem;">
        <span class="meta-badge-top">SYARAH AL-HIKAM • IBNU 'ABBAD • HIKMAH 10</span>
        <div style="display:flex; justify-content:center; gap:1rem; font-size:0.78rem; color:var(--text-muted); margin-top:0.5rem; flex-wrap:wrap;">
          <span><strong>Fokus:</strong> Ikhlas &amp; Tauhid</span>
          <span><strong>Klasifikasi:</strong> Abrar vs Muqarrabin</span>
          <span><strong>Kunci:</strong> Amal Lillah vs Billah</span>
        </div>
      </div>

      <!-- ================= MATAN UTAMA ================= -->
      <div style="text-align:center; margin-bottom:1.5rem;">
        <div style="font-size:1.6rem; font-family:'Amiri',serif; line-height:2.15; color:var(--primary); direction:rtl; font-weight:bold; background:var(--bg-card); border-right:4px solid var(--accent); border-radius:12px; padding:1.4rem;">
          اَلْأَعْمَالُ صُوَرٌ قَائِمَةٌ<br>
          <span style="color:var(--accent);">وَأَرْوَاحُهَا وُجُوْدُ سِرِّ الْإِخْلَاصِ فِيْهَا</span>
        </div>
        <div style="margin:1rem auto 0; max-width:700px; background:rgba(197,155,39,0.06); border-left:4px solid var(--accent); padding:0.9rem 1.15rem; border-radius:8px; text-align:left;">
          <h4 style="margin-bottom:0.35rem; color:var(--primary); font-size:0.85rem; letter-spacing:0.08em;"><i class="fa-solid fa-language"></i> TERJEMAHAN:</h4>
          <p style="font-size:0.93rem; line-height:1.8; font-weight:500; color:var(--text-main); margin:0;">
            Amal-amal itu adalah <strong>jasad-jasad yang tegak</strong>, dan <strong>ruh-ruhnya</strong> adalah adanya
            <span style="background:var(--accent); color:#fff; padding:1px 6px; border-radius:4px;">rahasia ikhlas</span> di dalamnya.
          </p>
        </div>
        <div style="margin-top:0.9rem; display:flex; justify-content:center; gap:0.4rem; flex-wrap:wrap; font-size:0.7rem;">
          <span class="count-badge">Ikhlas Abrar</span>
          <span class="count-badge">Ikhlas Muqarrabin</span>
          <span class="count-badge">Shidq</span>
          <span class="count-badge">Tauhid Af'al</span>
        </div>
      </div>

      <!-- ========== JASAD vs RUH ========== -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:0.85rem; margin-bottom:1.5rem;">
        <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:14px; padding:1.15rem; text-align:center; color:#94a3b8;">
          <div style="width:62px; height:82px; margin:0 auto 0.75rem; border-radius:16px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px;">
            <div style="width:22px; height:22px; border-radius:50%; background:rgba(255,255,255,0.14);"></div>
            <div style="width:34px; height:26px; border-radius:6px; background:rgba(255,255,255,0.09);"></div>
            <span style="font-size:0.5rem; letter-spacing:0.15em; color:rgba(255,255,255,0.3);">JASAD</span>
          </div>
          <div style="font-size:0.58rem; letter-spacing:0.12em; font-weight:800; color:#94a3b8; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:20px; padding:3px 10px; display:inline-block; margin-bottom:0.6rem;">TANPA RUH</div>
          <p style="font-size:0.78rem; line-height:1.6; margin:0;">
            Amal tanpa ikhlas &mdash; <span dir="rtl" style="font-family:'Amiri',serif; color:#cbd5e1;">أَشْبَاحٌ بِلَا أَرْوَاحٍ</span>
          </p>
        </div>
        <div style="background:linear-gradient(150deg,#064e3b,#0d4a3e); border:1px solid #065f46; border-radius:14px; padding:1.15rem; text-align:center; color:#a7f3d0; box-shadow:0 0 0 1px rgba(197,155,39,0.2);">
          <div style="width:62px; height:82px; margin:0 auto 0.75rem; border-radius:16px; background:linear-gradient(180deg,rgba(197,155,39,0.3),rgba(197,155,39,0.05)); border:1px solid rgba(197,155,39,0.4); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px;">
            <div style="width:22px; height:22px; border-radius:50%; background:var(--accent); box-shadow:0 0 14px rgba(197,155,39,0.7);"></div>
            <div style="width:34px; height:26px; border-radius:6px; background:rgba(197,155,39,0.6);"></div>
            <div style="width:7px; height:7px; border-radius:50%; background:#fff; box-shadow:0 0 8px #fff;"></div>
            <span style="font-size:0.5rem; letter-spacing:0.15em; color:var(--accent); font-weight:800;">R&#363;H</span>
          </div>
          <div style="font-size:0.58rem; letter-spacing:0.12em; font-weight:800; color:#0f172a; background:var(--accent); border-radius:20px; padding:3px 10px; display:inline-block; margin-bottom:0.6rem;">BERCAHAYA</div>
          <p style="font-size:0.78rem; line-height:1.6; margin:0;">
            Amal dengan sirrul ikhlas &mdash; <span dir="rtl" style="font-family:'Amiri',serif; color:#fef3c7;">حَيَاتُهَا وَصَلَاحِيَّتُهَا</span>
          </p>
        </div>
      </div>

      <!-- ========== 01 • PENDAHULUAN — RUTBAH & MAQAM ========== -->
      <div style="background:linear-gradient(135deg,#ecfdf5,#d1fae5); border:1px solid #a7f3d0; border-radius:16px; padding:1.4rem; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.9rem;">
          <span style="width:32px; height:32px; border-radius:8px; background:#064e3b; color:#a7f3d0; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">01</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:#047857; font-weight:700;">PENDAHULUAN • الْمُقَدِّمَةُ</div>
            <div style="font-weight:800; color:#064e3b; font-size:0.95rem;">Ikhlas Setiap Hamba Sesuai Maqamnya</div>
          </div>
        </div>

        <div style="background:#fff; border:1px solid #a7f3d0; border-radius:12px; padding:1rem 1.1rem; margin-bottom:1rem;">
          <p style="font-family:'Amiri',serif; font-size:1.15rem; line-height:1.95; direction:rtl; text-align:right; color:#064e3b; margin:0; font-weight:bold;">
            إِخْلَاصُ كُلِّ عَبْدٍ فِي أَعْمَالِهِ عَلَى حَسَبِ رُتْبَتِهِ وَمَقَامِهِ
          </p>
        </div>

        <div style="border-left:3px solid #10b981; padding-left:0.9rem; margin-bottom:1rem;">
          <p style="font-size:0.9rem; line-height:1.8; color:#1f3a28; margin:0;">
            <strong style="color:#065f46;">Ikhlas setiap hamba dalam amal-amalnya adalah sesuai dengan tingkat (rutbah) dan maqamnya.</strong>
            Artinya, tidak semua ikhlas sama. Ada ikhlasnya <i>Abrar</i> (orang baik) dan ada ikhlasnya
            <i>Muqarrabin</i> (orang yang didekatkan). <strong>Kadar kejernihan tauhid menentukan kadar kejernihan ikhlas.</strong>
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:0.6rem;">
          <div style="background:#fff; border:1px solid #a7f3d0; border-radius:10px; padding:0.65rem 0.85rem; display:flex; align-items:center; gap:0.6rem;">
            <span style="width:26px; height:26px; border-radius:50%; background:#064e3b; color:#a7f3d0; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem; flex-shrink:0;">1</span>
            <span style="font-size:0.78rem; line-height:1.4; color:#064e3b;"><strong>Rutbah:</strong> tingkatan amal &amp; ilmu</span>
          </div>
          <div style="background:#fff; border:1px solid #a7f3d0; border-radius:10px; padding:0.65rem 0.85rem; display:flex; align-items:center; gap:0.6rem;">
            <span style="width:26px; height:26px; border-radius:50%; background:#064e3b; color:#a7f3d0; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem; flex-shrink:0;">2</span>
            <span style="font-size:0.78rem; line-height:1.4; color:#064e3b;"><strong>Maqam:</strong> kedudukan hati di hadapan Allah</span>
          </div>
        </div>
      </div>

      <!-- ========== 02 • MAQAM 1 — ABRAR ========== -->
      <div style="background:var(--bg-card); border:1px solid #a7f3d0; border-radius:16px; overflow:hidden; margin-bottom:1.5rem; box-shadow:0 10px 30px rgba(15,23,42,0.06);">
        <div style="background:linear-gradient(90deg,#064e3b,#0f5132,#064e3b); padding:0.9rem 1.15rem; display:flex; align-items:center; gap:0.8rem; flex-wrap:wrap;">
          <span style="width:38px; height:38px; border-radius:10px; background:#d1fae5; color:#064e3b; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:1rem; font-family:'Amiri',serif;">&#1633;</span>
          <div>
            <div style="font-family:'Amiri',serif; font-size:1.3rem; color:#fff; font-weight:bold; line-height:1.3;" dir="rtl">مَقَامُ الْأَبْرَارِ</div>
            <div style="font-size:0.62rem; letter-spacing:0.14em; color:#6ee7b7; font-weight:800;">MAQAMNYA ORANG BAIK • HIJAU ZAMRUD</div>
          </div>
          <span style="margin-left:auto; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.18); color:#d1fae5; font-size:0.6rem; letter-spacing:0.1em; font-weight:800; padding:4px 10px; border-radius:20px;">LEVEL AWAL IKHLAS</span>
        </div>

        <div style="padding:1.2rem 1.15rem;">
          <span style="display:inline-block; background:#065f46; color:#d1fae5; font-size:0.6rem; font-weight:800; letter-spacing:0.1em; padding:3px 10px; border-radius:20px;">NAS SYARAH IBNU 'ABBAD — ABRAR</span>
          <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:2.15; direction:rtl; text-align:right; color:var(--primary); margin:0.8rem 0 1.1rem; font-weight:600;">
            فَأَمَّا مَنْ كَانَ مِنْهُمْ مِنَ الْأَبْرَارِ فَمُنْتَهَى دَرَجَةِ إِخْلَاصِهِ أَنْ تَكُونَ أَعْمَالُهُ سَالِمَةً مِنَ الرِّيَاءِ الْجَلِيِّ وَالْخَفِيِّ وَقَصْدِ مُوَافَقَةِ أَهْوَاءِ النَّفْسِ طَلَبًا لِمَا وَعَدَ اللهُ بِهِ الْمُخْلِصِيْنَ مِنْ جَزِيْلِ الثَّوَابِ وَحُسْنِ الْمَآبِ وَهَرَبًا عَمَّا أَوْعَدَ بِهِ الْمُخْلِطِيْنَ مِنْ أَلِيْمِ الْعَذَابِ وَسُوْءِ الْحِسَابِ
          </p>

          <!-- TAFSIL 4 UNSUR -->
          <div style="background:#f6fff8; border:1px solid #a7f3d0; border-radius:12px; padding:1rem 1.1rem;">
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:#065f46; font-weight:800; margin-bottom:0.8rem;">TAFSIL RINCI — 4 UNSUR IKHLAS ABRAR</div>

            <div style="display:flex; gap:0.7rem; padding:0.6rem 0; border-bottom:1px dashed #a7f3d0;">
              <span style="width:26px; height:26px; border-radius:50%; background:#065f46; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem; flex-shrink:0;"><i class="fa-solid fa-eye"></i></span>
              <div>
                <div style="font-family:'Amiri',serif; font-size:0.95rem; font-weight:bold; color:#065f46;" dir="rtl">سَالِمَةٌ مِنَ الرِّيَاءِ الْجَلِيِّ وَالْخَفِيِّ</div>
                <p style="font-size:0.79rem; line-height:1.6; color:var(--text-muted); margin:0.2rem 0 0;">Selamat dari <i>riya jali</i> (terang-terangan ingin dilihat manusia) dan <i>riya khafi</i> (samar, ingin dipuji dalam hati). Hatinya sudah menyingkirkan makhluk dari niat.</p>
              </div>
            </div>

            <div style="display:flex; gap:0.7rem; padding:0.6rem 0; border-bottom:1px dashed #a7f3d0;">
              <span style="width:26px; height:26px; border-radius:50%; background:#065f46; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem; flex-shrink:0;"><i class="fa-solid fa-compass"></i></span>
              <div>
                <div style="font-family:'Amiri',serif; font-size:0.95rem; font-weight:bold; color:#065f46;" dir="rtl">وَقَصْدِ مُوَافَقَةِ أَهْوَاءِ النَّفْسِ</div>
                <p style="font-size:0.79rem; line-height:1.6; color:var(--text-muted); margin:0.2rem 0 0;">Tidak bermaksud menuruti hawa nafsu dalam ibadah &mdash; tidak ibadah karena enak, karena adat, atau karena ingin dunia, tetapi karena Allah.</p>
              </div>
            </div>

            <div style="display:flex; gap:0.7rem; padding:0.6rem 0; border-bottom:1px dashed #a7f3d0;">
              <span style="width:26px; height:26px; border-radius:50%; background:#065f46; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem; flex-shrink:0;"><i class="fa-solid fa-gift"></i></span>
              <div>
                <div style="font-family:'Amiri',serif; font-size:0.95rem; font-weight:bold; color:#065f46;" dir="rtl">طَلَبًا لِمَا وَعَدَ اللهُ بِهِ مِنْ جَزِيْلِ الثَّوَابِ وَحُسْنِ الْمَآبِ</div>
                <p style="font-size:0.79rem; line-height:1.6; color:var(--text-muted); margin:0.2rem 0 0;">Motivasinya: <i>thalaban</i> &mdash; mencari apa yang Allah janjikan bagi mukhlisin: <strong>jazil tsawab</strong> (pahala agung) dan <strong>husnul maab</strong> (tempat kembali yang indah di surga).</p>
              </div>
            </div>

            <div style="display:flex; gap:0.7rem; padding:0.6rem 0 0;">
              <span style="width:26px; height:26px; border-radius:50%; background:#065f46; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem; flex-shrink:0;"><i class="fa-solid fa-shield-halved"></i></span>
              <div>
                <div style="font-family:'Amiri',serif; font-size:0.95rem; font-weight:bold; color:#065f46;" dir="rtl">وَهَرَبًا عَمَّا أَوْعَدَ بِهِ الْمُخْلِطِيْنَ مِنْ أَلِيْمِ الْعَذَابِ وَسُوْءِ الْحِسَابِ</div>
                <p style="font-size:0.79rem; line-height:1.6; color:var(--text-muted); margin:0.2rem 0 0;">Dan <i>haraban</i> &mdash; lari dari ancaman bagi mukhlithin: <strong>alim adzab</strong> (siksa pedih) dan <strong>su'ul hisab</strong> (hisab yang buruk).</p>
              </div>
            </div>
          </div>

          <!-- TAHQIQ IYYAKA NA'BUDU -->
          <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:12px; padding:1rem 1.1rem; margin-top:1rem; color:#cbd5e1;">
            <div style="font-size:0.6rem; letter-spacing:0.14em; color:#fde68a; font-weight:800; margin-bottom:0.5rem;">TAHQIQ • إِيَّاكَ نَعْبُدُ</div>
            <p style="font-family:'Amiri',serif; font-size:1rem; line-height:1.95; direction:rtl; text-align:right; color:#fefce8; margin:0 0 0.6rem;">
              وَهَذَا مِنَ التَّحَقُّقِ بِمَعْنَى قَوْلِهِ تَعَالَى
              <span style="color:#fde68a; font-weight:bold;">إِيَّاكَ نَعْبُدُ</span> [الفاتحة: ٥]
              أَيْ لَا نَعْبُدُ إِلَّا إِيَّاكَ وَلَا نُشْرِكُ فِي عِبَادَتِنَا غَيْرَكَ
            </p>
            <p style="font-size:0.79rem; line-height:1.65; margin:0;">Ini adalah tahqiq makna <b style="color:#fff;">Iyyaka na'budu</b> &mdash; hanya kepada-Mu kami menyembah, tidak menyekutukan selain-Mu dalam ibadah kami. Titik beratnya: <strong>memurnikan ma'bud</strong> (yang disembah).</p>
          </div>

          <!-- HASIL MAQAM -->
          <div style="background:#fff; border:1px solid var(--border-color); border-radius:12px; padding:1rem 1.1rem; margin-top:1rem;">
            <div style="font-size:0.6rem; letter-spacing:0.12em; color:var(--text-muted); font-weight:800; margin-bottom:0.5rem;">HASIL MAQAM ABRAR</div>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:2; direction:rtl; text-align:right; color:var(--primary); margin:0 0 0.6rem; font-weight:600;">
              وَحَاصِلُ أَمْرِهِ إِخْرَاجُ الْخَلْقِ عَنْ نَظَرِهِ فِي أَعْمَالِ بِرِّهِ مَعَ بَقَاءِ رُؤْيَتِهِ لِنَفْسِهِ فِي النِّسْبَةِ إِلَيْهَا وَالِاعْتِمَادِ عَلَيْهَا
            </p>
            <p style="font-size:0.82rem; line-height:1.7; color:var(--text-main); margin:0 0 0.8rem;">
              <strong>Kesimpulan:</strong> Dia sudah mengeluarkan makhluk dari pandangannya dalam amal kebaikannya &mdash; tidak mencari penilaian manusia.
              Namun <strong>masih melihat dirinya sendiri</strong>: merasa amal itu dinisbatkan kepadanya, dan bersandar padanya.
            </p>
            <div style="background:rgba(13,74,62,0.05); border:1px solid var(--border-color); border-radius:10px; padding:0.7rem 0.85rem; display:flex; gap:0.7rem; align-items:flex-start;">
              <i class="fa-solid fa-heart" style="color:var(--primary); margin-top:0.2rem;"></i>
              <p style="font-size:0.78rem; line-height:1.6; color:var(--text-muted); margin:0;">
                <strong style="color:var(--primary);">Visual hati:</strong> Hati sudah bersih dari pandangan makhluk (tidak riya'), tapi masih melihat diri sendiri &mdash;
                masih ada <i>ana</i> yang beramal. Inilah ikhlasnya Abrar: <strong>sah, berpahala, tetapi belum fana</strong>.
              </p>
            </div>
            <div style="margin-top:0.7rem; display:flex; align-items:center; gap:0.4rem; font-size:0.68rem; font-weight:700; color:#065f46;">
              <i class="fa-solid fa-circle" style="font-size:0.4rem; color:#10b981;"></i> Maqam Shalih &bull; Maqb&#363;l &bull; Berpahala
            </div>
          </div>
        </div>
      </div>

      <!-- ========== 03 • MAQAM 2 — MUQARRABIN ========== -->
      <div style="background:var(--bg-card); border:1px solid #fde68a; border-radius:16px; overflow:hidden; margin-bottom:1.5rem; box-shadow:0 10px 30px rgba(197,155,39,0.1);">
        <div style="background:linear-gradient(90deg,#78350f,#92400e,#78350f); padding:0.9rem 1.15rem; display:flex; align-items:center; gap:0.8rem; flex-wrap:wrap;">
          <span style="width:38px; height:38px; border-radius:10px; background:linear-gradient(135deg,#fde68a,#c59b27); color:#78350f; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:1rem; font-family:'Amiri',serif;">&#1634;</span>
          <div>
            <div style="font-family:'Amiri',serif; font-size:1.3rem; color:#fff; font-weight:bold; line-height:1.3;" dir="rtl">مَقَامُ الْمُقَرَّبِيْنَ</div>
            <div style="font-size:0.62rem; letter-spacing:0.14em; color:#fde68a; font-weight:800;">MAQAMNYA ORANG DEKAT • EMAS MULIA</div>
          </div>
          <span style="margin-left:auto; background:rgba(255,255,255,0.12); border:1px solid rgba(253,230,138,0.35); color:#fef3c7; font-size:0.6rem; letter-spacing:0.1em; font-weight:800; padding:4px 10px; border-radius:20px;">LEVEL TAUHID &amp; YAQIN</span>
        </div>

        <div style="padding:1.2rem 1.15rem;">
          <span style="display:inline-block; background:#92400e; color:#fef3c7; font-size:0.6rem; font-weight:800; letter-spacing:0.1em; padding:3px 10px; border-radius:20px;">NAS SYARAH IBNU 'ABBAD — MUQARRABIN</span>
          <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:2.15; direction:rtl; text-align:right; color:var(--primary); margin:0.8rem 0 1.1rem; font-weight:600;">
            وَأَمَّا مَنْ كَانَ مِنْهُمْ مِنَ الْمُقَرَّبِيْنَ فَقَدْ جَاوَزَ هَذَا إِلَى عَدَمِ رُؤْيَتِهِ لِنَفْسِهِ فِي عَمَلِهِ فَإِخْلَاصُهُ إِنَّمَا هُوَ فِي شُهُوْدِ انْفِرَادِ الْحَقِّ تَعَالَى بِتَحْرِيْكِهِ وَتَسْكِيْنِهِ مِنْ غَيْرِ أَنْ يَرَى لِنَفْسِهِ فِي ذَلِكَ حَوْلًا وَلَا قُوَّةَ
          </p>

          <!-- PENJELASAN RINCI -->
          <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:12px; padding:1rem 1.1rem; color:#cbd5e1;">
            <div style="font-size:0.6rem; letter-spacing:0.12em; color:#fde68a; font-weight:800; margin-bottom:0.5rem;">PENJELASAN RINCI</div>
            <p style="font-size:0.82rem; line-height:1.75; margin:0 0 0.8rem;">
              Muqarrabin telah <b style="color:#fff;">melampaui maqam Abrar</b> sampai ke titik
              <b style="color:#fde68a;">tidak melihat dirinya sendiri</b> dalam amalnya. Ikhlasnya bukan sekadar menolak riya',
              tetapi menyaksikan <i>infiradul Haq</i> &mdash; Allah sendirian yang menggerakkan dan mendiamkan, tanpa melihat daya
              dan kekuatan dari dirinya sendiri sedikit pun. Inilah <i>la haula wa la quwwata illa billah</i> yang hidup.
            </p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(120px,1fr)); gap:0.5rem;">
              <div style="background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12); border-radius:9px; padding:0.6rem; text-align:center;">
                <div style="font-family:'Amiri',serif; font-size:0.95rem; color:#fde68a; font-weight:bold;" dir="rtl">تَحْرِيْكِهِ</div>
                <div style="font-size:0.65rem; color:#94a3b8; margin-top:0.2rem;">Allah yang menggerakkan</div>
              </div>
              <div style="background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12); border-radius:9px; padding:0.6rem; text-align:center;">
                <div style="font-family:'Amiri',serif; font-size:0.95rem; color:#fde68a; font-weight:bold;" dir="rtl">تَسْكِيْنِهِ</div>
                <div style="font-size:0.65rem; color:#94a3b8; margin-top:0.2rem;">Allah yang mendiamkan</div>
              </div>
              <div style="background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12); border-radius:9px; padding:0.6rem; text-align:center;">
                <div style="font-family:'Amiri',serif; font-size:0.9rem; color:#fde68a; font-weight:bold;" dir="rtl">لَا حَوْلَ وَلَا قُوَّةَ</div>
                <div style="font-size:0.65rem; color:#94a3b8; margin-top:0.2rem;">Tiada daya dariku</div>
              </div>
            </div>
          </div>

          <!-- SHIDQ -->
          <div style="background:linear-gradient(135deg,#fefce8,#fef3c7); border:1px solid #fde68a; border-radius:12px; padding:1rem 1.1rem; margin-top:1rem;">
            <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:2; direction:rtl; text-align:right; color:#78350f; margin:0 0 0.5rem; font-weight:bold;">
              وَيُعَبَّرُ عَنْ هَذَا الْمَقَامِ بِالصِّدْقِ الَّذِي يَصِحُّ بِهِ مَقَامُ الْإِخْلَاصِ
            </p>
            <p style="font-size:0.82rem; line-height:1.7; color:#78350f; margin:0;">
              Maqam ini diungkap dengan istilah <strong>Shidq</strong> (kejujuran tauhid) &mdash; yang dengannya sah maqam ikhlas.
              Ikhlas tanpa shidq masih rapuh. <strong>Shidq adalah jujur bahwa bukan aku yang beramal, tetapi Allah yang menjalankan.</strong>
            </p>
          </div>

          <!-- TAHQIQ WA IYYAKA NASTA'IN -->
          <div style="background:linear-gradient(140deg,#78350f,#92400e); border:1px solid #b45309; border-radius:12px; padding:1rem 1.1rem; margin-top:1rem; color:#fde68a;">
            <div style="font-size:0.6rem; letter-spacing:0.14em; color:#fef3c7; font-weight:800; margin-bottom:0.5rem;">TAHQIQ • وَإِيَّاكَ نَسْتَعِيْنُ</div>
            <p style="font-family:'Amiri',serif; font-size:1rem; line-height:1.95; direction:rtl; text-align:right; color:#fffbeb; margin:0 0 0.6rem;">
              وَصَاحِبُ هَذَا مَسْلُوْكٌ بِهِ سَبِيْلُ التَّوْحِيْدِ وَالْيَقِيْْنِ وَهُوَ مِنَ التَّحَقُّقِ بِمَعْنَى قَوْلِهِ تَعَالَى
              <span style="color:#fde68a; font-weight:bold;">وَإِيَّاكَ نَسْتَعِيْنُ</span> [الفاتحة: ٥]
              أَيْ لَا نَسْتَعِيْنُ إِلَّا بِكَ لَا بِأَنْفُسِنَا وَحَوْلِنَا وَقُوَّتِنَا
            </p>
            <p style="font-size:0.79rem; line-height:1.65; margin:0; color:#fde68a;">
              Orang ini ditempuhkan <b style="color:#fff;">jalan tauhid dan yaqin</b>. Titik beratnya: memurnikan
              <i>musta'an</i> (tempat minta tolong) &mdash; bukan kepada diri, daya, dan kekuatan sendiri.
            </p>
          </div>

          <div style="margin-top:1rem; background:rgba(197,155,39,0.08); border:1px solid #fde68a; border-radius:10px; padding:0.7rem 0.85rem; display:flex; gap:0.7rem; align-items:flex-start;">
            <i class="fa-solid fa-sparkles" style="color:var(--accent); margin-top:0.2rem;"></i>
            <p style="font-size:0.78rem; line-height:1.6; color:var(--text-muted); margin:0;">
              <strong style="color:var(--primary);">Visual hati:</strong> Hati fana dari melihat diri. Tidak lagi berkata
              "aku beramal", tetapi "Allah yang menggerakkan aku beramal". Yang ada hanya <i>syuhud</i> &mdash;
              penyaksian Allah sebagai <em>Fa'il hakiki</em>.
            </p>
          </div>

          <div style="margin-top:0.7rem; display:flex; align-items:center; justify-content:space-between; background:rgba(197,155,39,0.14); border:1px solid rgba(197,155,39,0.3); border-radius:9px; padding:0.55rem 0.85rem;">
            <span style="font-size:0.68rem; font-weight:800; letter-spacing:0.1em; color:#92400e;">MAQAM SHIDQ &bull; TAUHID AF'AL</span>
            <i class="fa-solid fa-circle" style="font-size:0.4rem; color:var(--accent);"></i>
          </div>
          <div style="margin-top:0.5rem; display:flex; align-items:center; gap:0.4rem; font-size:0.68rem; font-weight:700; color:#92400e;">
            <i class="fa-solid fa-circle" style="font-size:0.4rem; color:var(--accent);"></i> Fana dari diri &bull; Baqa dengan Allah &bull; Qurbah
          </div>
        </div>
      </div>

      <!-- ========== 04 • INTI HIKMAH — LILLAH vs BILLAH ========== -->
      <div style="background:linear-gradient(140deg,#0f172a,#1e3a5f,#0f172a); border-radius:16px; padding:1.4rem; margin-bottom:1.5rem; color:#e2e8f0;">
        <div style="text-align:center; margin-bottom:0.5rem;">
          <span style="background:rgba(197,155,39,0.18); border:1px solid rgba(197,155,39,0.3); color:#fde68a; font-size:0.6rem; letter-spacing:0.14em; font-weight:800; padding:4px 12px; border-radius:20px;">INTI HIKMAH • كَلَامُ الْإِمَامِ الْقُشَيْرِيِّ</span>
        </div>
        <div style="font-family:'Amiri',serif; font-size:1.15rem; line-height:1.9; text-align:center; color:#fff; margin:0.8rem 0 0.3rem; font-weight:bold;" dir="rtl">كَلَامُ الْإِمَامِ أَبِي الْقَاسِمِ الْقُشَيْرِيِّ رَضِيَ اللهُ عَنْهُ</div>
        <p style="text-align:center; font-size:0.8rem; color:#94a3b8; margin:0 0 1.1rem;">Perkataan Imam Abul Qasim Al-Qusyairi &mdash; 5 Pasang Pembeda Lillah vs Billah</p>

        <div style="display:flex; align-items:center; justify-content:center; gap:0.5rem; margin-bottom:1.1rem; flex-wrap:wrap;">
          <span style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.14); border-radius:10px; padding:0.45rem 0.9rem; text-align:center;">
            <div style="font-size:0.55rem; letter-spacing:0.12em; color:#94a3b8;">AWAL</div>
            <div style="font-family:'Amiri',serif; font-size:1.1rem; color:#fff; font-weight:bold;" dir="rtl">لِلَّهِ</div>
            <div style="font-size:0.55rem; color:#94a3b8;">LILLAH</div>
          </span>
          <i class="fa-solid fa-arrow-right-long" style="color:var(--accent);"></i>
          <span style="background:rgba(197,155,39,0.18); border:1px solid rgba(197,155,39,0.32); border-radius:10px; padding:0.45rem 0.9rem; text-align:center;">
            <div style="font-size:0.55rem; letter-spacing:0.12em; color:#fde68a;">AKHIR</div>
            <div style="font-family:'Amiri',serif; font-size:1.1rem; color:#fde68a; font-weight:bold;" dir="rtl">بِاللَّهِ</div>
            <div style="font-size:0.55rem; color:#fde68a;">BILLAH</div>
          </span>
        </div>

        <div style="background:#fff; border-radius:14px; overflow:hidden;">
          <!-- HEADER TABEL -->
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); background:#0f172a; color:#fff;">
            <div style="padding:0.65rem 0.9rem; display:flex; align-items:center; gap:0.5rem;">
              <span style="width:24px; height:24px; border-radius:50%; background:rgba(255,255,255,0.12); display:inline-flex; align-items:center; justify-content:center; font-size:0.65rem; flex-shrink:0;">1</span>
              <div>
                <div style="font-size:0.55rem; letter-spacing:0.12em; color:#94a3b8;">MAQAM ABRAR</div>
                <div style="font-size:0.8rem; font-weight:800;">Amal LILLAH</div>
              </div>
            </div>
            <div style="padding:0.65rem 0.9rem; display:flex; align-items:center; gap:0.5rem; background:rgba(197,155,39,0.16);">
              <span style="width:24px; height:24px; border-radius:50%; background:var(--accent); color:#0f172a; display:inline-flex; align-items:center; justify-content:center; font-size:0.65rem; font-weight:800; flex-shrink:0;">2</span>
              <div>
                <div style="font-size:0.55rem; letter-spacing:0.12em; color:#fde68a;">MAQAM MUQARRABIN</div>
                <div style="font-size:0.8rem; font-weight:800; color:#fff;">Amal BILLAH</div>
              </div>
            </div>
          </div>

          <!-- PASANG 1 -->
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); border-top:1px solid var(--border-color); background:#fffbfa;">
            <div style="padding:0.8rem 0.9rem;">
              <div style="font-family:'Amiri',serif; font-size:1rem; color:var(--primary); font-weight:bold; text-align:right;" dir="rtl">فَعَمَلُ الْأَوَّلِ هُوَ الْعَمَلُ لِلَّهِ تَعَالَى</div>
              <span style="display:inline-block; margin-top:0.35rem; background:#0f172a; color:#fff; font-size:0.62rem; font-weight:700; padding:3px 9px; border-radius:20px;">Amal karena Allah, untuk Allah</span>
            </div>
            <div style="padding:0.8rem 0.9rem; background:linear-gradient(135deg,#fefce8,#fef9c3);">
              <div style="font-family:'Amiri',serif; font-size:1rem; color:#92400e; font-weight:bold; text-align:right;" dir="rtl">وَعَمَلُ الثَّانِي هُوَ الْعَمَلُ بِاللَّهِ</div>
              <span style="display:inline-block; margin-top:0.35rem; background:var(--accent); color:#0f172a; font-size:0.62rem; font-weight:800; padding:3px 9px; border-radius:20px;">Amal dengan Allah, bersama Allah</span>
            </div>
          </div>

          <!-- PASANG 2 -->
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); border-top:1px solid var(--border-color);">
            <div style="padding:0.8rem 0.9rem;">
              <div style="font-family:'Amiri',serif; font-size:1rem; color:var(--primary); font-weight:bold; text-align:right;" dir="rtl">فَالْعَمَلُ لِلَّهِ يُوْجِبُ الْمَثُوْبَةَ</div>
              <span style="display:inline-block; margin-top:0.35rem; background:rgba(13,74,62,0.08); color:#065f46; font-size:0.62rem; font-weight:700; padding:3px 9px; border-radius:20px;">Mendapat jazil tsawab &amp; husnul maab</span>
            </div>
            <div style="padding:0.8rem 0.9rem; background:linear-gradient(135deg,#fefce8,#fef9c3);">
              <div style="font-family:'Amiri',serif; font-size:1rem; color:#92400e; font-weight:bold; text-align:right;" dir="rtl">وَالْعَمَلُ بِاللَّهِ يُوْجِبُ الْقُرْبَةَ</div>
              <span style="display:inline-block; margin-top:0.35rem; background:rgba(197,155,39,0.2); color:#78350f; font-size:0.62rem; font-weight:800; padding:3px 9px; border-radius:20px;">Mendapat qurbah &amp; ma'iyyah Ilahiyyah</span>
            </div>
          </div>

          <!-- PASANG 3 -->
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); border-top:1px solid var(--border-color); background:#fffbfa;">
            <div style="padding:0.8rem 0.9rem;">
              <div style="font-family:'Amiri',serif; font-size:1rem; color:var(--primary); font-weight:bold; text-align:right;" dir="rtl">وَالْعَمَلُ لِلَّهِ يُوْجِبُ تَحْقِيْقَ الْعِبَادَةِ</div>
              <span style="display:inline-block; margin-top:0.35rem; background:rgba(13,74,62,0.08); color:#065f46; font-size:0.62rem; font-weight:700; padding:3px 9px; border-radius:20px;">Tahqiq dhahir ibadah yang sempurna</span>
            </div>
            <div style="padding:0.8rem 0.9rem; background:linear-gradient(135deg,#fefce8,#fef9c3);">
              <div style="font-family:'Amiri',serif; font-size:1rem; color:#92400e; font-weight:bold; text-align:right;" dir="rtl">وَالْعَمَلُ بِاللَّهِ يُوْجِبُ تَصْحِيْحَ الْإِرَادَةِ</div>
              <span style="display:inline-block; margin-top:0.35rem; background:rgba(197,155,39,0.2); color:#78350f; font-size:0.62rem; font-weight:800; padding:3px 9px; border-radius:20px;">Tashhih batin &mdash; iradah lurus hanya Allah</span>
            </div>
          </div>

          <!-- PASANG 4 -->
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); border-top:1px solid var(--border-color);">
            <div style="padding:0.8rem 0.9rem;">
              <div style="font-family:'Amiri',serif; font-size:1rem; color:var(--primary); font-weight:bold; text-align:right;" dir="rtl">وَالْعَمَلُ لِلَّهِ نَعْتُ كُلِّ عَابِدٍ</div>
              <span style="display:inline-block; margin-top:0.35rem; background:rgba(13,74,62,0.08); color:#065f46; font-size:0.62rem; font-weight:700; padding:3px 9px; border-radius:20px;">Ciri umum ahli ibadah yang baik</span>
            </div>
            <div style="padding:0.8rem 0.9rem; background:linear-gradient(135deg,#fefce8,#fef9c3);">
              <div style="font-family:'Amiri',serif; font-size:1rem; color:#92400e; font-weight:bold; text-align:right;" dir="rtl">وَالْعَمَلُ بِاللَّهِ نَعْتُ كُلِّ قَاصِدٍ</div>
              <span style="display:inline-block; margin-top:0.35rem; background:rgba(197,155,39,0.2); color:#78350f; font-size:0.62rem; font-weight:800; padding:3px 9px; border-radius:20px;">Ciri khusus yang sedang menuju (salik)</span>
            </div>
          </div>

          <!-- PASANG 5 -->
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); border-top:1px solid var(--border-color); background:#fffbfa;">
            <div style="padding:0.8rem 0.9rem;">
              <div style="font-family:'Amiri',serif; font-size:1rem; color:var(--primary); font-weight:bold; text-align:right;" dir="rtl">وَالْعَمَلُ لِلَّهِ قِيَامٌ بِأَحْكَامِ الظَّوَاهِرِ</div>
              <span style="display:inline-block; margin-top:0.35rem; background:rgba(13,74,62,0.08); color:#065f46; font-size:0.62rem; font-weight:700; padding:3px 9px; border-radius:20px;">Qiyam dengan syariat lahir</span>
            </div>
            <div style="padding:0.8rem 0.9rem; background:linear-gradient(135deg,#fefce8,#fef9c3);">
              <div style="font-family:'Amiri',serif; font-size:1rem; color:#92400e; font-weight:bold; text-align:right;" dir="rtl">وَالْعَمَلُ بِاللَّهِ قِيَامٌ بِالضَّمَائِرِ</div>
              <span style="display:inline-block; margin-top:0.35rem; background:rgba(197,155,39,0.2); color:#78350f; font-size:0.62rem; font-weight:800; padding:3px 9px; border-radius:20px;">Qiyam dengan hakikat batin &amp; sirr</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ========== 05 • PENUTUP — HIDUP VS MATI ========== -->
      <div style="background:linear-gradient(140deg,#064e3b,#0d4a3e,#064e3b); border:1px solid #065f46; border-radius:16px; padding:1.4rem; margin-bottom:1.5rem; color:#a7f3d0;">
        <div style="text-align:center; margin-bottom:0.4rem;">
          <span style="background:var(--accent); color:#0f172a; font-size:0.6rem; letter-spacing:0.12em; font-weight:800; padding:4px 12px; border-radius:20px;">PENUTUP • الْخَاتِمَةُ</span>
        </div>
        <div style="text-align:center; font-size:1.05rem; font-weight:800; color:#fff; margin:0.7rem 0 0.2rem;">Ruh Amal &mdash; Hidup &amp; Matinya Amal</div>
        <div style="text-align:center; font-family:'Amiri',serif; font-size:1.05rem; color:var(--accent); margin-bottom:1rem;" dir="rtl">وَبِهَذَا يَتَبَيَّنُ الْفَرْقُ بَيْنَ الْمَقَامَيْنِ</div>

        <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); border-radius:12px; padding:1.1rem; margin-bottom:1.1rem;">
          <p style="font-family:'Amiri',serif; font-size:1.1rem; line-height:2; direction:rtl; text-align:right; color:#fef3c7; margin:0 0 0.5rem; font-weight:600;">
            وَبِهَذَا يَتَبَيَّنُ الْفَرْقُ بَيْنَ الْمَقَامَيْنِ وَتَبَايُنُهُمَا فِي الشَّرَفِ وَالْجَلَالَةِ
          </p>
          <p style="font-size:0.82rem; line-height:1.7; color:#a7f3d0; margin:0;">
            Dengan ini menjadi jelas perbedaan antara dua maqam tersebut, dan jauhnya perbedaan keduanya dalam kemuliaan dan keagungan.
            Maqam Abrar mulia, maqam Muqarrabin <strong style="color:#fef3c7;">lebih mulia</strong>.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:0.85rem;">
          <!-- ADA IKHLAS -->
          <div>
            <p style="font-family:'Amiri',serif; font-size:1rem; line-height:2; direction:rtl; text-align:right; color:#fff; margin:0 0 0.6rem;">
              فَإِخْلَاصُ كُلِّ عَبْدٍ هُوَ رُوْحُ أَعْمَالِهِ؛ فَبِوُجُوْدِ ذَلِكَ تَكُوْنُ حَيَاتُهَا وَصَلَاحِيَّتُهَا لِلتَّقَرُّبِ بِهَا
            </p>
            <div style="background:rgba(16,185,129,0.14); border:1px solid rgba(52,211,153,0.3); border-radius:10px; padding:0.8rem 0.9rem;">
              <div style="font-size:0.58rem; letter-spacing:0.12em; color:#6ee7b7; font-weight:800; margin-bottom:0.5rem;">JIKA ADA IKHLAS &rarr; AMAL HIDUP</div>
              <div style="font-size:0.79rem; line-height:1.6; color:#d1fae5; padding-left:0.9rem; position:relative;">
                <div><strong style="color:#fff;">Hayatuha:</strong> hidup, bergerak, bernilai</div>
                <div><strong style="color:#fff;">Shalahiyatuha lit-taqarrub:</strong> layak dijadikan alat mendekat kepada Allah</div>
                <div><strong style="color:#fff;">Ahliyyatul qabul:</strong> ada kelayakan untuk diterima di sisi Allah</div>
              </div>
            </div>
          </div>

          <!-- TIDAK ADA IKHLAS -->
          <div>
            <p style="font-family:'Amiri',serif; font-size:1rem; line-height:2; direction:rtl; text-align:right; color:rgba(255,255,255,0.45); margin:0 0 0.6rem;">
              وَبِعَدَمِ ذَلِكَ يَكُوْنُ مَوْتُهَا وَسُقُوْطُهَا عَنْ دَرَجَةِ الْاِعْتِبَارِ
            </p>
            <div style="background:rgba(239,68,68,0.12); border:1px solid rgba(248,113,113,0.28); border-radius:10px; padding:0.8rem 0.9rem;">
              <div style="font-size:0.58rem; letter-spacing:0.12em; color:#fca5a5; font-weight:800; margin-bottom:0.5rem;">JIKA TIADA IKHLAS &rarr; AMAL MATI</div>
              <div style="font-size:0.79rem; line-height:1.6; color:#e2e8f0; padding-left:0.9rem; position:relative;">
                <div><strong style="color:#fff;">Mautuha:</strong> mati, tak bernyawa</div>
                <div><strong style="color:#fff;">Suquthuha 'an darajat i'tibar:</strong> gugur dari derajat diperhitungkan</div>
                <div><strong style="color:#fff;">Ashbahun bila arwah, shuwarun bila ma'ani:</strong> hantu tanpa ruh, gambar tanpa makna</div>
              </div>
            </div>
          </div>
        </div>

        <!-- VISUAL AKHIR -->
        <div style="margin-top:1.1rem; background:#fffbeb; border-radius:12px; padding:1rem 1.1rem; display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; color:#0f172a;">
          <div style="display:flex; gap:0.8rem; align-items:center;">
            <div style="width:58px; height:70px; border-radius:12px; background:rgba(15,23,42,0.08); border:1px solid rgba(15,23,42,0.15); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px; flex-shrink:0;">
              <div style="width:16px; height:16px; border-radius:50%; background:rgba(15,23,42,0.18);"></div>
              <div style="width:28px; height:18px; border-radius:3px; background:rgba(15,23,42,0.12);"></div>
              <span style="font-size:0.42rem; letter-spacing:0.12em; color:rgba(15,23,42,0.4);">KOSONG</span>
            </div>
            <div>
              <div style="font-family:'Amiri',serif; font-size:1rem; font-weight:bold; color:#0f172a;" dir="rtl">أَشْبَاحٌ بِلَا أَرْوَاحٍ</div>
              <p style="font-size:0.72rem; line-height:1.55; color:rgba(15,23,42,0.6); margin:0.25rem 0 0;">Jasad amal ada, ruku sujud lengkap, tapi hampa &mdash; karena tidak ada sirrul ikhlas. Tidak naik, tidak diterima.</p>
            </div>
          </div>
          <div style="display:flex; gap:0.8rem; align-items:center;">
            <div style="width:58px; height:70px; border-radius:12px; background:linear-gradient(180deg,rgba(197,155,39,0.3),rgba(197,155,39,0.1)); border:1px solid rgba(197,155,39,0.45); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px; flex-shrink:0; box-shadow:0 0 18px rgba(197,155,39,0.2);">
              <div style="width:16px; height:16px; border-radius:50%; background:var(--accent); box-shadow:0 0 8px rgba(197,155,39,0.6);"></div>
              <div style="width:28px; height:18px; border-radius:3px; background:rgba(197,155,39,0.6);"></div>
              <div style="width:5px; height:5px; border-radius:50%; background:#fff;"></div>
              <span style="font-size:0.42rem; letter-spacing:0.12em; color:#92400e; font-weight:800;">BER-RUH</span>
            </div>
            <div>
              <div style="font-family:'Amiri',serif; font-size:1rem; font-weight:bold; color:#0f172a;" dir="rtl">صُوَرٌ بِأَرْوَاحٍ وَمَعَانٍ</div>
              <p style="font-size:0.72rem; line-height:1.55; color:rgba(15,23,42,0.65); margin:0.25rem 0 0;">Jasad yang sama, tapi di dalamnya ada ruh &mdash; sirrul ikhlas. Hidup, layak jadi qurbah, ada kelayakan qabul.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ========== 06 • KALAM MASYAYIKH ========== -->
      <div style="background:linear-gradient(135deg,#fefce8,#fef3c7); border:1px solid var(--accent); border-radius:16px; padding:1.4rem; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.9rem;">
          <span style="width:32px; height:32px; border-radius:8px; background:linear-gradient(135deg,#fde68a,#c59b27); color:#78350f; display:inline-flex; align-items:center; justify-content:center; font-size:0.8rem;"><i class="fa-solid fa-star"></i></span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.14em; color:#8a6d1b; font-weight:800;">KALAM MASYAYIKH • قَوْلُ الْمَشَايِخِ</div>
            <div style="font-weight:800; color:#78350f; font-size:0.95rem;">Dua Langkah Membenahi Amal</div>
          </div>
        </div>

        <div style="background:#fff; border:1px solid #fde68a; border-radius:12px; padding:1rem 1.1rem; margin-bottom:1rem;">
          <div style="font-family:'Amiri',serif; font-size:1.05rem; line-height:2; direction:rtl; text-align:right; color:#78350f; margin:0; font-weight:600;">
            قَالَ بَعْضُ الْمَشَايِخِ:
            <span style="color:#92400e; font-weight:bold;">صَحِّحْ عَمَلَكَ بِالْإِخْلَاصِ وَصَحِّحْ إِخْلَاصَكَ بِالتَّبَرِّي مِنَ الْحَوْلِ وَالْقُوَّةِ</span>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:0.7rem; margin-bottom:0.9rem;">
          <div style="background:#fff; border:1px solid #fde68a; border-radius:10px; padding:0.75rem 0.9rem;">
            <div style="font-family:'Amiri',serif; font-size:1rem; font-weight:bold; color:#0f172a; margin-bottom:0.3rem;" dir="rtl">صَحِّحْ عَمَلَكَ بِالْإِخْلَاصِ</div>
            <p style="font-size:0.77rem; line-height:1.6; color:rgba(15,23,42,0.65); margin:0;">Benarkan amalmu dengan ikhlas &mdash; ini maqam Abrar: bersihkan dari riya jali khafi &amp; hawa nafsu. <strong>Iyyaka na'budu.</strong></p>
          </div>
          <div style="background:#0f172a; border:1px solid #0f172a; border-radius:10px; padding:0.75rem 0.9rem;">
            <div style="font-family:'Amiri',serif; font-size:1rem; font-weight:bold; color:#fde68a; margin-bottom:0.3rem;" dir="rtl">صَحِّحْ إِخْلَاصَكَ بِالتَّبَرِّي مِنَ الْحَوْلِ وَالْقُوَّةِ</div>
            <p style="font-size:0.77rem; line-height:1.6; color:rgba(255,255,255,0.7); margin:0;">Benarkan ikhlasmu dengan berlepas dari daya &amp; kekuatan &mdash; ini maqam Muqarrabin: tidak melihat diri, hanya Allah. <strong style="color:#fff;">Wa iyyaka nasta'in.</strong></p>
          </div>
        </div>

        <p style="font-size:0.8rem; line-height:1.7; color:#6b5f4a; margin:0; border-left:3px solid var(--accent); padding-left:0.85rem;">
          Ringkasnya: <strong>langkah 1</strong> sahkan jasad amal dengan ruh ikhlas.
          <strong>Langkah 2</strong> sahkan ruh ikhlas itu sendiri dengan tauhid &mdash; lepas dari perasaan punya daya.
        </p>
      </div>

      <!-- ================= RINGKASAN ================= -->
      <div style="background:var(--bg-card); border:1px solid var(--accent); border-left:5px solid var(--accent); border-radius:14px; padding:1.1rem 1.25rem; margin-bottom:1.5rem; display:flex; align-items:flex-start; gap:0.85rem;">
        <span style="width:38px; height:38px; border-radius:50%; background:var(--primary); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-size:0.95rem; flex-shrink:0;"><i class="fa-solid fa-feather-pointed"></i></span>
        <div>
          <p style="font-size:0.85rem; line-height:1.7; color:var(--text-main); margin:0;">
            <strong style="color:var(--primary);">Ringkas Hikmah 10:</strong>
            Amal adalah jasad &mdash; dan <em>ruh</em>-nya adalah ikhlas. Tanpa ikhlas, amal adalah
            <span dir="rtl" style="font-family:'Amiri',serif;">أَشْبَاحٌ بِلَا أَرْوَاحٍ</span>. Ikhlas pun bertingkat:
            <strong>Abrar</strong> (bersih dari riya &amp; hawa nafsu) &rarr; <strong>Muqarrabin</strong> (fana dari melihat diri).
          </p>
        </div>
      </div>

      <!-- ================= PENUTUP ================= -->
      <div style="text-align:center; padding:1.5rem 0 0.5rem; border-top:1px solid var(--border-color);">
        <p style="font-family:'Amiri',serif; font-size:1.25rem; line-height:1.9; color:var(--primary); margin:0 0 0.5rem;">تَمَّتِ الْحِكْمَةُ الْعَاشِرَةُ بِحَمْدِ اللهِ</p>
        <span style="font-size:0.65rem; letter-spacing:0.16em; color:var(--text-muted); font-weight:700;">SYARAH AL-HIKAM • IBNU 'ABBAD • HIKMAH 10</span>
      </div>
    `;
  },
};
