// Data Materi Hikmah #14: Syarah Ibnu 'Abbad — "Alam Itu Gelap, Cahayaunya Adalah Allah"
const hikmah14 = {
  id: 14,
  nomor: "14",
  judul: "Alam Itu Gelap, Cahayaunya Adalah Allah",
  kategori: "Tanzih & Musyadah",
  arab: "اَلْكَوْنُ كُلُّهُ ظُلْمَةٌ، وَإِنَّمَا أَنَارَهُ ظُهُوْرُ الْحَقِّ فِيْهِ",
  terjemah:
    "Alam semesta semuanya kegelapan, yang meneranginya hanyalah tampakNya Al-Haq (Allah) di dalamnya.",
  isReady: true,
  renderContent: function () {
    return `
      <!-- ================= HEADER KAJIAN ================= -->
      <div style="text-align:center; margin-bottom:1.5rem; border-bottom:1px solid var(--border-color); padding-bottom:1rem;">
        <span class="meta-badge-top">SYARAH AL-HIKAM &bull; IBNU 'ABBAD &bull; HIKMAH 14</span>
        <div style="display:flex; justify-content:center; gap:1rem; font-size:0.78rem; color:var(--text-muted); margin-top:0.5rem; flex-wrap:wrap;">
          <span><strong>Fokus:</strong> Tanzih &amp; Musyadah</span>
          <span><strong>Klasifikasi:</strong> 4 Maqam Musyadah</span>
          <span><strong>Kunci:</strong> Adam &rarr; Zulmat &rarr; Wujud Mustanir</span>
        </div>
      </div>

      <!-- ================= JUDUL & MATAN UTAMA ================= -->
      <div style="text-align:center; margin-bottom:1.75rem;">
        <div style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.3rem 0.9rem; border-radius:20px; background:var(--bg-card); border:1px solid var(--accent); font-size:0.65rem; font-weight:800; letter-spacing:0.14em; color:var(--primary); margin-bottom:0.75rem;">
          <span style="width:7px; height:7px; border-radius:50%; background:var(--accent); display:inline-block;"></span>
          HIKMAH KE-14
        </div>
        <h3 style="font-size:1.5rem; line-height:1.35; font-weight:800; color:var(--primary); margin:0 0 0.9rem; letter-spacing:-0.01em;">
          ALAM ITU GELAP,<br>
          <span style="color:var(--accent);">CAHAYANYA ADALAH ALLAH</span>
        </h3>

        <div style="font-size:1.7rem; font-family:'Amiri',serif; line-height:2.15; color:var(--primary); direction:rtl; font-weight:bold; background:var(--bg-card); border-right:4px solid var(--accent); border-radius:12px; padding:1.4rem;">
          اَلْكَوْنُ كُلُّهُ ظُلْمَةٌ، وَإِنَّمَا أَنَارَهُ ظُهُوْرُ الْحَقِّ فِيْهِ
        </div>
        <div style="margin:1rem auto 0; max-width:700px; background:rgba(197,155,39,0.06); border-left:4px solid var(--accent); padding:0.9rem 1.15rem; border-radius:8px; text-align:left;">
          <h4 style="margin-bottom:0.35rem; color:var(--primary); font-size:0.85rem; letter-spacing:0.08em;"><i class="fa-solid fa-language"></i> TERJEMAHAN:</h4>
          <p style="font-size:0.93rem; line-height:1.8; font-weight:500; color:var(--text-main); margin:0;">
            Alam semesta semuanya <strong>kegelapan</strong>, yang meneranginya hanyalah
            <strong>tampakNya Al-Haq (Allah)</strong> di dalamnya.
          </p>
        </div>
        <div style="margin-top:0.9rem; display:flex; justify-content:center; gap:0.4rem; flex-wrap:wrap; font-size:0.7rem;">
          <span class="count-badge">Zulmat</span>
          <span class="count-badge">Nur Al-Haq</span>
          <span class="count-badge">Musyadah</span>
          <span class="count-badge">Tanzih Mutlaq</span>
        </div>
      </div>

      <!-- ========== 00 — ALAM TANPA NUR vs DENGAN TAJALLI ========== -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1rem; margin-bottom:1.75rem;">
        <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:16px; padding:1.15rem; position:relative; overflow:hidden;">
          <div style="position:absolute; top:0; right:0; width:70px; height:70px; background:rgba(107,114,128,0.10); border-bottom-left-radius:40px;"></div>
          <div style="position:relative;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.85rem;">
              <span style="font-size:0.62rem; letter-spacing:0.12em; font-weight:800; padding:3px 10px; border-radius:20px; background:rgba(107,114,128,0.12); border:1px solid var(--border-color); color:var(--text-muted);">ALAM TANPA NUR ALLAH</span>
              <span style="font-size:1.1rem; color:var(--text-muted);"><i class="fa-solid fa-moon"></i></span>
            </div>
            <div style="width:110px; height:110px; margin:0 auto 0.85rem; border-radius:50%; border:5px solid var(--border-color); background:linear-gradient(135deg,#4b5563,#1f2937); display:flex; align-items:center; justify-content:center; position:relative;">
              <div style="position:absolute; inset:8px; border-radius:50%; background:#111827;"></div>
              <div style="position:relative; z-index:2; font-size:1.5rem; color:#6b7280;"><i class="fa-solid fa-moon"></i></div>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.35rem; color:var(--primary); text-align:center; direction:rtl; margin:0 0 0.2rem;">ظُلْمَةٌ</p>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; color:var(--accent); text-align:center; direction:rtl; margin:0 0 0.5rem;">عَدَمٌ مُظْلِمٌ</p>
            <p style="font-size:0.78rem; line-height:1.6; color:var(--text-muted); text-align:center; margin:0 0 0.5rem;">tidak ada cahaya sendiri</p>
            <p style="font-size:0.75rem; line-height:1.6; color:var(--text-main); margin:0;"><strong>Haqiqah:</strong> Jika dilihat zatnya sendiri, alam itu <strong>'adam (tidak ada)</strong> &rarr; gelap.</p>
          </div>
        </div>

        <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:16px; padding:1.15rem; position:relative; overflow:hidden;">
          <div style="position:absolute; top:0; right:0; width:70px; height:70px; background:rgba(197,155,39,0.12); border-bottom-left-radius:40px;"></div>
          <div style="position:relative;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.85rem;">
              <span style="font-size:0.62rem; letter-spacing:0.12em; font-weight:800; padding:3px 10px; border-radius:20px; background:rgba(197,155,39,0.14); border:1px solid var(--accent); color:var(--text-muted);">DENGAN TAJALLI AL-HAQ</span>
              <span style="font-size:1.1rem; color:var(--accent);"><i class="fa-solid fa-sun"></i></span>
            </div>
            <div style="width:110px; height:110px; margin:0 auto 0.85rem; border-radius:50%; border:5px solid var(--accent-light); background:linear-gradient(135deg,#ffffff,var(--bg-card)); display:flex; align-items:center; justify-content:center; position:relative;">
              <div style="position:absolute; width:64px; height:64px; border-radius:50%; background:radial-gradient(circle,var(--accent-light),transparent 70%); filter:blur(6px); opacity:0.8;"></div>
              <div style="position:relative; z-index:2; font-size:1.7rem; color:var(--accent);"><i class="fa-solid fa-sun"></i></div>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.35rem; color:var(--primary); text-align:center; direction:rtl; margin:0 0 0.2rem;">نُوْرٌ</p>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; color:var(--accent); text-align:center; direction:rtl; margin:0 0 0.5rem;">وُجُوْدٌ مُسْتَنِيْرٌ</p>
            <p style="font-size:0.78rem; line-height:1.6; color:var(--text-muted); text-align:center; margin:0 0 0.5rem;">wujud yang bercahaya karena Allah</p>
            <p style="font-size:0.75rem; line-height:1.6; color:var(--text-main); margin:0;">Dengan tajalli Nur Al-Haq &rarr; alam menjadi <strong>wujud mustanir</strong> yang terang benderang.</p>
          </div>
        </div>
      </div>

      <!-- ========== 01 — MATAN HIKMAH 14 ========== -->
      <div style="background:linear-gradient(135deg,rgba(13,74,62,0.05),rgba(13,74,62,0.01)); border:1px solid var(--primary); border-radius:16px; padding:1.4rem; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.9rem; flex-wrap:wrap;">
          <span style="width:32px; height:32px; border-radius:8px; background:var(--primary); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">01</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:var(--primary); font-weight:700;">POKOK HIKMAH</div>
            <div style="font-weight:800; color:var(--primary); font-size:0.95rem;">Matan Hikmah 14 &mdash; Wajib Hafal</div>
          </div>
          <span style="margin-left:auto; font-size:0.58rem; font-weight:800; letter-spacing:0.12em; padding:3px 10px; border-radius:20px; background:var(--primary); color:var(--bg-card);">WAJIB HAFAL</span>
        </div>

        <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:14px; padding:1rem 1.15rem; margin-bottom:0.85rem;">
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.55rem;">
            <span style="font-size:0.6rem; font-weight:800; letter-spacing:0.1em; color:var(--accent);"><i class="fa-solid fa-book-open"></i> MATAN PERTAMA</span>
          </div>
          <p style="font-family:'Amiri',serif; font-size:1.3rem; line-height:2.1; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.6rem; font-weight:bold;">اَلْكَوْنُ كُلُّهُ ظُلْمَةٌ، وَإِنَّمَا أَنَارَهُ ظُهُوْرُ الْحَقِّ فِيْهِ</p>
          <p style="font-size:0.85rem; line-height:1.7; color:var(--text-main); margin:0 0 0.55rem;"><strong style="color:var(--accent);">Artinya:</strong> Alam semesta semuanya kegelapan, yang meneranginya hanyalah tampakNya Al-Haq (Allah) di dalamnya.</p>
          <div style="display:inline-flex; align-items:flex-start; gap:0.5rem; padding:0.5rem 0.75rem; border-radius:10px; background:rgba(59,130,246,0.07); border:1px solid rgba(59,130,246,0.25); font-size:0.8rem; line-height:1.6; color:var(--text-main);">
            <span style="width:18px; height:18px; border-radius:50%; background:#3b82f6; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:0.55rem; flex-shrink:0; margin-top:2px;"><i class="fa-solid fa-lightbulb"></i></span>
            <span><strong>Penjelasan mudah:</strong> Seperti ruangan gelap, kalau lampu Allah tidak menyala, semua gelap. Alam tidak punya cahaya sendiri.</span>
          </div>
        </div>

        <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:14px; padding:1rem 1.15rem;">
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.55rem;">
            <span style="font-size:0.6rem; font-weight:800; letter-spacing:0.1em; color:var(--accent);"><i class="fa-solid fa-book-open"></i> LANJUTAN MATAN</span>
          </div>
          <p style="font-family:'Amiri',serif; font-size:1.25rem; line-height:2.05; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.6rem; font-weight:bold;">فَمَنْ رَأَى الْكَوْنَ، وَلَمْ يَشْهَدْهُ فِيْهِ، أَوْ عِنْدَهُ أَوْ قَبْلَهُ، أَوْ بَعْدَهُ، فَقَدْ أَعْوَزَهُ وُجُوْدُ الْأَنْوَارِ، وَحُجِبَتْ عَنْهُ شُمُوْسُ الْمَعَارِفِ بِسُحُبِ الْآثَارِ</p>
          <p style="font-size:0.85rem; line-height:1.7; color:var(--text-main); margin:0 0 0.7rem;"><strong style="color:var(--accent);">Artinya:</strong> Siapa melihat alam tapi tidak menyaksikan Allah di dalamnya, atau di sisinya, atau sebelum, atau sesudahnya, maka ia kehilangan cahaya, terhijab dari <strong>matahari ma'rifat</strong> oleh <strong>awan-awan makhluk</strong>.</p>

          <div style="font-size:0.62rem; letter-spacing:0.12em; font-weight:800; color:var(--primary); margin-bottom:0.45rem;">4 ZHARAF (POSISI) WAJIB:</div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:0.45rem; margin-bottom:0.7rem;">
            <div style="background:rgba(197,155,39,0.09); border:1px solid var(--accent); border-radius:9px; padding:0.45rem 0.5rem; text-align:center;">
              <div style="font-family:'Amiri',serif; font-size:1.05rem; color:var(--primary);" dir="rtl">فِيْهِ</div>
              <div style="font-size:0.68rem; color:var(--text-muted);">= di dalamnya</div>
            </div>
            <div style="background:rgba(197,155,39,0.09); border:1px solid var(--accent); border-radius:9px; padding:0.45rem 0.5rem; text-align:center;">
              <div style="font-family:'Amiri',serif; font-size:1.05rem; color:var(--primary);" dir="rtl">عِنْدَهُ</div>
              <div style="font-size:0.68rem; color:var(--text-muted);">= di sisinya</div>
            </div>
            <div style="background:rgba(197,155,39,0.09); border:1px solid var(--accent); border-radius:9px; padding:0.45rem 0.5rem; text-align:center;">
              <div style="font-family:'Amiri',serif; font-size:1.05rem; color:var(--primary);" dir="rtl">قَبْلَهُ</div>
              <div style="font-size:0.68rem; color:var(--text-muted);">= sebelum</div>
            </div>
            <div style="background:rgba(197,155,39,0.09); border:1px solid var(--accent); border-radius:9px; padding:0.45rem 0.5rem; text-align:center;">
              <div style="font-family:'Amiri',serif; font-size:1.05rem; color:var(--primary);" dir="rtl">بَعْدَهُ</div>
              <div style="font-size:0.68rem; color:var(--text-muted);">= sesudah</div>
            </div>
          </div>

          <div style="display:flex; align-items:flex-start; gap:0.5rem; padding:0.55rem 0.75rem; border-radius:10px; background:rgba(13,74,62,0.04); border:1px solid var(--border-color); font-size:0.78rem; line-height:1.6; color:var(--text-main);">
            <span style="color:var(--accent); margin-top:2px;"><i class="fa-solid fa-location-dot"></i></span>
            <span><strong>Awan =</strong> <em>athar / makhluk</em> yang menutupi matahari ma'rifat.</span>
          </div>
        </div>
      </div>

      <!-- ========== 02 — HAQIQAH: CAHAYA & GELAP ========== -->
      <div style="background:rgba(197,155,39,0.09); border:2px solid var(--accent); border-radius:18px; padding:1.5rem; margin-bottom:1.5rem; position:relative; overflow:hidden;">
        <div style="position:absolute; top:-50px; right:-50px; width:150px; height:150px; border-radius:50%; background:rgba(197,155,39,0.14);"></div>
        <div style="position:relative;">
          <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.9rem;">
            <span style="width:32px; height:32px; border-radius:8px; background:var(--accent); color:var(--bg-card); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">02</span>
            <div>
              <div style="font-size:0.62rem; letter-spacing:0.12em; color:var(--accent); font-weight:700;">HAQIQAH &bull; HAKIKAT</div>
              <div style="font-weight:800; color:var(--primary); font-size:0.95rem;">Hakikat Cahaya &amp; Gelap</div>
            </div>
          </div>

          <p style="font-family:'Amiri',serif; font-size:1.3rem; line-height:2.1; color:var(--primary); direction:rtl; text-align:center; margin:0 0 1.1rem; font-weight:bold;">
            اَلْعَدَمُ ظُلْمَةٌ، وَالْوُجُوْدُ نُوْرٌ، فَالْكَوْنُ بِالنَّظَرِ إِلَى ذَاتِهِ عَدَمٌ مُظْلِمٌ، وَبِاعْتِبَارِ تَجَلِّي نُوْرِ الْحَقِّ عَلَيْهِ وَظُهُوْرِهِ فِيْهِ وُجُوْدٌ مُسْتَنِيْرٌ
          </p>

          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:0.85rem; margin-bottom:1rem;">
            <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:14px; padding:0.95rem 1.1rem; border-top:3px solid var(--text-muted);">
              <span style="font-size:0.58rem; font-weight:800; letter-spacing:0.12em; padding:3px 10px; border-radius:20px; background:rgba(107,114,128,0.12); border:1px solid var(--border-color); color:var(--text-muted);">QOIDAH 1</span>
              <p style="font-family:'Amiri',serif; font-size:1.35rem; color:var(--primary); direction:rtl; text-align:right; margin:0.55rem 0 0.2rem; font-weight:bold;">اَلْعَدَمُ ظُلْمَةٌ</p>
              <p style="font-size:0.82rem; color:var(--text-main); margin:0 0 0.3rem;"><strong>Ketiadaan itu gelap</strong></p>
              <p style="font-size:0.75rem; color:var(--text-muted); margin:0;">Tidak ada = tidak terlihat = gelap</p>
            </div>
            <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:14px; padding:0.95rem 1.1rem; border-top:3px solid var(--accent);">
              <span style="font-size:0.58rem; font-weight:800; letter-spacing:0.12em; padding:3px 10px; border-radius:20px; background:rgba(197,155,39,0.14); border:1px solid var(--accent); color:var(--text-muted);">QOIDAH 2</span>
              <p style="font-family:'Amiri',serif; font-size:1.35rem; color:var(--primary); direction:rtl; text-align:right; margin:0.55rem 0 0.2rem; font-weight:bold;">وَالْوُجُوْدُ نُوْرٌ</p>
              <p style="font-size:0.82rem; color:var(--text-main); margin:0 0 0.3rem;"><strong>Keberadaan itu cahaya</strong></p>
              <p style="font-size:0.75rem; color:var(--text-muted); margin:0;">Ada = terlihat = cahaya</p>
            </div>
          </div>

          <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:13px; padding:0.9rem 1.15rem;">
            <div style="font-size:0.6rem; letter-spacing:0.12em; font-weight:800; color:var(--accent); margin-bottom:0.35rem;">KESIMPULAN</div>
            <p style="font-size:0.85rem; line-height:1.7; color:var(--text-main); margin:0;">
              Alam jika dilihat <strong>zatnya sendiri</strong> &rarr; 'adam gelap. Tapi dengan
              <strong>tajalli cahaya Allah</strong> atasnya &amp; tannanya Allah di dalamnya &rarr;
              <strong>wujud mustanir</strong> bercahaya.
            </p>
          </div>
        </div>
      </div>

      <!-- ========== 03 — PEMBAGIAN MANUSIA DALAM MUSYAHADAH ========== -->
      <div style="margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.9rem;">
          <span style="width:32px; height:32px; border-radius:8px; background:var(--primary-light); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">03</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:var(--primary); font-weight:700;">PEMBAGIAN &bull; MUSYAHADAH</div>
            <div style="font-weight:800; color:var(--primary); font-size:0.95rem;">Pembagian Manusia dalam Musyadah</div>
          </div>
          <span style="margin-left:auto; font-size:0.58rem; font-weight:800; letter-spacing:0.12em; padding:3px 10px; border-radius:20px; background:var(--primary); color:var(--bg-card);">MAHJUB &bull; AHLI MUSYAHADAH</span>
        </div>

        <!-- A. MAHJUB -->
        <div style="background:var(--bg-card); border:1px solid var(--border-color); border-left:5px solid var(--text-muted); border-radius:14px; padding:1.1rem 1.2rem; margin-bottom:0.9rem;">
          <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.65rem; flex-wrap:wrap;">
            <span style="width:28px; height:28px; border-radius:8px; background:var(--text-muted); color:var(--bg-card); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">A</span>
            <div>
              <div style="font-weight:800; color:var(--primary); font-size:0.92rem;">MAHJUB &mdash; Terhijab, Sesat</div>
              <div style="font-size:0.62rem; color:var(--text-muted); letter-spacing:0.1em;">TAIH FIL ZHULUMAT</div>
            </div>
            <span style="margin-left:auto; font-size:1rem; color:var(--text-muted);"><i class="fa-solid fa-lock"></i></span>
          </div>
          <p style="font-family:'Amiri',serif; font-size:1.2rem; line-height:2.05; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.55rem;">ثُمَّ اخْتَلَفَ أَحْوَالُ النَّاسِ هَاهُنَا: فَمِنْهُمْ مَنْ لَمْ يُشَاهِدْ إِلَّا الْأَكْوَانَ، وَحُجِبَ بِذَلِكَ عَنْ رُؤْيَةِ الْمُكَوِّنِ، فَهَذَا تَائِهٌ فِي الظُّلُمَاتِ، مَحْجُوْبٌ بِسُحُبِ آثَارِ الْكَائِنَاتِ</p>
          <p style="font-size:0.85rem; line-height:1.7; color:var(--text-main); margin:0 0 0.55rem;"><strong style="color:var(--accent);">Artinya mudah:</strong> Manusia beda-beda: Ada yang hanya lihat alam saja, terhijab dari Pencipta alam, ini tersesat dalam kegelapan, terhijab oleh awan bekas makhluk.</p>
          <div style="display:flex; align-items:flex-start; gap:0.5rem; padding:0.55rem 0.75rem; border-radius:10px; background:rgba(13,74,62,0.04); border:1px solid var(--border-color); font-size:0.78rem; line-height:1.6; color:var(--text-main);">
            <span style="color:var(--accent); margin-top:2px;"><i class="fa-solid fa-location-dot"></i></span>
            <span><strong>Awan athar</strong> = makhluk menutupi Matahari Ma'rifat.</span>
          </div>
        </div>

        <!-- B. TIDAK MAHJUB -->
        <div style="background:var(--bg-card); border:2px solid var(--primary); border-radius:14px; padding:1.1rem 1.2rem; margin-bottom:0.9rem;">
          <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.65rem; flex-wrap:wrap;">
            <span style="width:28px; height:28px; border-radius:8px; background:var(--primary); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">B</span>
            <div>
              <div style="font-weight:800; color:var(--primary); font-size:0.92rem;">TIDAK MAHJUB &mdash; Ahli Musyadah</div>
              <div style="font-size:0.62rem; color:var(--text-muted); letter-spacing:0.1em;">4 MAQAM</div>
            </div>
            <span style="margin-left:auto; font-size:1rem; color:var(--accent);"><i class="fa-solid fa-eye"></i></span>
          </div>
          <p style="font-family:'Amiri',serif; font-size:1.2rem; line-height:2.05; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.55rem; font-weight:bold;">وَمِنْهُمْ مَنْ لَمْ يُحْجَبْ بِالْأَكْوَانِ عَنِ الْمُكَوِّنِ، ثُمَّ هُمْ فِي مُشَاهَدَتِهِمْ إِيَّاهُ فَرَقٌ</p>
          <p style="font-size:0.85rem; line-height:1.7; color:var(--text-main); margin:0;"><strong style="color:var(--accent);">Artinya mudah:</strong> Ada yang tidak terhijab oleh alam dari Pencipta, tapi dalam menyaksikanNya mereka beda-beda &rarr; <strong>4 maqam di bawah</strong>.</p>
        </div>

        <div style="font-size:0.62rem; letter-spacing:0.12em; font-weight:800; color:var(--primary); margin-bottom:0.55rem; text-align:center;">RINCIAN 4 MAQAM MUSYAHADAH</div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:0.85rem;">
          <!-- Maqam 1 -->
          <div style="background:rgba(13,74,62,0.04); border:1px solid var(--primary); border-radius:14px; padding:1rem 1.1rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.55rem;">
              <span style="font-size:0.58rem; font-weight:800; letter-spacing:0.1em; color:var(--primary);">MAQAM 1 &bull; TERTINGGI</span>
              <span style="font-size:0.55rem; font-weight:800; padding:3px 9px; border-radius:20px; background:var(--primary); color:var(--accent);">FIQH QALBU</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.3rem; color:var(--primary); direction:rtl; text-align:center; margin:0 0 0.15rem; font-weight:bold;">قَبْلَ الْأَكْوَانِ</p>
            <p style="font-size:0.72rem; color:var(--text-muted); text-align:center; margin:0 0 0.55rem;">Qablal Akwan &mdash; Melihat Allah SEBELUM Alam</p>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.95; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.5rem;">فَمِنْهُمْ: مَنْ شَاهَدَ الْمُكَوِّنَ قَبْلَ الْأَكْوَانِ، وَهَؤُلَاءِ هُمُ الَّذِيْنَ يَسْتَدِلُّوْنَ بِالْمُؤَثِّرِ عَلَى الْآثَارِ</p>
            <p style="font-size:0.78rem; line-height:1.6; color:var(--text-main); margin:0 0 0.55rem;"><strong>Artinya:</strong> Melihat Pencipta sebelum alam &mdash; mereka berdalil dengan yang memberi bekas kepada bekas (Allah dulu baru alam).</p>
            <div style="font-size:0.7rem; font-weight:700; color:var(--accent); padding:0.35rem 0.6rem; background:rgba(197,155,39,0.09); border:1px solid var(--accent); border-radius:8px; text-align:center;">Maqam tertinggi &mdash; Ahlul Kasyf</div>
          </div>

          <!-- Maqam 2 -->
          <div style="background:rgba(13,74,62,0.04); border:1px solid var(--primary); border-radius:14px; padding:1rem 1.1rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.55rem;">
              <span style="font-size:0.58rem; font-weight:800; letter-spacing:0.1em; color:var(--primary);">MAQAM 2 &bull; AWAM SHALIH</span>
              <span style="font-size:0.55rem; font-weight:800; padding:3px 9px; border-radius:20px; background:var(--primary); color:var(--accent);">FIQH QALBU</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.3rem; color:var(--primary); direction:rtl; text-align:center; margin:0 0 0.15rem; font-weight:bold;">بَعْدَ الْأَكْوَانِ</p>
            <p style="font-size:0.72rem; color:var(--text-muted); text-align:center; margin:0 0 0.55rem;">Ba'dal Akwan &mdash; Melihat Allah SETELAH Alam</p>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.95; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.5rem;">وَمِنْهُمْ مَنْ شَاهَدَهُ بَعْدَ الْأَكْوَانِ وَهَؤُلَاءِ هُمُ الَّذِيْنَ يَسْتَدِلُّوْنَ بِالْآثَارِ عَلَى الْمُؤَثِّرِ</p>
            <p style="font-size:0.78rem; line-height:1.6; color:var(--text-main); margin:0 0 0.55rem;"><strong>Artinya:</strong> Melihat Pencipta setelah alam &mdash; berdalil dengan bekas kepada yang memberi bekas (alam dulu baru Allah).</p>
            <div style="font-size:0.7rem; font-weight:700; color:var(--text-muted); padding:0.35rem 0.6rem; background:rgba(107,114,128,0.08); border:1px solid var(--border-color); border-radius:8px; text-align:center;">Maqam awam &mdash; dalil akal &amp; ayat kauniyah</div>
          </div>

          <!-- Maqam 3 -->
          <div style="background:rgba(59,130,246,0.05); border:1px solid rgba(59,130,246,0.3); border-radius:14px; padding:1rem 1.1rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.55rem;">
              <span style="font-size:0.58rem; font-weight:800; letter-spacing:0.1em; color:var(--text-main);">MAQAM 3 &bull; MA'IYAH ITTISHAL</span>
              <span style="font-size:0.55rem; font-weight:800; padding:3px 9px; border-radius:20px; background:#3b82f6; color:#fff;">FIQH QALBU</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.3rem; color:var(--primary); direction:rtl; text-align:center; margin:0 0 0.15rem; font-weight:bold;">فِيْهِ</p>
            <p style="font-size:0.72rem; color:var(--text-muted); text-align:center; margin:0 0 0.55rem;">Fihi &mdash; Allah tampak DI DALAM Alam (Ittishal)</p>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.95; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.5rem;">وَمِنْهُمْ مَنْ شَاهَدَهُ مَعَ الْأَكْوَانِ؛ وَالْمَعِيَّةُ هَاهُنَا إِمَّا مَعِيَّةُ اتِّصَالٍ وَهُوَ شُهُوْدُهُ فِي الْأَكْوَانِ</p>
            <p style="font-size:0.78rem; line-height:1.6; color:var(--text-main); margin:0 0 0.55rem;"><strong>Artinya mudah:</strong> Bersamanya ada 2: Ittishal yaitu menyaksikanNya <strong>DI DALAM</strong> alam (Allah tampak dalam alam).</p>
            <div style="font-size:0.7rem; font-weight:700; color:var(--text-muted); padding:0.35rem 0.6rem; background:rgba(220,38,38,0.07); border:1px solid rgba(220,38,38,0.25); border-radius:8px; text-align:center;"><i class="fa-solid fa-triangle-exclamation"></i> Bukan hulul! Lihat Tanbih di bawah</div>
          </div>

          <!-- Maqam 4 -->
          <div style="background:rgba(59,130,246,0.05); border:1px solid rgba(59,130,246,0.3); border-radius:14px; padding:1rem 1.1rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.55rem;">
              <span style="font-size:0.58rem; font-weight:800; letter-spacing:0.1em; color:var(--text-main);">MAQAM 4 &bull; MA'IYAH INFISHAL</span>
              <span style="font-size:0.55rem; font-weight:800; padding:3px 9px; border-radius:20px; background:#3b82f6; color:#fff;">FIQH QALBU</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.3rem; color:var(--primary); direction:rtl; text-align:center; margin:0 0 0.15rem; font-weight:bold;">عِنْدَهُ</p>
            <p style="font-size:0.72rem; color:var(--text-muted); text-align:center; margin:0 0 0.55rem;">'Indahu &mdash; Allah DI SISI Alam (Infishal)</p>
            <p style="font-family:'Amiri',serif; font-size:1.05rem; line-height:1.95; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.5rem;">وَإِمَّا مَعِيَّةُ انْفِصَالٍ، وَهُوَ شُهُوْدُهُ عِنْدَ الْأَكْوَانِ</p>
            <p style="font-size:0.78rem; line-height:1.6; color:var(--text-main); margin:0 0 0.55rem;"><strong>Artinya mudah:</strong> Infishal yaitu menyaksikanNya <strong>DI SISI</strong> alam (Allah di sisi alam).</p>
            <div style="font-size:0.7rem; font-weight:700; color:var(--text-muted); padding:0.35rem 0.6rem; background:rgba(220,38,38,0.07); border:1px solid rgba(220,38,38,0.25); border-radius:8px; text-align:center;"><i class="fa-solid fa-triangle-exclamation"></i> Bukan Allah butuh tempat! Lihat Tanbih</div>
          </div>
        </div>
      </div>

      <!-- ========== 04 — TANBIH PENTING ========== -->
      <div style="background:rgba(220,38,38,0.05); border:2px solid rgba(220,38,38,0.35); border-radius:18px; padding:1.4rem; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.9rem; flex-wrap:wrap;">
          <span style="width:32px; height:32px; border-radius:8px; background:#dc2626; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">04</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:#dc2626; font-weight:700;">TANBIH PENTING &bull; WAJIB DIPAHAMI</div>
            <div style="font-weight:800; color:var(--primary); font-size:0.95rem;">IniBukan Zaman &amp; Tempat</div>
          </div>
          <span style="margin-left:auto; font-size:0.58rem; font-weight:800; letter-spacing:0.12em; padding:3px 10px; border-radius:20px; background:rgba(220,38,38,0.1); border:1px solid rgba(220,38,38,0.3); color:var(--text-muted);">ANTI TASYBIH</span>
        </div>

        <p style="font-family:'Amiri',serif; font-size:1.2rem; line-height:2.05; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.7rem;">وَهَذِهِ الظُّرُوْفُ الْمَذْكُوْرَةُ لَيْسَتْ بِزَمَانِيَّةٍ وَلَا مَكَانِيَّةٍ، لِأَنَّ الزَّمَانَ وَالْمَكَانَ مِنْ جُمْلَةِ الْأَكْوَانِ وَالْاِتِّصَالُ وَالْاِنْفِصَالُ الْمَذْكُوْرَانِ لَيْسَا عَلَى مَا يُفْهَمُ مِنْ مَعَانِيْهِمَا، فَإِنَّهُمَا أَيْضًا مِنْ جُمْلَةِ الْأَكْوَانِ</p>
        <div style="background:var(--bg-card); border:1px solid rgba(220,38,38,0.25); border-radius:12px; padding:0.8rem 1rem;">
          <div style="font-size:0.6rem; letter-spacing:0.12em; font-weight:800; color:#dc2626; margin-bottom:0.3rem;">TERJEMAHAN LENGKAP:</div>
          <p style="font-size:0.83rem; line-height:1.7; color:var(--text-main); margin:0;">Zharaf-zharaf (qabla, ba'da, fihi, 'indahu) ini <strong>bukan zaman &amp; bukan tempat</strong>, karena zaman &amp; tempat termasuk alam, ittisal &amp; infishal bukan seperti yang dipahami maknanya karena keduanya juga termasuk alam.</p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:0.7rem; margin-top:0.85rem;">
          <div style="background:rgba(220,38,38,0.08); border:1px solid rgba(220,38,38,0.3); border-radius:12px; padding:0.75rem 0.9rem;">
            <div style="display:flex; align-items:center; gap:0.45rem; margin-bottom:0.3rem; font-size:0.75rem; font-weight:800; color:var(--text-main);"><i class="fa-solid fa-ban"></i> JANGAN BAYANGKAN:</div>
            <p style="font-size:0.79rem; line-height:1.6; color:var(--text-main); margin:0;">Allah di dalam alam seperti <strong>air di gelas</strong>! Itu tasybih &amp; hulul &mdash; <strong style="color:#dc2626;">BATAL!</strong></p>
          </div>
          <div style="background:rgba(13,74,62,0.05); border:1px solid var(--primary); border-radius:12px; padding:0.75rem 0.9rem;">
            <div style="display:flex; align-items:center; gap:0.45rem; margin-bottom:0.45rem; font-size:0.75rem; font-weight:800; color:var(--primary);"><i class="fa-solid fa-compass"></i> MAKSUD YANG BENAR:</div>
            <div style="display:grid; gap:0.3rem; font-size:0.78rem; line-height:1.55; color:var(--text-main);">
              <div style="font-family:'Amiri',serif; font-size:1rem; color:var(--accent); font-weight:bold;">قَبْلَ</div>
              <div>= secara martabat wujud, Allah lebih dulu (Qidam)</div>
              <div style="font-family:'Amiri',serif; font-size:1rem; color:var(--accent); font-weight:bold;">بَعْدَ</div>
              <div>= secara dalil, kita tahu alam dulu baru istidlal ke Allah</div>
              <div style="font-family:'Amiri',serif; font-size:1rem; color:var(--accent); font-weight:bold;">فِيْهِ</div>
              <div>= syuhud tajalli sifat Allah pada alam, bukan Allah masuk alam</div>
              <div style="font-family:'Amiri',serif; font-size:1rem; color:var(--accent); font-weight:bold;">عِنْدَ</div>
              <div>= syuhud qurb ma'nawi, bukan jarak fisik</div>
            </div>
          </div>
        </div>

        <p style="font-size:0.78rem; line-height:1.65; color:var(--text-muted); margin:0.8rem 0 0; padding-top:0.7rem; border-top:1px solid var(--border-color);">
          Zaman &amp; tempat itu sendiri = bagian dari <span dir="rtl" style="font-family:'Amiri',serif; font-size:1rem;">اَلْأَكْوَانِ</span> &rarr; tidak mungkin Allah terikat dengannya.
        </p>
      </div>

      <!-- ========== 05 — PERINGATAN ZALLAT AQ'DAM ========== -->
      <div style="background:var(--bg-card); border:2px solid var(--accent); border-radius:18px; padding:1.4rem; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.9rem; flex-wrap:wrap;">
          <span style="width:32px; height:32px; border-radius:8px; background:var(--accent); color:var(--bg-card); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">05</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:var(--accent); font-weight:700;">PERINGATAN &bull; HATI-HATI</div>
            <div style="font-weight:800; color:var(--primary); font-size:0.95rem;">Zallat Aq'dam &mdash; Banyak Kaki Tergelincir</div>
          </div>
        </div>

        <p style="font-family:'Amiri',serif; font-size:1.2rem; line-height:2.05; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.7rem;">وَمَعْرِفَةُ تَفْصِيْلِ هَذِهِ الْأُمُوْرِ وَالتَّفْرِقَةِ بَيْنَ هَذِهِ الْحَقَائِقِ عَلَى مَا هِيَ عَلَيْهِ مَوْكُوْلٌ إِلَى أَرْبَابِهِ، فَلْنَقْتَصِرْ عَلَى مَا ذَكَرْنَاهُ فَهَاهُنَا زَلَّتْ أَقْدَامُ كَثِيْرٍ مِنَ النَّاسِ فَتَكَلَّمُوْا بِكَلِمَاتٍ مُوْهِمَةٍ، وَعَبَّرُوْا بِعِبَارَاتٍ مُنْكَرَةٍ فِي الشَّرْعِ فَكَفَّرُوْا بِذَلِكَ، وَبُدِّعُوْا</p>
        <p style="font-size:0.85rem; line-height:1.7; color:var(--text-main); margin:0 0 0.7rem;"><strong style="color:var(--accent);">Artinya mudah:</strong> Pengetahuan rinci ini diserahkan pada ahlinya, cukup sampai sini, <strong>di sini banyak kaki tergelincir</strong>, bicara kata-kata membingungkan &amp; ibarat mungkar dalam syara' lalu kafir &amp; bid'ah.</p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:0.7rem;">
          <div style="background:rgba(220,38,38,0.07); border:1px solid rgba(220,38,38,0.25); border-radius:12px; padding:0.7rem 0.9rem;">
            <div style="font-size:0.68rem; font-weight:800; letter-spacing:0.1em; color:#dc2626; margin-bottom:0.4rem;">CONTOH SALAH:</div>
            <p style="font-size:0.79rem; line-height:1.6; color:var(--text-main); margin:0 0 0.3rem;"><strong>&ldquo;Allah menyatu dengan alam&rdquo;</strong> &rarr; kufur</p>
            <p style="font-size:0.79rem; line-height:1.6; color:var(--text-main); margin:0;"><strong>&ldquo;Alam adalah Allah&rdquo;</strong> (wahdat wujud salah) &rarr; bid'ah</p>
          </div>
          <div style="background:rgba(13,74,62,0.05); border:1px solid var(--primary); border-radius:12px; padding:0.7rem 0.9rem;">
            <div style="font-size:0.68rem; font-weight:800; letter-spacing:0.1em; color:var(--primary); margin-bottom:0.4rem;">SIKAP YANG BENAR:</div>
            <p style="font-size:0.79rem; line-height:1.65; color:var(--text-main); margin:0;">&ldquo;Cukup sampai sini, serahkan tafshil pada <strong>arbabuh (ahlinya)</strong> yang sudah matang ma'rifat &amp; syariat. Jangan sok dalam kalau belum matang!&rdquo;</p>
          </div>
        </div>
      </div>

      <!-- ========== AQIDAH SELAMAT ========== -->
      <div style="background:linear-gradient(135deg,rgba(13,74,62,0.07),rgba(13,74,62,0.02)); border:2px solid var(--primary); border-radius:18px; padding:1.5rem; margin-bottom:1.5rem; position:relative; overflow:hidden;">
        <div style="position:absolute; top:-40px; left:-40px; width:130px; height:130px; border-radius:50%; background:rgba(13,74,62,0.06);"></div>
        <div style="position:relative;">
          <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.9rem; flex-wrap:wrap;">
            <span style="width:32px; height:32px; border-radius:8px; background:var(--primary); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-size:0.85rem;"><i class="fa-solid fa-heart"></i></span>
            <div>
              <div style="font-size:0.62rem; letter-spacing:0.12em; color:var(--primary); font-weight:700;">KUNCI AKHIR HIKMAH 14</div>
              <div style="font-weight:800; color:var(--primary); font-size:0.95rem;">Aqidah Selamat &mdash; Tanzih Mutlaq</div>
            </div>
          </div>

          <div style="background:rgba(197,155,39,0.09); border:1px solid var(--accent); border-radius:14px; padding:1.1rem; text-align:center; margin-bottom:0.9rem;">
            <p style="font-family:'Amiri',serif; font-size:1.3rem; line-height:2.1; color:var(--primary); direction:rtl; text-align:center; margin:0; font-weight:bold;">
              فَاعْتَقِدْ كَمَالَ التَّنْزِيْهِ وَبُطْلَانَ التَّشْبِيْهِ، وَتَمَسَّكْ بِقَوْلِهِ عَزَّ وَجَلَّ: <span style="font-size:1.15rem;">[الشورى 11]</span>
            </p>
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:0.85rem;">
            <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:13px; padding:0.9rem 1rem;">
              <p style="font-size:0.82rem; line-height:1.65; color:var(--text-main); margin:0 0 0.7rem;"><strong>Terjemah mudah:</strong> Yakinlah kesempurnaan tanzih &amp; batalnya tasybih, pegang ayat <span dir="rtl" style="font-family:'Amiri',serif; font-size:1rem;">لَيْسَ كَمِثْلِهِ شَيْءٌ</span></p>
              <div style="display:grid; gap:0.35rem; font-size:0.78rem; line-height:1.55;">
                <div style="display:flex; gap:0.45rem; align-items:flex-start;"><span style="color:var(--accent); flex-shrink:0;"><i class="fa-solid fa-circle-check"></i></span><span style="color:var(--text-main);"><strong>Kamalut Tanzih:</strong> Allah Maha Suci dari semua kekurangan &amp; keserupaan makhluk</span></div>
                <div style="display:flex; gap:0.45rem; align-items:flex-start;"><span style="color:var(--accent); flex-shrink:0;"><i class="fa-solid fa-circle-check"></i></span><span style="color:var(--text-main);"><strong>Buthlanut Tasybih:</strong> Batal menyerupakan Allah dengan makhluk apapun</span></div>
              </div>
            </div>
            <div style="background:var(--primary); border:1px solid var(--primary); border-radius:13px; padding:0.9rem 1rem;">
              <p style="font-family:'Amiri',serif; font-size:1.2rem; line-height:2; color:var(--accent); direction:rtl; text-align:center; margin:0 0 0.5rem; font-weight:bold;">وَهُوَ السَّمِيْعُ الْبَصِيْرُ</p>
              <p style="font-size:0.78rem; line-height:1.6; color:var(--bg-card); text-align:center; margin:0 0 0.55rem;">Tidak ada sesuatupun yang serupa dengan Dia, dan Dia Maha Mendengar Maha Melihat</p>
              <div style="height:1px; background:rgba(255,255,255,0.15); margin-bottom:0.55rem;"></div>
              <p style="font-family:'Amiri',serif; font-size:1.15rem; color:var(--accent); direction:rtl; text-align:center; margin:0 0 0.35rem; font-weight:bold;">لَا إِلَهَ غَيْرُهُ</p>
              <p style="font-size:0.78rem; color:var(--bg-card); text-align:center; margin:0 0 0.5rem;">Tiada Tuhan selain Dia</p>
              <p style="font-size:0.65rem; letter-spacing:0.1em; color:var(--bg-card); text-align:center; margin:0; opacity:0.8;">QS Asy-Syura 11 &mdash; Pegangan Aqidah</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= RINGKASAN VISUAL ================= -->
      <div style="background:var(--bg-card); border:1px solid var(--accent); border-left:5px solid var(--accent); border-radius:14px; padding:1.1rem 1.25rem; margin-bottom:1.5rem; display:flex; align-items:flex-start; gap:0.85rem;">
        <span style="width:38px; height:38px; border-radius:50%; background:var(--primary); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-size:0.95rem; flex-shrink:0;"><i class="fa-solid fa-layer-group"></i></span>
        <div>
          <div style="font-size:0.6rem; letter-spacing:0.12em; font-weight:800; color:var(--accent); margin-bottom:0.25rem;">RINGKASAN VISUAL HIKMAH 14</div>
          <p style="font-size:0.83rem; line-height:1.75; color:var(--text-main); margin:0;">
            Alam = gelap (<em>'adam</em>) &bull; Allah = Cahaya (<span dir="rtl" style="font-family:'Amiri',serif;">نُوْر</span>) yang menerangi &bull;
            Siapa lihat alam tanpa lihat Allah = kehilangan Nur, terhijab awan makhluk &bull;
            Ada mahjub &amp; tidak mahjub &bull; Yang tidak mahjub ada 4 maqam: <strong>Qabla, Ba'da, Fihi, 'Indahu</strong> &bull;
            Semua zharaf bukan zaman/tempat &amp; ittisal/infishal bukan makna dhahir &bull;
            Banyak tergelincir di sini &rarr; pegang
            <span dir="rtl" style="font-family:'Amiri',serif; font-size:1.05rem;">لَيْسَ كَمِثْلِهِ شَيْءٌ</span>
          </p>
        </div>
      </div>

      <!-- ================= PENUTUP HALAMAN ================= -->
      <div style="text-align:center; padding:1.5rem 0 0.5rem; border-top:1px solid var(--border-color);">
        <p style="font-family:'Amiri',serif; font-size:1.25rem; line-height:1.9; color:var(--primary); margin:0 0 0.5rem;">تَمَّ بِحَمْدِ اللهِ</p>
        <span style="font-size:0.65rem; letter-spacing:0.16em; color:var(--text-muted); font-weight:700;">SYARAH AL-HIKAM &bull; IBNU 'ABBAD &bull; HIKMAH 14</span>
      </div>
    `;
  },
};