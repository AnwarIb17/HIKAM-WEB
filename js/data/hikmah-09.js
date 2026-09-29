// Data Materi Hikmah #09: Syarah Ibnu 'Abbad ar-Rundi — Ragam Warid & Hal Qalbi
const hikmah09 = {
  id: 9,
  nomor: "09",
  judul: "Ragam Amal Lahir dari Ragam Warid Hati",
  kategori: "Warid & Hal Qalbi",
  arab: "تَنَوَّعَتْ أَجْنَاسُ الْأَعْمَالِ لِتَنَوُّعِ وَارِدَاتِ الْأَحْوَالِ",
  terjemah:
    "Beragamnya jenis-jenis amal itu karena beragamnya warid (bisikan ilahi) yang masuk ke dalam keadaan hati.",
  isReady: true,
  renderContent: function () {
    return `
      <!-- ================= HEADER KAJIAN ================= -->
      <div style="text-align:center; margin-bottom:1.5rem; border-bottom:1px solid var(--border-color); padding-bottom:1rem;">
        <span class="meta-badge-top">SYARAH AL-HIKAM • IBNU 'ABBAD • HIKMAH 09</span>
        <div style="display:flex; justify-content:center; gap:1rem; font-size:0.78rem; color:var(--text-muted); margin-top:0.5rem; flex-wrap:wrap;">
          <span><strong>Fokus:</strong> Warid &amp; Hal</span>
          <span><strong>Klasifikasi:</strong> 4 Warni Hati</span>
          <span><strong>Kunci:</strong> Warid &rarr; Hal &rarr; Amal</span>
        </div>
      </div>

      <!-- ================= MATAN UTAMA ================= -->
      <div style="text-align:center; margin-bottom:2rem;">
        <div style="font-size:1.7rem; font-family:'Amiri',serif; line-height:2.15; color:var(--primary); direction:rtl; font-weight:bold; background:var(--bg-card); border-right:4px solid var(--accent); border-radius:12px; padding:1.4rem;">
          تَنَوَّعَتْ أَجْنَاسُ الْأَعْمَالِ<br>
          لِتَنَوُّعِ وَارِدَاتِ الْأَحْوَالِ
        </div>
        <div style="margin:1rem auto 0; max-width:700px; background:rgba(197,155,39,0.06); border-left:4px solid var(--accent); padding:0.9rem 1.15rem; border-radius:8px; text-align:left;">
          <h4 style="margin-bottom:0.35rem; color:var(--primary); font-size:0.85rem; letter-spacing:0.08em;"><i class="fa-solid fa-language"></i> TERJEMAHAN:</h4>
          <p style="font-size:0.93rem; line-height:1.8; font-weight:500; color:var(--text-main); margin:0;">
            Beragamnya jenis-jenis amal itu karena beragamnya <strong>warid-warid (bisikan ilahi)</strong> yang masuk ke dalam keadaan hati.
          </p>
        </div>
        <div style="margin-top:0.9rem; display:flex; justify-content:center; gap:0.4rem; flex-wrap:wrap; font-size:0.7rem;">
          <span class="count-badge">Ma'rifat Rabbaniyah</span>
          <span class="count-badge">Asrar Ruhaniyah</span>
          <span class="count-badge">Hal Qalbi</span>
          <span class="count-badge">Amal Dzahir</span>
        </div>
      </div>

      <!-- ========== 01 • DEFINISI WARIDATUL AHWAL ========== -->
      <div style="background:linear-gradient(135deg,#ecfdf5,#d1fae5); border:1px solid #a7f3d0; border-radius:16px; padding:1.4rem; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.9rem;">
          <span style="width:32px; height:32px; border-radius:8px; background:#064e3b; color:#a7f3d0; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">01</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:#047857; font-weight:700;">DEFINISI SYARAH • INTI HIKMAH</div>
            <div style="font-weight:800; color:#064e3b; font-size:0.95rem;">Apa Itu Waridatul Ahwal?</div>
          </div>
        </div>

        <div style="background:#fff; border:1px solid #a7f3d0; border-radius:12px; padding:1rem 1.1rem; margin-bottom:1rem;">
          <span style="display:inline-block; background:#064e3b; color:#d1fae5; font-size:0.6rem; font-weight:800; letter-spacing:0.1em; padding:3px 10px; border-radius:20px;">النَّصُّ الأَصْلِيُّ</span>
          <p style="font-family:'Amiri',serif; font-size:1.15rem; line-height:1.95; direction:rtl; text-align:right; color:#064e3b; margin:0.7rem 0 0; font-weight:bold;">
            وَارِدَاتُ الْأَحْوَالِ هِيَ: مَا يَرِدُ عَلَى الْقُلُوْبِ مِنَ
            <span style="color:#047857;">الْمَعَارِفِ الرَّبَّانِيَّةِ</span>
            وَ<span style="color:#047857;">الْأَسْرَارِ الرُّوْحِيَّةِ</span>،
            وَهِيَ تُوْجِبُ لَهَا أَحْوَالًا حَمِيْدَةً
          </p>
        </div>

        <p style="font-size:0.9rem; line-height:1.8; color:#1f3a28; margin:0 0 1rem;">
          <strong>Waridatul ahwal</strong> adalah apa yang <span style="background:#fde68a; border:1px solid #f59e0b; padding:1px 6px; border-radius:4px; font-weight:700;">datang ke hati</span>
          berupa <i>ma'rifat Rabbaniyah</i> (pengenalan tentang Allah) dan <i>asrar ruhaniyah</i> (rahasia-rahasia ruhani),
          yang menyebabkan hati punya keadaan terpuji.
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:0.85rem; margin-bottom:1rem;">
          <div style="background:#064e3b; border:1px solid #065f46; border-radius:12px; padding:0.9rem 1rem; color:#d1fae5;">
            <div style="font-size:0.62rem; letter-spacing:0.1em; color:#fde68a; font-weight:800;">MA'ARIF RABBANIYAH</div>
            <p style="font-size:0.8rem; line-height:1.6; margin:0.35rem 0 0; color:#a7f3d0;">
              Pengenalan Allah: keagungan, kasih, dekat, kuasa — Allah yang memperkenalkan Diri-Nya ke hati.
            </p>
          </div>
          <div style="background:#fefce8; border:1px solid #fde68a; border-radius:12px; padding:0.9rem 1rem; color:#3d3420;">
            <div style="font-size:0.62rem; letter-spacing:0.1em; color:#92400e; font-weight:800;">ASRAR RUHANIYAH</div>
            <p style="font-size:0.8rem; line-height:1.6; margin:0.35rem 0 0;">
              Rahasia ruh: ilham lembut, rasa, kasyaf — Allah bukakan tabir sesuai kesiapan hati.
            </p>
          </div>
        </div>

        <div style="border:1px dashed #34d399; background:rgba(255,255,255,0.7); border-radius:10px; padding:0.8rem 1rem; font-size:0.82rem; line-height:1.7; color:#1f3a28;">
          <i class="fa-solid fa-key" style="color:#047857;"></i>
          <strong style="color:#065f46;"> Kunci:</strong> Hati tidak bisa membuat warid, tetapi bisa <u>menyiapkan wadah</u>
          dengan dzikir, tobat, dan ikhlas. Ketika warid datang, hati otomatis berubah — seluruhnya menjadi terpuji.
        </div>
      </div>

      <!-- ========== 02 • RAGAM WARID & HAL — 4 WARNA HATI ========== -->
      <div style="margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:0.4rem;">
          <span style="width:4px; height:28px; border-radius:20px; background:var(--accent); display:inline-block;"></span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:var(--text-muted); font-weight:700;">02 • SYARAH TERPERINCI IBNU 'ABBAD</div>
            <div style="font-weight:800; color:var(--primary); font-size:1.02rem;">Ragam Warid &amp; Hal — Empat Warni Hati</div>
          </div>
        </div>
        <p style="font-size:0.82rem; color:var(--text-muted); margin:0 0 1rem;">Allah mengirim warid berbeda-beda agar amal para hamba tidak monoton.</p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:0.85rem;">

          <!-- WARID 01 • HAIBAH -->
          <div style="background:#fff; border:1px solid #ddd6e7; border-radius:14px; padding:1rem; box-shadow:0 8px 20px rgba(15,23,42,0.05);">
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <span style="width:34px; height:34px; border-radius:10px; background:#2e2350; color:#e8d6ff; display:inline-flex; align-items:center; justify-content:center;"><i class="fa-solid fa-crown"></i></span>
              <div>
                <div style="font-size:0.6rem; letter-spacing:0.14em; color:#6b5a8a; font-weight:800;">WARID 01 — HAIBAH</div>
                <div style="font-weight:800; color:#2e2350; font-size:0.9rem;">Wibawa Takut Agung</div>
              </div>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.8; direction:rtl; text-align:right; color:#2e2350; background:#f3edff; border:1px solid #e3d8f5; border-radius:10px; padding:0.6rem 0.8rem; margin:0.85rem 0 0.7rem; font-weight:bold;">مِنْهَا وَارِدٌ يُوْجِبُ هَيْبَةً</p>
            <p style="font-size:0.8rem; line-height:1.65; color:#3a2e55; margin:0 0 0.65rem;">
              <strong>Makna:</strong> Warid yang menyebabkan <i>haibah</i> — hati merasa agungnya Allah, takut penuh hormat, kecil di hadapan Kebesaran-Nya.
            </p>
            <div style="background:#2e2350; color:#ede2ff; border-radius:9px; padding:0.6rem 0.75rem; font-size:0.77rem; line-height:1.6;">
              <i class="fa-solid fa-arrow-turn-down" style="color:#c59b27;"></i> <strong>Amalnya:</strong> diam (suhut), khusyu' mendalam, adab sempurna, menunduk, tidak banyak bicara, shalat lama.
            </div>
          </div>

          <!-- WARID 02 • UNS -->
          <div style="background:#fff; border:1px solid #f0d5d5; border-radius:14px; padding:1rem; box-shadow:0 8px 20px rgba(15,23,42,0.05);">
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <span style="width:34px; height:34px; border-radius:10px; background:#7a2a2a; color:#ffd6d6; display:inline-flex; align-items:center; justify-content:center;"><i class="fa-solid fa-heart"></i></span>
              <div>
                <div style="font-size:0.6rem; letter-spacing:0.14em; color:#9a5a5a; font-weight:800;">WARID 02 — UNS</div>
                <div style="font-weight:800; color:#5a1e1e; font-size:0.9rem;">Keakraban Mesra</div>
              </div>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.8; direction:rtl; text-align:right; color:#5a1e1e; background:#fff0f0; border:1px solid #f5d1d1; border-radius:10px; padding:0.6rem 0.8rem; margin:0.85rem 0 0.7rem; font-weight:bold;">وَمِنْهَا وَارِدٌ يُوْجِبُ أُنْسًا</p>
            <p style="font-size:0.8rem; line-height:1.65; color:#5a2a2a; margin:0 0 0.65rem;">
              <strong>Makna:</strong> Warid yang menyebabkan <i>uns</i> — hati merasa dekat mesra dengan Allah, seperti kekasih yang rindu, hangat dan manis.
            </p>
            <div style="background:#5a1e1e; color:#ffdcdc; border-radius:9px; padding:0.6rem 0.75rem; font-size:0.77rem; line-height:1.6;">
              <i class="fa-solid fa-arrow-turn-down" style="color:#ffcda3;"></i> <strong>Amalnya:</strong> munajat panjang, tangis rindu, dzikir lembut berbisik, doa mesra, qiyamullail penuh cinta.
            </div>
          </div>

          <!-- WARID 03 • QABDH -->
          <div style="background:#fff; border:1px solid #cdd6e3; border-radius:14px; padding:1rem; box-shadow:0 8px 20px rgba(15,23,42,0.05);">
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <span style="width:34px; height:34px; border-radius:10px; background:#23344e; color:#c9daf0; display:inline-flex; align-items:center; justify-content:center;"><i class="fa-solid fa-cloud-rain"></i></span>
              <div>
                <div style="font-size:0.6rem; letter-spacing:0.14em; color:#5a6f8a; font-weight:800;">WARID 03 — QABDH</div>
                <div style="font-weight:800; color:#23344e; font-size:0.9rem;">Sempit / Sedih</div>
              </div>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.8; direction:rtl; text-align:right; color:#23344e; background:#eef3ff; border:1px solid #d2dced; border-radius:10px; padding:0.6rem 0.8rem; margin:0.85rem 0 0.7rem; font-weight:bold;">وَمِنْهَا وَارِدٌ يُوْجِبُ قَبْضًا</p>
            <p style="font-size:0.8rem; line-height:1.65; color:#2e3f55; margin:0 0 0.65rem;">
              <strong>Makna:</strong> Warid yang menyebabkan <i>qabdh</i> — hati merasa sempit, sedih, berat. Ini bukan murung dunia, tetapi Allah menarik agar hati kembali.
            </p>
            <div style="background:#23344e; color:#d6e3f5; border-radius:9px; padding:0.6rem 0.75rem; font-size:0.77rem; line-height:1.6;">
              <i class="fa-solid fa-arrow-turn-down" style="color:#a7c7e7;"></i> <strong>Amalnya:</strong> sabar, tafakkur (merenung dosa &amp; hikmah), istighfar banyak, muhasabah, menyendiri untuk kembali.
            </div>
          </div>

          <!-- WARID 04 • BASTH -->
          <div style="background:#fff; border:1px solid #e8d6a0; border-radius:14px; padding:1rem; box-shadow:0 8px 20px rgba(15,23,42,0.05);">
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <span style="width:34px; height:34px; border-radius:10px; background:#6b4a0a; color:#ffe9a6; display:inline-flex; align-items:center; justify-content:center;"><i class="fa-solid fa-sun"></i></span>
              <div>
                <div style="font-size:0.6rem; letter-spacing:0.14em; color:#8a6f3a; font-weight:800;">WARID 04 — BASTH</div>
                <div style="font-weight:800; color:#5a3f0a; font-size:0.9rem;">Lapang / Gembira</div>
              </div>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.8; direction:rtl; text-align:right; color:#5a3f0a; background:#fff8df; border:1px solid #e8d6a0; border-radius:10px; padding:0.6rem 0.8rem; margin:0.85rem 0 0.7rem; font-weight:bold;">وَمِنْهَا وَارِدٌ يُوْجِبُ بَسْطًا</p>
            <p style="font-size:0.8rem; line-height:1.65; color:#5a4a2a; margin:0 0 0.65rem;">
              <strong>Makna:</strong> Warid yang menyebabkan <i>basth</i> — hati merasa lapang, gembira, lega, energi ibadah meluap.
            </p>
            <div style="background:#5a3f0a; color:#fff0c0; border-radius:9px; padding:0.6rem 0.75rem; font-size:0.77rem; line-height:1.6;">
              <i class="fa-solid fa-arrow-turn-down" style="color:#ffe9a6;"></i> <strong>Amalnya:</strong> syukur melimpah, berbagi, dakwah, membantu orang, shalawat gembira, senyum ibadah.
            </div>
          </div>
        </div>

        <!-- WARID LAINNYA -->
        <div style="margin-top:0.85rem; background:var(--bg-card); border:1px solid var(--border-color); border-radius:14px; padding:0.9rem 1.1rem; display:flex; gap:0.85rem; align-items:flex-start;">
          <span style="width:28px; height:28px; border-radius:50%; background:var(--primary); color:#fff; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.85rem; flex-shrink:0;">+</span>
          <div>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.85; direction:rtl; text-align:right; color:var(--primary); margin:0 0 0.35rem; font-weight:bold;">إِلَى غَيْرِ ذَلِكَ مِنْ مُخْتَلِفَاتِ الْأَحْوَالِ</p>
            <p style="font-size:0.8rem; line-height:1.65; color:var(--text-muted); margin:0;">
              Dan masih banyak lagi hal lain: ada warid <strong>syauq</strong> (rindu membara), <strong>hayā'</strong> (malu kepada Allah),
              <strong>mahabbah</strong> (cinta), <strong>ridha</strong>, <strong>tawakkul</strong>, <strong>syukr</strong>, <strong>khauf</strong>,
              <strong>raja'</strong>... Semua Allah kirim bergantian agar hati hidup dan tidak beku dalam satu rasa saja.
            </p>
          </div>
        </div>
      </div>

      <!-- ========== 03 • KAIDAH EMAS ========== -->
      <div style="background:linear-gradient(135deg,#fefce8,#fef3c7); border:1px solid #fde68a; border-radius:16px; padding:1.4rem; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.9rem;">
          <span style="width:32px; height:32px; border-radius:8px; background:#0f172a; color:#fde68a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">03</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:#92400e; font-weight:700;">الْقَاعِدَةُ الذَّهَبِيَّةُ • KAIDAH EMAS</div>
            <div style="font-weight:800; color:#78350f; font-size:0.95rem;">Mengapa Amalpun Beragam?</div>
          </div>
        </div>

        <div style="background:#fff; border:1px solid #fde68a; border-radius:12px; padding:1rem 1.1rem; margin-bottom:1rem;">
          <p style="font-family:'Amiri',serif; font-size:1.1rem; line-height:1.95; direction:rtl; text-align:right; color:#78350f; margin:0; font-weight:bold;">
            وَلَمَّا كَانَتْ هَذِهِ الْوَارِدَاتُ مُتَنَوِّعَةً كَانَتْ أَجْنَاسُ الْأَعْمَالِ الَّتِي تَقْتَضِيهَا هَذِهِ الْوَارِدَاتُ أَيْضًا مُتَنَوِّعَةً
          </p>
        </div>

        <p style="font-size:0.88rem; line-height:1.75; color:#4a3f26; margin:0 0 0.85rem;">
          <strong>Penjelasan:</strong> Karena waridnya beragam, maka jenis amal yang
          <span style="background:#0f172a; color:#ffe9a6; padding:1px 6px; border-radius:4px; font-weight:700;">dituntut oleh warid</span>
          itu juga beragam. Allah tidak mau amalmu monoton.
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:0.6rem; margin-bottom:0.9rem;">
          <div style="background:#fff; border:1px solid #eaddbd; border-radius:10px; padding:0.6rem 0.75rem; font-size:0.78rem; color:#78350f;"><strong>Jika Haibah &rarr;</strong> Allah minta khusyu'</div>
          <div style="background:#fff; border:1px solid #eaddbd; border-radius:10px; padding:0.6rem 0.75rem; font-size:0.78rem; color:#78350f;"><strong>Jika Qabdh &rarr;</strong> Allah minta sabar</div>
          <div style="background:#fff; border:1px solid #eaddbd; border-radius:10px; padding:0.6rem 0.75rem; font-size:0.78rem; color:#78350f;"><strong>Jika Basth &rarr;</strong> Allah minta syukur</div>
        </div>

        <p style="font-size:0.8rem; line-height:1.65; color:#6b5f4a; font-style:italic; border-left:3px solid var(--accent); padding-left:0.85rem; margin:0;">
          <i class="fa-solid fa-lightbulb"></i> Hikmahnya: Allah sengaja memvariasikan warid supaya hamba merasakan seluruh maqam ubudiyah,
          bukan hanya satu rasa. Seperti guru yang mengajarkan murid dengan banyak latihan agar lengkap.
        </p>
      </div>

      <!-- ========== 04 • ALUR ILAHI ========== -->
      <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:16px; padding:1.4rem; margin-bottom:1.5rem; color:#f8fafc;">
        <div style="text-align:center; margin-bottom:0.9rem;">
          <span style="background:var(--accent); color:#0f172a; font-size:0.62rem; font-weight:800; letter-spacing:0.12em; padding:4px 12px; border-radius:20px;">ALUR ILAHI • مَرَاتِبُ الْقَلْبِ</span>
        </div>

        <div style="display:flex; flex-direction:column; align-items:stretch; gap:0.4rem; max-width:420px; margin:0 auto;">
          <div style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:12px; padding:0.7rem 1rem; text-align:center;">
            <div style="font-size:0.6rem; letter-spacing:0.12em; color:#fde68a; font-weight:800;">WARID DATANG</div>
            <div style="font-family:'Amiri',serif; font-size:1.05rem; color:#fef3c7; margin-top:0.2rem;">وَارِدَاتٌ مُتَنَوِّعَةٌ</div>
          </div>
          <div style="text-align:center; color:var(--accent); font-size:1.1rem; line-height:1;"><i class="fa-solid fa-arrow-down"></i></div>
          <div style="background:var(--accent); color:#0f172a; border-radius:12px; padding:0.7rem 1rem; text-align:center; font-weight:800;">
            <div style="font-size:0.6rem; letter-spacing:0.12em;">MENGHASILKAN</div>
            <div style="font-size:0.85rem; margin-top:0.2rem;">HAL HAMIDAH (keadaan terpuji)</div>
          </div>
          <div style="text-align:center; color:var(--accent); font-size:1.1rem; line-height:1;"><i class="fa-solid fa-arrow-down"></i></div>
          <div style="background:#fff; color:#0f172a; border:1px solid #eaddbd; border-radius:12px; padding:0.7rem 1rem; text-align:center; font-weight:800;">
            <div style="font-size:0.6rem; letter-spacing:0.12em; color:#8a7a5a;">MENUNTUT</div>
            <div style="font-size:0.85rem; margin-top:0.2rem;">AMAL YANG BERAGAM</div>
          </div>
        </div>

        <p style="margin:0.95rem auto 0; max-width:520px; text-align:center; font-size:0.78rem; line-height:1.65; color:#cbd5e1;">
          Allah yang mengatur kurikulum hati. Tugas kita: <strong style="color:#fde68a;">patuh pada warid yang datang</strong>,
          bukan memaksakan amal yang tidak sesuai keadaan hati.
        </p>
      </div>

      <!-- ========== 05 • KUNCI PENUTUP ========== -->
      <div style="background:linear-gradient(135deg,#064e3b,#0d4a3e); border:1px solid #065f46; border-radius:16px; padding:1.4rem; margin-bottom:1.5rem; color:#ecfdf5;">
        <div style="text-align:center; margin-bottom:0.9rem;">
          <span style="background:var(--accent); color:#0f172a; font-size:0.62rem; font-weight:800; letter-spacing:0.12em; padding:4px 12px; border-radius:20px;">KUNCI PENUTUP • الْمِفْتَاحُ</span>
        </div>

        <p style="font-family:'Amiri',serif; font-size:1.2rem; line-height:1.95; direction:rtl; text-align:center; color:#fff; margin:0 0 0.9rem; font-weight:bold;">
          وَالْأَعْمَالُ الظَّاهِرَةُ أَبَدًا تَبَعٌ لِأَحْوَالِ الْقُلُوْبِ الْبَاطِنَةِ
        </p>

        <p style="font-size:0.9rem; line-height:1.8; color:#d1fae5; text-align:center; margin:0 0 1rem;">
          <strong style="color:#fff;">Amal dhahir selamanya mengikuti keadaan batin hati.</strong>
          Bukan hati yang ikut amal, tetapi amal yang ikut hati. Hati adalah <em>raja</em>, anggota badan adalah <em>pasukannya</em>.
        </p>

        <div style="background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12); border-radius:12px; padding:0.9rem 1.1rem; text-align:center;">
          <div style="font-size:0.6rem; letter-spacing:0.12em; color:#fde68a; font-weight:800; margin-bottom:0.4rem;">KALAM YANG AKAN DATANG:</div>
          <div style="font-family:'Amiri',serif; font-size:1.25rem; line-height:1.8; color:#fde68a; font-weight:bold;">حُسْنُ الْأَعْمَالِ نَتَائِجُ حُسْنِ الْأَحْوَالِ</div>
          <p style="font-size:0.8rem; line-height:1.65; color:#a7f3d0; margin:0.5rem 0 0;">
            Bagusnya amal adalah hasil dari bagusnya keadaan hati. Perbaiki hal (keadaan batin),
            amal akan bagus dengan sendirinya — <strong style="color:#fff;">tanpa dibuat-buat</strong>.
          </p>
        </div>

        <div style="margin-top:1rem; display:flex; align-items:center; justify-content:center; gap:0.35rem; flex-wrap:wrap; font-size:0.68rem; font-weight:700;">
          <span style="background:rgba(255,255,255,0.1); color:#fde68a; padding:4px 10px; border-radius:20px; border:1px solid rgba(255,255,255,0.15);">قَلْب</span>
          <span style="color:var(--accent);">&#8595;</span>
          <span style="background:rgba(255,255,255,0.1); color:#a7f3d0; padding:4px 10px; border-radius:20px; border:1px solid rgba(255,255,255,0.15);">حَال</span>
          <span style="color:var(--accent);">&#8595;</span>
          <span style="background:rgba(255,255,255,0.1); color:#fecaca; padding:4px 10px; border-radius:20px; border:1px solid rgba(255,255,255,0.15);">عَمَل</span>
          <span style="color:var(--accent);">&#8595;</span>
          <span style="background:var(--accent); color:#0f172a; padding:4px 10px; border-radius:20px;">حَيَاة</span>
        </div>

        <p style="margin:1rem 0 0; text-align:center; font-size:0.78rem; line-height:1.65; color:#a7f3d0;">
          Jangan sibuk memperbaiki amal dhahir saja tanpa memperbaiki warid &amp; hal di hati.
          Seperti memoles buah tanpa memperbaiki akar — <strong style="color:#fde68a;">tidak akan manis lama.</strong>
        </p>
      </div>

      <!-- ========== 06 • KESIMPULAN PRAKTIS ========== -->
      <div style="margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
          <span style="width:4px; height:28px; border-radius:20px; background:var(--primary); display:inline-block;"></span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:var(--text-muted); font-weight:700;">06 • KESIMPULAN</div>
            <div style="font-weight:800; color:var(--primary); font-size:1.02rem;">Kesimpulan Praktis — Pegangan Salik</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:0.85rem;">
          <div style="background:#0f172a; border:1px solid #1e3a5f; border-radius:14px; padding:1rem;">
            <span style="width:30px; height:30px; border-radius:50%; background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.18); color:#fff; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem;">01</span>
            <h4 style="margin:0.6rem 0 0.4rem; font-size:0.88rem; color:#fff; line-height:1.4;">Jangan Heran Amal Ulama Beda-Beda</h4>
            <p style="font-size:0.79rem; line-height:1.65; color:#cbd5e1; margin:0 0 0.7rem;">
              Karena warid mereka berbeda. Ada ulama banyak diam (haibah), banyak tangis (uns), banyak sabar (qabdh),
              banyak berbagi (basth). Semua benar karena sesuai warid yang Allah kirim.
            </p>
            <div style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:9px; padding:0.5rem; text-align:center;">
              <span style="font-family:'Amiri',serif; font-size:1rem; color:#fde68a; font-weight:bold;">كُلٌّ يَعْمَلُ عَلَى شَاكِلَتِهِ</span>
            </div>
          </div>

          <div style="background:linear-gradient(135deg,#fefce8,#fef3c7); border:1px solid #fde68a; border-radius:14px; padding:1rem;">
            <span style="width:30px; height:30px; border-radius:50%; background:#0f172a; color:#fde68a; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem;">02</span>
            <h4 style="margin:0.6rem 0 0.4rem; font-size:0.88rem; color:#3a2e10; line-height:1.4;">Jangan Paksa Hati Melawan Warid</h4>
            <p style="font-size:0.79rem; line-height:1.65; color:#5a4a2a; margin:0 0 0.7rem;">
              Jika hati sedang <i>qabd</i> (sempit), jangan paksa untuk <i>basth</i>. Jika sedang <i>haibah</i> (takut agung),
              jangan paksa <i>uns</i> (bermesra berlebihan). Ikuti warid yang Allah berikan — itu adab.
            </p>
            <div style="background:rgba(255,255,255,0.75); border:1px solid #eaddbd; border-radius:9px; padding:0.5rem; text-align:center;">
              <span style="font-family:'Amiri',serif; font-size:1rem; color:#78350f; font-weight:bold;">أَدِّبْ قَلْبَكَ مَعَ وَارِدِ رَبِّكَ</span>
            </div>
          </div>

          <div style="background:linear-gradient(135deg,#ecfdf5,#d1fae5); border:1px solid #a7f3d0; border-radius:14px; padding:1rem;">
            <span style="width:30px; height:30px; border-radius:50%; background:#064e3b; color:#a7f3d0; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.7rem;">03</span>
            <h4 style="margin:0.6rem 0 0.4rem; font-size:0.88rem; color:#0f2a1a; line-height:1.4;">Tugas Hamba: Jaga Hati, Amal Mengikuti</h4>
            <p style="font-size:0.79rem; line-height:1.65; color:#2f4a36; margin:0 0 0.7rem;">
              Jaga hati agar siap menerima warid: banyak istighfar, dzikir, jaga mata &amp; lisan, ikhlas.
              Jika wadah hati bersih, warid baik akan datang, hal jadi baik, amal otomatis baik.
            </p>
            <div style="background:rgba(255,255,255,0.75); border:1px solid #a7f3d0; border-radius:9px; padding:0.5rem; text-align:center;">
              <span style="font-family:'Amiri',serif; font-size:1rem; color:#064e3b; font-weight:bold;">أَصْلِحْ قَلْبَكَ يَصْلُحْ عَمَلُكَ</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= RINGKASAN ================= -->
      <div style="background:var(--bg-card); border:1px solid var(--accent); border-left:5px solid var(--accent); border-radius:14px; padding:1.1rem 1.25rem; margin-bottom:1.5rem; display:flex; align-items:flex-start; gap:0.85rem;">
        <span style="width:38px; height:38px; border-radius:50%; background:var(--primary); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-size:0.95rem; flex-shrink:0;"><i class="fa-solid fa-diamond"></i></span>
        <div>
          <p style="font-size:0.85rem; line-height:1.7; color:var(--text-main); margin:0;">
            <strong style="color:var(--primary);">Ringkas Hikmah 09:</strong>
            Warid turun dari Allah &rarr; menghasilkan <em>hal</em> di hati &rarr; menuntut <em>amal</em> yang sesuai.
            <br>
            <span style="color:var(--text-muted);">Maka sibukkan diri memperbaiki hati, bukan sekadar memperbanyak amal yang tidak bernyawa.</span>
          </p>
        </div>
      </div>

      <!-- ================= PENUTUP ================= -->
      <div style="text-align:center; padding:1.5rem 0 0.5rem; border-top:1px solid var(--border-color);">
        <p style="font-family:'Amiri',serif; font-size:1.3rem; line-height:1.9; color:var(--primary); margin:0 0 0.5rem;">سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا</p>
        <span style="font-size:0.65rem; letter-spacing:0.16em; color:var(--text-muted); font-weight:700;">SYARAH AL-HIKAM • IBNU 'ABBAD • HIKMAH 09</span>
      </div>
    `;
  },
};
