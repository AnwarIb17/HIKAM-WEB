// Data Materi Hikmah #13: Syarah Ibnu 'Abbad — "Empat Kemustahilan • Jam'u Dhiddaain Muhal"
const hikmah13 = {
  id: 13,
  nomor: "13",
  judul: "Empat Kemustahilan: Jam'u Dhiddaain Muhal",
  kategori: "Kaidah & Perlawanan Hati",
  arab: "كَيْفَ يُشْرِقُ قَلْبٌ صُوْرَةُ الْأَكْوَانِ مُنْطَبِعَةٌ فِي مِرْآتِهِ",
  terjemah:
    "Empat pertanyaan yang mustahil terjadi: bagaimana hati bisa bersinar sedang gambaran makhluk terukir di cerminnya, bagaimana ia mer estrange menuju Allah sedang terbelenggu syahwat, bagaimana ia masuk hadirat Allah sedang junub ghaflah, dan bagaimana ia memahami rahasia sedang belum taubat.",
  isReady: true,
  renderContent: function () {
    return `
      <!-- ================= HEADER KAJIAN ================= -->
      <div style="text-align:center; margin-bottom:1.5rem; border-bottom:1px solid var(--border-color); padding-bottom:1rem;">
        <span class="meta-badge-top">SYARAH AL-HIKAM &bull; IBNU 'ABBAD &bull; HIKMAH 13</span>
        <div style="display:flex; justify-content:center; gap:1rem; font-size:0.78rem; color:var(--text-muted); margin-top:0.5rem; flex-wrap:wrap;">
          <span><strong>Fokus:</strong> Ta'ajjub &amp; Lawan</span>
          <span><strong>Klasifikasi:</strong> 4 Kemustahilan</span>
          <span><strong>Kunci:</strong> Lawan &rarr; Mustahil &rarr; Tazkiyatun Nafs</span>
        </div>
      </div>

      <!-- ================= MATAN UTAMA ================= -->
      <div style="text-align:center; margin-bottom:2rem;">
        <div style="font-size:1.7rem; font-family:'Amiri',serif; line-height:2.15; color:var(--primary); direction:rtl; font-weight:bold; background:var(--bg-card); border-right:4px solid var(--accent); border-radius:12px; padding:1.4rem;">
          كَيْفَ يُشْرِقُ قَلْبٌ صُوْرَةُ الْأَكْوَانِ مُنْطَبِعَةٌ فِي مِرْآتِهِ ...
        </div>
        <div style="margin:1rem auto 0; max-width:700px; background:rgba(197,155,39,0.06); border-left:4px solid var(--accent); padding:0.9rem 1.15rem; border-radius:8px; text-align:left;">
          <h4 style="margin-bottom:0.35rem; color:var(--primary); font-size:0.85rem; letter-spacing:0.08em;"><i class="fa-solid fa-language"></i> TERJEMAHAN:</h4>
          <p style="font-size:0.93rem; line-height:1.8; font-weight:500; color:var(--text-main); margin:0;">
            <strong>Empat pertanyaan</strong> yang mustahil terjadi dalam hati: bagaimana hati
            <strong>bersinar</strong> sedang <span style="background:rgba(197,155,39,0.18); border:1px solid var(--accent); padding:1px 6px; border-radius:4px; font-weight:700;">gambaran makhluk terukir</span> di cerminnya; bagaimana ia
            <strong>berangkat</strong> menuju Allah sedang <span style="background:rgba(197,155,39,0.18); border:1px solid var(--accent); padding:1px 6px; border-radius:4px; font-weight:700;">terbelenggu syahwat</span>;
            bagaimana ia <strong>masuk hadirat Allah</strong> sedang <span style="background:rgba(197,155,39,0.18); border:1px solid var(--accent); padding:1px 6px; border-radius:4px; font-weight:700;">junub ghaflah</span>; dan bagaimana ia
            <strong>pahami rahasia halus</strong> sedang <span style="background:rgba(197,155,39,0.18); border:1px solid var(--accent); padding:1px 6px; border-radius:4px; font-weight:700;">belum taubat</span> dari hafawat.
          </p>
        </div>
        <div style="margin-top:0.9rem; display:flex; justify-content:center; gap:0.4rem; flex-wrap:wrap; font-size:0.7rem;">
          <span class="count-badge">Ta'ajjub</span>
          <span class="count-badge">Dzat al-A'dad</span>
          <span class="count-badge">Ishrâq &amp; Isyraq</span>
          <span class="count-badge">Tazkiyatun Nafs</span>
        </div>
      </div>

      <!-- ========== 00 — CERMIN KOTOR vs CERMIN BERSIH ========== -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1rem; margin-bottom:1.75rem;">
        <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:16px; padding:1.15rem; position:relative; overflow:hidden;">
          <div style="position:absolute; top:0; right:0; width:70px; height:70px; background:rgba(107,114,128,0.10); border-bottom-left-radius:40px;"></div>
          <div style="position:relative;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.85rem;">
              <span style="font-size:0.62rem; letter-spacing:0.12em; font-weight:800; padding:3px 10px; border-radius:20px; background:rgba(107,114,128,0.12); border:1px solid var(--border-color); color:var(--text-muted);">CERMIN KOTOR</span>
              <span style="font-size:0.65rem; font-weight:700; color:var(--text-muted);"><i class="fa-solid fa-xmark"></i> TIDAK MEMANTUL</span>
            </div>
            <div style="width:120px; height:120px; margin:0 auto 0.9rem; border-radius:50%; border:5px solid var(--border-color); background:linear-gradient(135deg,#9ca3af,#6b7280); display:flex; align-items:center; justify-content:center; position:relative;">
              <div style="position:absolute; inset:9px; border-radius:50%; background:rgba(31,41,55,0.8);"></div>
              <div style="position:relative; z-index:2; display:grid; grid-template-columns:repeat(3,1fr); gap:5px; opacity:0.6; font-size:0.9rem;">
                <span>&#127968;</span><span>&#128176;</span><span>&#128081;</span>
                <span>&#128721;</span><span>&#129333;</span><span>&#10084;&#65039;</span>
              </div>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.1rem; color:var(--primary); text-align:center; direction:rtl; margin:0 0 0.45rem;">صُوْرَةُ الْأَكْوَانِ مُنْطَبِعَةٌ فِي مِرْآتِهِ</p>
            <p style="font-size:0.78rem; line-height:1.65; color:var(--text-muted); text-align:center; margin:0;">Gambar dunia menempel di cermin hati &rarr; cahaya iman tidak bisa masuk &amp; memantul.</p>
          </div>
        </div>

        <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:16px; padding:1.15rem; position:relative; overflow:hidden;">
          <div style="position:absolute; top:0; right:0; width:70px; height:70px; background:rgba(197,155,39,0.12); border-bottom-left-radius:40px;"></div>
          <div style="position:relative;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.85rem;">
              <span style="font-size:0.62rem; letter-spacing:0.12em; font-weight:800; padding:3px 10px; border-radius:20px; background:rgba(197,155,39,0.14); border:1px solid var(--accent); color:var(--text-muted);">CERMIN BERSIH</span>
              <span style="font-size:0.65rem; font-weight:700; color:#059669;"><i class="fa-solid fa-sparkles"></i> BERSINAR</span>
            </div>
            <div style="width:120px; height:120px; margin:0 auto 0.9rem; border-radius:50%; border:5px solid var(--accent-light); background:linear-gradient(135deg,#ffffff,var(--bg-card)); display:flex; align-items:center; justify-content:center; position:relative;">
              <div style="position:absolute; width:70px; height:70px; border-radius:50%; background:radial-gradient(circle,var(--accent-light),transparent 70%); filter:blur(6px); opacity:0.75;"></div>
              <div style="position:relative; z-index:2; font-size:1.9rem; color:var(--accent);"><i class="fa-solid fa-star"></i></div>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.1rem; color:var(--primary); text-align:center; direction:rtl; margin:0 0 0.45rem;">إِشْرَاقُ الْقَلْبِ بِنُوْرِ الْإِيْمَانِ</p>
            <p style="font-size:0.78rem; line-height:1.65; color:var(--text-muted); text-align:center; margin:0;">Hati kosong dari akwan, hanya Allah &rarr; memantulkan Nur Iman &amp; Yaqin dengan sempurna.</p>
          </div>
        </div>
      </div>

      <!-- ========== 01 — MATAN 4 PERTANYAAN TA'AJJUB ========== -->
      <div style="background:linear-gradient(135deg,rgba(13,74,62,0.05),rgba(13,74,62,0.01)); border:1px solid var(--primary); border-radius:16px; padding:1.4rem; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.9rem;">
          <span style="width:32px; height:32px; border-radius:8px; background:var(--primary); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">01</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:var(--primary); font-weight:700;">MATAN &bull; SYARAH INTI</div>
            <div style="font-weight:800; color:var(--primary); font-size:0.95rem;">4 Pertanyaan Ta'ajjub &mdash; Tidak Mungkin Terjadi</div>
          </div>
          <span style="margin-left:auto; font-size:0.58rem; font-weight:800; letter-spacing:0.12em; padding:3px 10px; border-radius:20px; background:var(--bg-card); border:1px solid var(--border-color); color:var(--text-muted);">TA'AJJUB &bull; HERAN</span>
        </div>

        <div style="display:grid; gap:0.85rem;">
          <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:14px; padding:1rem 1.15rem;">
            <div style="display:flex; align-items:flex-start; gap:0.7rem; margin-bottom:0.6rem;">
              <span style="width:30px; height:30px; border-radius:50%; background:rgba(197,155,39,0.16); border:1px solid var(--accent); color:var(--text-muted); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.72rem; flex-shrink:0;">01</span>
              <span style="font-size:1.1rem; color:var(--accent); margin-left:auto;"><i class="fa-solid fa-face-meh"></i></span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.25rem; line-height:2.05; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.6rem; font-weight:bold;">كَيْفَ يُشْرِقُ قَلْبٌ صُوْرَةُ الْأَكْوَانِ مُنْطَبِعَةٌ فِي مِرْآتِهِ</p>
            <div style="height:1px; background:linear-gradient(to right,rgba(197,155,39,0.4),transparent); margin-bottom:0.6rem;"></div>
            <p style="font-size:0.85rem; line-height:1.65; color:var(--text-main); margin:0 0 0.55rem;">Bagaimana hati bisa bersinar sedangkan <strong>gambaran makhluk</strong> terukir di cerminnya?</p>
            <div style="display:inline-flex; align-items:flex-start; gap:0.5rem; padding:0.5rem 0.75rem; border-radius:10px; background:rgba(59,130,246,0.07); border:1px solid rgba(59,130,246,0.25); font-size:0.8rem; line-height:1.6; color:var(--text-main);">
              <span style="width:18px; height:18px; border-radius:50%; background:#3b82f6; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:0.55rem; flex-shrink:0; margin-top:2px;"><i class="fa-solid fa-lightbulb"></i></span>
              <span><strong>Penjelasan mudah:</strong> Cermin kotor dengan gambar dunia tidak bisa pantulkan cahaya.</span>
            </div>
          </div>

          <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:14px; padding:1rem 1.15rem;">
            <div style="display:flex; align-items:flex-start; gap:0.7rem; margin-bottom:0.6rem;">
              <span style="width:30px; height:30px; border-radius:50%; background:rgba(197,155,39,0.16); border:1px solid var(--accent); color:var(--text-muted); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.72rem; flex-shrink:0;">02</span>
              <span style="font-size:1.1rem; color:var(--accent); margin-left:auto;"><i class="fa-solid fa-link"></i></span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.25rem; line-height:2.05; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.6rem; font-weight:bold;">أَمْ كَيْفَ يَرْحَلُ إِلَى اللهِ، وَهُوَ مُكَبَّلٌ بِشَهَوَاتِهِ</p>
            <div style="height:1px; background:linear-gradient(to right,rgba(197,155,39,0.4),transparent); margin-bottom:0.6rem;"></div>
            <p style="font-size:0.85rem; line-height:1.65; color:var(--text-main); margin:0 0 0.55rem;">Atau bagaimana bisa <strong>berangkat menuju Allah</strong> sedangkan ia <strong>terbelenggu syahwatnya</strong>?</p>
            <div style="display:inline-flex; align-items:flex-start; gap:0.5rem; padding:0.5rem 0.75rem; border-radius:10px; background:rgba(59,130,246,0.07); border:1px solid rgba(59,130,246,0.25); font-size:0.8rem; line-height:1.6; color:var(--text-main);">
              <span style="width:18px; height:18px; border-radius:50%; background:#3b82f6; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:0.55rem; flex-shrink:0; margin-top:2px;"><i class="fa-solid fa-lightbulb"></i></span>
              <span><strong>Penjelasan mudah:</strong> Seperti mau hijrah tapi kaki dirantai nafsu.</span>
            </div>
          </div>

          <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:14px; padding:1rem 1.15rem;">
            <div style="display:flex; align-items:flex-start; gap:0.7rem; margin-bottom:0.6rem;">
              <span style="width:30px; height:30px; border-radius:50%; background:rgba(197,155,39,0.16); border:1px solid var(--accent); color:var(--text-muted); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.72rem; flex-shrink:0;">03</span>
              <span style="font-size:1.1rem; color:var(--accent); margin-left:auto;"><i class="fa-solid fa-key"></i></span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.25rem; line-height:2.05; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.6rem; font-weight:bold;">أَمْ كَيْفَ يَطْمَعُ أَنْ يَدْخُلَ حَضْرَةَ اللهِ وَهُوَ لَمْ يَتَطَهَّرْ مِنْ جَنَابَةِ غَفَلَاتِهِ؟</p>
            <div style="height:1px; background:linear-gradient(to right,rgba(197,155,39,0.4),transparent); margin-bottom:0.6rem;"></div>
            <p style="font-size:0.85rem; line-height:1.65; color:var(--text-main); margin:0 0 0.55rem;">Atau bagaimana berambisi <strong>masuk hadirat Allah</strong> padahal belum suci dari <strong>junub kelalaiannya</strong>?</p>
            <div style="display:inline-flex; align-items:flex-start; gap:0.5rem; padding:0.5rem 0.75rem; border-radius:10px; background:rgba(59,130,246,0.07); border:1px solid rgba(59,130,246,0.25); font-size:0.8rem; line-height:1.6; color:var(--text-main);">
              <span style="width:18px; height:18px; border-radius:50%; background:#3b82f6; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:0.55rem; flex-shrink:0; margin-top:2px;"><i class="fa-solid fa-lightbulb"></i></span>
              <span><strong>Penjelasan mudah:</strong> Masuk istana Raja harus suci, junub ghaflah itu najis besar.</span>
            </div>
          </div>

          <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:14px; padding:1rem 1.15rem;">
            <div style="display:flex; align-items:flex-start; gap:0.7rem; margin-bottom:0.6rem;">
              <span style="width:30px; height:30px; border-radius:50%; background:rgba(197,155,39,0.16); border:1px solid var(--accent); color:var(--text-muted); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.72rem; flex-shrink:0;">04</span>
              <span style="font-size:1.1rem; color:var(--accent); margin-left:auto;"><i class="fa-solid fa-key"></i></span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.25rem; line-height:2.05; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.6rem; font-weight:bold;">أَمْ كَيْفَ يَرْجُوْ أَنْ يَفْهَمَ دَقَائِقَ الْأَسْرَارِ وَهُوَ لَمْ يَتُبْ مِنْ هَفَوَاتِهِ؟</p>
            <div style="height:1px; background:linear-gradient(to right,rgba(197,155,39,0.4),transparent); margin-bottom:0.6rem;"></div>
            <p style="font-size:0.85rem; line-height:1.65; color:var(--text-main); margin:0 0 0.55rem;">Atau bagaimana berharap <strong>pahami rahasia halus</strong> padahal belum <strong>taubat</strong> dari kesalahan kecilnya?</p>
            <div style="display:inline-flex; align-items:flex-start; gap:0.5rem; padding:0.5rem 0.75rem; border-radius:10px; background:rgba(59,130,246,0.07); border:1px solid rgba(59,130,246,0.25); font-size:0.8rem; line-height:1.6; color:var(--text-main);">
              <span style="width:18px; height:18px; border-radius:50%; background:#3b82f6; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:0.55rem; flex-shrink:0; margin-top:2px;"><i class="fa-solid fa-lightbulb"></i></span>
              <span><strong>Penjelasan mudah:</strong> Rahasia halus butuh hati bersih, masih ada hafawat (kesalahan) tidak bisa.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ========== 02 — KAIDAH BESAR / KUNCI HIKMAH ========== -->
      <div style="background:rgba(197,155,39,0.09); border:2px solid var(--accent); border-radius:18px; padding:1.5rem; margin-bottom:1.5rem; position:relative; overflow:hidden;">
        <div style="position:absolute; top:-50px; right:-50px; width:150px; height:150px; border-radius:50%; background:rgba(197,155,39,0.14);"></div>
        <div style="position:relative; text-align:center;">
          <div style="display:flex; align-items:center; gap:0.6rem; justify-content:center; margin-bottom:1rem;">
            <span style="width:32px; height:32px; border-radius:8px; background:var(--accent); color:var(--bg-card); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">02</span>
            <div style="text-align:left;">
              <div style="font-size:0.62rem; letter-spacing:0.12em; color:var(--accent); font-weight:700;">KAIDAH BESAR &bull; KUNCI HIKMAH</div>
              <div style="font-weight:800; color:var(--primary); font-size:0.95rem;">Qaidah Emas: Dua Lawan Tidak Bisa Berkumpul</div>
            </div>
          </div>

          <span style="display:inline-block; font-size:0.6rem; font-weight:800; letter-spacing:0.14em; padding:3px 12px; border-radius:20px; background:var(--bg-card); border:1px solid var(--accent); color:var(--text-muted); margin-bottom:0.9rem;">QAIDAH &bull; KAIDAH EMAS</span>

          <p style="font-family:'Amiri',serif; font-size:1.6rem; line-height:2.15; color:var(--primary); font-weight:bold; direction:rtl; margin:0 0 1rem;">
            اَلْجَمْعُ بَيْنَ الضِّدَّيْنِ مُحَالٌ،<br>
            كَاجْتِمَاعِ الْحَرَكَةِ وَالسُّكُوْنِ وَالنُّوْرِ وَالظُّلْمَةِ
          </p>

          <div style="max-width:640px; margin:0 auto 1.1rem;">
            <p style="font-size:0.95rem; line-height:1.8; color:var(--text-main); margin:0; font-weight:500;">
              Mengumpulkan dua lawan itu <span style="background:var(--primary); color:var(--bg-card); padding:1px 7px; border-radius:4px;">mustahil</span>,
              seperti gerak &amp; diam, cahaya &amp; gelap &mdash; tidak bisa kumpul dalam satu saat yang sama.
            </p>
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(230px,1fr)); gap:0.6rem; max-width:640px; margin:0 auto 1rem;">
            <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:11px; padding:0.65rem 0.85rem; display:flex; align-items:center; justify-content:space-between; gap:0.5rem;">
              <span style="font-size:0.78rem; color:var(--text-main);"><i class="fa-solid fa-person-walking" style="color:var(--accent);"></i> الحركة &mdash; Gerak</span>
              <span style="font-size:0.7rem; font-weight:800; color:var(--text-muted);">VS</span>
              <span style="font-size:0.78rem; color:var(--text-main);">السكون &mdash; Diam <i class="fa-solid fa-person-standing" style="color:var(--text-muted);"></i></span>
            </div>
            <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:11px; padding:0.65rem 0.85rem; display:flex; align-items:center; justify-content:space-between; gap:0.5rem;">
              <span style="font-size:0.78rem; color:var(--text-main);"><i class="fa-solid fa-sun" style="color:var(--accent);"></i> النور &mdash; Cahaya</span>
              <span style="font-size:0.7rem; font-weight:800; color:var(--text-muted);">VS</span>
              <span style="font-size:0.78rem; color:var(--text-main);">الظُّلْمَة &mdash; Gelap <i class="fa-solid fa-moon" style="color:var(--text-muted);"></i></span>
            </div>
          </div>

          <p style="font-size:0.75rem; color:var(--text-muted); font-weight:600; margin:0;">
            Jika dua lawan tidak bisa bersatu di fisik, apalagi di hati: Nur vs Dhulmah, Rahlah vs Syahwah.
          </p>
        </div>
      </div>

      <!-- ========== 03 — SYARAH: 4 PASANG LAWAN ========== -->
      <div style="margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:0.9rem;">
          <span style="width:32px; height:32px; border-radius:8px; background:var(--primary-light); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">03</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:var(--primary); font-weight:700;">SYARAH &bull; PEMBUKAAN</div>
            <div style="font-weight:800; color:var(--primary); font-size:0.95rem;">4 Pasang Lawan yang Tidak Mungkin Kumpul</div>
          </div>
          <span style="margin-left:auto; font-size:0.58rem; font-weight:800; letter-spacing:0.12em; padding:3px 10px; border-radius:20px; background:var(--primary); color:var(--bg-card);">MUDHAD &bull; LAWAN</span>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:0.9rem;">
          <!-- A -->
          <div style="background:rgba(59,130,246,0.05); border:1px solid rgba(59,130,246,0.25); border-radius:14px; padding:1.05rem 1.15rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.65rem;">
              <span style="font-size:0.58rem; font-weight:800; letter-spacing:0.12em; padding:3px 10px; border-radius:20px; background:var(--bg-card); border:1px solid rgba(59,130,246,0.35); color:var(--text-main);">A &bull; ISYRAQ vs AKWAN</span>
              <span style="font-size:0.55rem; font-weight:800; padding:3px 9px; border-radius:20px; background:var(--primary); color:var(--bg-card);">LAWAN</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.1rem; line-height:2; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.55rem;">فَإِنَّ إِشْرَاقَ الْقَلْبِ بِنُوْرِ الْإِيْمَانِ وَالْيَقِيْنِ مُضَادٌّ لِلظُّلَمِ الَّتِي اسْتَوْلَتْ عَلَيْهِ مِنْ رُكُوْنِهِ إِلَى الْأَغْيَارِ وَالْأَكْوَانِ وَاعْتِمَادِهِ عَلَيْهَا</p>
            <div style="height:1px; background:rgba(59,130,246,0.25); margin-bottom:0.55rem;"></div>
            <p style="font-size:0.8rem; line-height:1.65; color:var(--text-main); margin:0 0 0.7rem;">Isyraq hati dengan <strong>nur iman &amp; yaqin</strong> berlawanan dengan kegelapan yang menguasai karena condong &amp; bersandar pada makhluk.</p>
            <div style="display:flex; gap:0.5rem;">
              <div style="flex:1; background:var(--bg-card); border:1px solid rgba(59,130,246,0.3); border-radius:20px; padding:0.35rem 0.5rem; font-size:0.65rem; font-weight:700; text-align:center; color:var(--text-main);">Nur Iman &amp; Yaqin</div>
              <div style="flex:1; background:var(--bg-card); border:1px solid rgba(59,130,246,0.3); border-radius:20px; padding:0.35rem 0.5rem; font-size:0.65rem; font-weight:700; text-align:center; color:var(--text-main);">Dhulmah &amp; Akwan</div>
            </div>
          </div>

          <!-- B -->
          <div style="background:rgba(59,130,246,0.05); border:1px solid rgba(59,130,246,0.25); border-radius:14px; padding:1.05rem 1.15rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.65rem;">
              <span style="font-size:0.58rem; font-weight:800; letter-spacing:0.12em; padding:3px 10px; border-radius:20px; background:var(--bg-card); border:1px solid rgba(59,130,246,0.35); color:var(--text-main);">B &bull; RAHLAH vs SYAHWAT</span>
              <span style="font-size:0.55rem; font-weight:800; padding:3px 9px; border-radius:20px; background:var(--primary); color:var(--bg-card);">LAWAN</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.1rem; line-height:2; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.55rem;">وَالْمَسِيْرُ إِلَى اللهِ تَعَالَى بِقَطْعِ عَقَبَاتِ النَّفْسِ مُضَادٌّ لِلْاِعْتِقَالِ فِي حَبْسِ الْهَوَى وَالشَّهَوَاتِ</p>
            <div style="height:1px; background:rgba(59,130,246,0.25); margin-bottom:0.55rem;"></div>
            <p style="font-size:0.8rem; line-height:1.65; color:var(--text-main); margin:0 0 0.7rem;">Jalan ke Allah dengan <strong>potong rintangan nafsu</strong> berlawanan dengan terpenjara di <strong>penjara hawa &amp; syahwat</strong>.</p>
            <div style="display:flex; gap:0.5rem;">
              <div style="flex:1; background:var(--bg-card); border:1px solid rgba(59,130,246,0.3); border-radius:20px; padding:0.35rem 0.5rem; font-size:0.65rem; font-weight:700; text-align:center; color:var(--text-main);">Qath'u Aqobat</div>
              <div style="flex:1; background:var(--bg-card); border:1px solid rgba(59,130,246,0.3); border-radius:20px; padding:0.35rem 0.5rem; font-size:0.65rem; font-weight:700; text-align:center; color:var(--text-main);">Habsul Hawa</div>
            </div>
          </div>

          <!-- C -->
          <div style="background:rgba(59,130,246,0.05); border:1px solid rgba(59,130,246,0.25); border-radius:14px; padding:1.05rem 1.15rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.65rem;">
              <span style="font-size:0.58rem; font-weight:800; letter-spacing:0.12em; padding:3px 10px; border-radius:20px; background:var(--bg-card); border:1px solid rgba(59,130,246,0.35); color:var(--text-main);">C &bull; DUKHUL HADRAH vs JANABAH</span>
              <span style="font-size:0.55rem; font-weight:800; padding:3px 9px; border-radius:20px; background:var(--primary); color:var(--bg-card);">LAWAN</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.1rem; line-height:2; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.55rem;">وَدُخُوْلُ حَضْرَةِ اللهِ الْمُقْتَضِيَةُ لِطَهَارَةِ الدَّاخِلِ وَنَزَاهَتِهِ مُضَادٌّ لِمَا هُوَ عَلَيْهِ مِنْ جَنَابَةِ غَفَلَاتِهِ الَّتِي مُقْتَضَاهَا الْإِقْصَاءُ وَالْإِبْعَادُ</p>
            <div style="height:1px; background:rgba(59,130,246,0.25); margin-bottom:0.55rem;"></div>
            <p style="font-size:0.8rem; line-height:1.65; color:var(--text-main); margin:0 0 0.7rem;">Masuk hadirat Allah menuntut <strong>suci &amp; bersih</strong>, berlawanan dengan <strong>junub ghaflah</strong> yang tuntutannya dijauhkan.</p>
            <div style="display:flex; gap:0.5rem;">
              <div style="flex:1; background:var(--bg-card); border:1px solid rgba(59,130,246,0.3); border-radius:20px; padding:0.35rem 0.5rem; font-size:0.65rem; font-weight:700; text-align:center; color:var(--text-main);">Thaharah</div>
              <div style="flex:1; background:var(--bg-card); border:1px solid rgba(59,130,246,0.3); border-radius:20px; padding:0.35rem 0.5rem; font-size:0.65rem; font-weight:700; text-align:center; color:var(--text-main);">Janabah Ghaflah</div>
            </div>
          </div>

          <!-- D -->
          <div style="background:rgba(59,130,246,0.05); border:1px solid rgba(59,130,246,0.25); border-radius:14px; padding:1.05rem 1.15rem;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.65rem;">
              <span style="font-size:0.58rem; font-weight:800; letter-spacing:0.12em; padding:3px 10px; border-radius:20px; background:var(--bg-card); border:1px solid rgba(59,130,246,0.35); color:var(--text-main);">D &bull; FAHM ASRAR vs ISRAR</span>
              <span style="font-size:0.55rem; font-weight:800; padding:3px 9px; border-radius:20px; background:var(--primary); color:var(--bg-card);">LAWAN</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.1rem; line-height:2; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.55rem;">وَفَهْمُ دَقَائِقِ الْأَسْرَارِ الْمُسْتَفَادُ مِنَ التَّقْوَى مُضَادٌّ لِلْإِصْرَارِ عَلَى الْمَعَاصِي وَالْهَفَوَاتِ، وَإِلَيْهِ الْإِشَارَةُ بِقَوْلِهِ عَزَّ مِنْ قَائِلٍ: وَاتَّقُوا اللهَ وَيُعَلِّمُكُمُ اللهُ [البقرة 282]</p>
            <div style="height:1px; background:rgba(59,130,246,0.25); margin-bottom:0.55rem;"></div>
            <p style="font-size:0.8rem; line-height:1.65; color:var(--text-main); margin:0 0 0.7rem;">Paham rahasia halus hasil <strong>taqwa</strong> berlawanan dengan <strong>ngotot maksiat &amp; kesalahan</strong> &mdash; isyarat ayat <em>wattaqullaha wa yu'allimukumullahu</em>.</p>
            <div style="display:flex; gap:0.5rem;">
              <div style="flex:1; background:var(--bg-card); border:1px solid rgba(59,130,246,0.3); border-radius:20px; padding:0.35rem 0.5rem; font-size:0.65rem; font-weight:700; text-align:center; color:var(--text-main);">Daqaaiq Asrar</div>
              <div style="flex:1; background:var(--bg-card); border:1px solid rgba(59,130,246,0.3); border-radius:20px; padding:0.35rem 0.5rem; font-size:0.65rem; font-weight:700; text-align:center; color:var(--text-main);">Israr Ma'ashi</div>
            </div>

            <div style="margin-top:0.85rem; display:grid; gap:0.5rem;">
              <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:11px; padding:0.7rem 0.85rem;">
                <p style="font-family:'Amiri',serif; font-size:1rem; line-height:1.95; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.25rem;">وَاتَّقُوا اللهَ وَيُعَلِّمُكُمُ اللهُ</p>
                <p style="font-size:0.68rem; color:var(--text-muted); margin:0;">[Al-Baqarah 282] &mdash; Taqwa &rarr; Diajar langsung oleh Allah.</p>
              </div>
              <div style="background:rgba(197,155,39,0.12); border:1px solid var(--accent); border-radius:11px; padding:0.7rem 0.85rem;">
                <p style="font-family:'Amiri',serif; font-size:0.95rem; line-height:1.9; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.25rem;">مَنْ عَمِلَ بِمَا عَلِمَ وَرَّثَهُ اللهُ عِلْمَ مَا لَمْ يَعْلَمْ</p>
                <p style="font-size:0.68rem; color:var(--text-muted); margin:0;">Barangsiapa amalkan ilmunya, Allah wariskan ilmu yang belum ia ketahui.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ========== 04 — KISAH INTI ========== -->
      <div style="background:var(--bg-card); border:2px solid var(--accent); border-radius:18px; padding:1.4rem; margin-bottom:1.5rem;">
        <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:1rem; flex-wrap:wrap;">
          <span style="width:32px; height:32px; border-radius:8px; background:#059669; color:var(--bg-card); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">04</span>
          <div>
            <div style="font-size:0.62rem; letter-spacing:0.12em; color:#059669; font-weight:700;">KISAH INTI &bull; WAJIB BACA</div>
            <div style="font-weight:800; color:var(--primary); font-size:0.95rem;">Ahmad bin Hanbal &amp; Ahmad bin Abi Hawari</div>
          </div>
          <span style="margin-left:auto; font-size:0.55rem; font-weight:800; letter-spacing:0.12em; padding:3px 10px; border-radius:20px; background:rgba(220,38,38,0.08); border:1px solid rgba(220,38,38,0.3); color:var(--text-muted);">DIALOG LENGKAP</span>
        </div>

        <div style="text-align:center; margin-bottom:1rem;">
          <p style="font-family:'Amiri',serif; font-size:1.05rem; color:var(--text-muted); letter-spacing:0.08em; direction:rtl; margin:0;">قَالَ يَحْيَى بْنُ مَعِيْنٍ رَحِمَهُ اللهُ تَعَالَى</p>
          <h4 style="font-weight:700; font-size:0.9rem; margin:0.15rem 0 0;">Berkata Yahya bin Ma'in rahimahullah:</h4>
        </div>

        <div style="display:grid; gap:0.8rem;">
          <!-- Dialog 1 -->
          <div style="border:1px solid var(--border-color); border-left:4px solid var(--primary); border-radius:12px; padding:0.9rem 1rem; background:rgba(13,74,62,0.03);">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.55rem;">
              <span style="width:24px; height:24px; border-radius:50%; background:var(--bg-card); border:1px solid var(--accent); color:var(--text-muted); display:inline-flex; align-items:center; justify-content:center; font-size:0.66rem; font-weight:800;">1</span>
              <span style="font-size:0.6rem; font-weight:800; letter-spacing:0.1em; color:var(--primary);">YAHYA BIN MA'IN &mdash; NARATOR</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.15rem; line-height:2; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.5rem;">اِلْتَقَى أَحْمَدُ بْنُ حَنْبَلٍ، وَأَحْمَدُ بْنُ أَبِي الْحَوَارِيِّ، فَقَالَ ابْنُ حَنْبَلٍ لِابْنِ أَبِي الْحَوَارِيِّ يَا أَحْمَدُ، حَدِّثْنَا بِحِكَايَةٍ سَمِعْتَهَا مِنْ أُسْتَاذِكَ أَبِي سُلَيْمَانَ</p>
            <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:10px; padding:0.55rem 0.75rem; font-size:0.78rem; line-height:1.65; color:var(--text-muted);">
              <strong style="color:var(--text-main);">Penjelasan mudah:</strong> Ahmad bin Hanbal bertemu Ahmad bin Abi Hawari, lalu Ibn Hanbal berkata: &ldquo;Wahai Ahmad, ceritakan hikayat yang kau dengar dari gurumu Abu Sulaiman.&rdquo;
            </div>
          </div>

          <!-- Dialog 2 -->
          <div style="border:1px solid var(--border-color); border-left:4px solid #3b82f6; border-radius:12px; padding:0.9rem 1rem; background:rgba(59,130,246,0.03);">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.55rem;">
              <span style="width:24px; height:24px; border-radius:50%; background:var(--bg-card); border:1px solid var(--accent); color:var(--text-muted); display:inline-flex; align-items:center; justify-content:center; font-size:0.66rem; font-weight:800;">2</span>
              <span style="font-size:0.6rem; font-weight:800; letter-spacing:0.1em; color:var(--text-main);">AHMAD BIN ABI HAWARI &mdash; SYARAT</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.15rem; line-height:2; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.5rem;">يَا أَحْمَدُ، قُلْ سُبْحَانَ اللهِ بِلَا عَجَبٍ</p>
            <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:10px; padding:0.55rem 0.75rem; font-size:0.78rem; line-height:1.65; color:var(--text-muted);">
              <strong style="color:var(--text-main);">Penjelasan mudah:</strong> &ldquo;Wahai Ahmad, ucapkan Subhanallah tanpa heran&rdquo; (jangan heran dulu).
            </div>
          </div>

          <!-- Dialog 3 -->
          <div style="border:1px solid var(--border-color); border-left:4px solid #16a34a; border-radius:12px; padding:0.9rem 1rem; background:rgba(22,163,74,0.03);">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.55rem;">
              <span style="width:24px; height:24px; border-radius:50%; background:var(--bg-card); border:1px solid var(--accent); color:var(--text-muted); display:inline-flex; align-items:center; justify-content:center; font-size:0.66rem; font-weight:800;">3</span>
              <span style="font-size:0.6rem; font-weight:800; letter-spacing:0.1em; color:var(--text-muted);">AHMAD BIN HANBAL &mdash; TAAT</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.15rem; line-height:2; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.5rem;">سُبْحَانَ اللهِ وَطَوَّلَهَا بِلَا عَجَبٍ</p>
            <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:10px; padding:0.55rem 0.75rem; font-size:0.78rem; line-height:1.65; color:var(--text-muted);">
              <strong style="color:var(--text-main);">Penjelasan mudah:</strong> &ldquo;Subhanallah&rdquo; &mdash; dan beliau panjangkan ucapan tanpa heran.
            </div>
          </div>

          <!-- Dialog 4 — HIKMAH PUNCAK -->
          <div style="border:2px solid var(--accent); border-radius:12px; padding:0.9rem 1rem; background:rgba(197,155,39,0.12); box-shadow:0 6px 20px rgba(197,155,39,0.15);">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.55rem;">
              <span style="width:24px; height:24px; border-radius:50%; background:var(--primary); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-size:0.66rem; font-weight:800;">4</span>
              <span style="font-size:0.6rem; font-weight:800; letter-spacing:0.1em; color:var(--text-muted);">ABU SULAIMAN AD-DARANI &mdash; HIKMAH PUNCAK</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.2rem; line-height:2.05; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.5rem; font-weight:bold;">سَمِعْتُ أَبَا سُلَيْمَانَ يَقُوْلُ: إِذَا اعْتَقَدَتِ النُّفُوْسُ عَلَى تَرْكِ الْآثَامِ جَالَتْ فِي الْمَلَكُوْتِ وَعَادَتْ إِلَى ذَلِكَ الْعَبْدِ بِطَرَائِفِ الْحِكْمَةِ مِنْ غَيْرِ أَنْ يُؤَدِّيَ إِلَيْهَا عَالِمٌ عِلْمًا</p>
            <div style="background:var(--bg-card); border:1px solid var(--accent); border-radius:10px; padding:0.55rem 0.75rem; font-size:0.8rem; line-height:1.65; color:var(--text-main); font-weight:500;">
              <strong style="color:var(--primary);">Penjelasan mudah:</strong> Aku dengar Abu Sulaiman berkata: &ldquo;Jika jiwa bertekad tinggalkan dosa, ia berkelana di malakut dan kembali ke hamba itu dengan hikmah-hikmah indah <strong>tanpa diajari orang alim</strong>.&rdquo;
            </div>
          </div>

          <!-- Dialog 5 -->
          <div style="border:2px solid var(--primary); border-radius:12px; padding:0.9rem 1rem; background:var(--bg-card);">
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.55rem;">
              <span style="width:24px; height:24px; border-radius:50%; background:var(--primary); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-size:0.66rem; font-weight:800;">5</span>
              <span style="font-size:0.6rem; font-weight:800; letter-spacing:0.1em; color:var(--primary);">REAKSI IMAM AHMAD &mdash; TAKJUB LUAR BIASA</span>
            </div>
            <p style="font-family:'Amiri',serif; font-size:1.2rem; line-height:2.05; color:var(--primary); direction:rtl; text-align:right; margin:0 0 0.5rem; font-weight:bold;">فَقَامَ أَحْمَدُ بْنُ حَنْبَلٍ ثَلَاثًا وَجَلَسَ ثَلَاثًا وَقَالَ: مَا سَمِعْتُ فِي الْإِسْلَامِ بِحِكَايَةٍ أَعْجَبَ إِلَيَّ مِنْ هَذِهِ .. ثُمَّ ذَكَرَ الْحَدِيْثَ الَّذِي ذَكَرْنَاهُ مَنْ عَمِلَ بِمَا عَلِمَ وَرَّثَهُ اللهُ عِلْمَ مَا لَمْ يَعْلَمْ ثُمَّ قَالَ لِأَحْمَدَ بْنِ أَبِي الْحَوَارِيِّ: صَدَقْتَ يَا أَحْمَدُ، وَصَدَقَ شَيْخُكَ</p>
            <div style="background:rgba(13,74,62,0.04); border:1px solid var(--border-color); border-radius:10px; padding:0.55rem 0.75rem; font-size:0.8rem; line-height:1.65; color:var(--text-main); font-weight:500;">
              <strong style="color:var(--primary);">Penjelasan mudah:</strong> Maka Ahmad bin Hanbal berdiri 3x duduk 3x (saking takjub) berkata: &ldquo;Tidak pernah aku dengar hikayat paling menakjubkan dalam Islam seperti ini&rdquo;, lalu sebut hadis <em>man 'amila bima 'alima</em> &hellip; lalu berkata: &ldquo;Benar engkau wahai Ahmad, dan benar gurumu.&rdquo;
            </div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(190px,1fr)); gap:0.6rem; margin-top:1rem;">
          <div style="background:rgba(197,155,39,0.09); border:1px solid var(--accent); border-radius:12px; padding:0.75rem; text-align:center;">
            <div style="font-size:1.15rem; color:var(--accent);"><i class="fa-solid fa-bullseye"></i></div>
            <p style="font-size:0.65rem; font-weight:800; margin:0.25rem 0 0;">I'TIQAD TARKUL ATSAM</p>
            <p style="font-size:0.65rem; color:var(--text-muted); margin:0.1rem 0 0;">Tekad bulat tinggalkan dosa</p>
          </div>
          <div style="background:rgba(59,130,246,0.06); border:1px solid rgba(59,130,246,0.25); border-radius:12px; padding:0.75rem; text-align:center;">
            <div style="font-size:1.15rem; color:#3b82f6;"><i class="fa-solid fa-globe"></i></div>
            <p style="font-size:0.65rem; font-weight:800; margin:0.25rem 0 0;">JALAT FIL MALAKUT</p>
            <p style="font-size:0.65rem; color:var(--text-muted); margin:0.1rem 0 0;">Jiwa berkelana di alam malakut</p>
          </div>
          <div style="background:rgba(197,155,39,0.09); border:1px solid var(--accent); border-radius:12px; padding:0.75rem; text-align:center;">
            <div style="font-size:1.15rem; color:var(--accent);"><i class="fa-solid fa-gem"></i></div>
            <p style="font-size:0.65rem; font-weight:800; margin:0.25rem 0 0;">TARA'IFUL HIKMAH</p>
            <p style="font-size:0.65rem; color:var(--text-muted); margin:0.1rem 0 0;">Kembali bawa hikmah tanpa guru</p>
          </div>
        </div>
      </div>

      <!-- ========== 05 — PENUTUP ========== -->
      <div style="background:rgba(197,155,39,0.09); border:2px solid var(--accent); border-radius:18px; padding:1.5rem; margin-bottom:1.5rem; position:relative; overflow:hidden;">
        <div style="position:absolute; top:0; left:50%; transform:translateX(-50%); width:80%; height:1px; background:linear-gradient(to right,transparent,var(--accent),transparent);"></div>
        <div style="position:relative; text-align:center;">
          <div style="display:flex; align-items:center; gap:0.6rem; justify-content:center; margin-bottom:0.9rem;">
            <span style="width:32px; height:32px; border-radius:8px; background:var(--primary); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-weight:800; font-size:0.75rem;">05</span>
            <div style="text-align:left;">
              <div style="font-size:0.62rem; letter-spacing:0.12em; color:var(--accent); font-weight:700;">KHATIMAH</div>
              <div style="font-weight:800; color:var(--primary); font-size:0.95rem;">Penutup &mdash; Kesimpulan Pengarang</div>
            </div>
          </div>

          <p style="font-family:'Amiri',serif; font-size:1.35rem; line-height:2.15; color:var(--primary); font-weight:bold; direction:rtl; margin:0 0 1.1rem;">
            وَلِأَجْلِ كَوْنِ هَذِهِ الْأَشْيَاءِ أَضْدَادًا عَجِبَ الْمُؤَلِّفُ رَحِمَهُ اللهُ،<br>
            مِمَّنْ يَعْتَقِدُ صِحَّةَ اجْتِمَاعِهَا،<br>
            وَمِمَّنْ طَمِعَ فِي نَيْلِ مَرَاتِبِ الرِّجَالِ مَعَ كَوْنِهِ عَلَى أَقْبَحِ الْخِلَالِ
          </p>

          <div style="max-width:660px; margin:0 auto 1rem; background:var(--bg-card); border:1px solid var(--accent); border-radius:14px; padding:1rem 1.15rem; text-align:left;">
            <p style="font-size:0.84rem; line-height:1.75; color:var(--text-main); margin:0 0 0.7rem;">
              <strong style="color:var(--primary);">Karena ini adalah lawan,</strong> pengarang heran pada orang
              yang yakin bisa kumpul (cahaya &amp; gelap, gerak &amp; diam dalam hati),
              <span style="background:rgba(197,155,39,0.2); padding:1px 5px; border-radius:4px; font-weight:700;">dan orang yang ngarep dapat maqam Rijal</span>
              (wali-wali besar) padahal masih sifat paling buruk &mdash; masih cinta dunia, terbelenggu syahwat,
              junub ghaflah, dan belum taubat dari hafawat.
            </p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(230px,1fr)); gap:0.4rem; font-size:0.78rem;">
              <div style="display:flex; gap:0.4rem; align-items:flex-start;"><span style="color:var(--text-muted);"><i class="fa-solid fa-xmark"></i></span><span>Yakin lawan bisa kumpul = mustahil</span></div>
              <div style="display:flex; gap:0.4rem; align-items:flex-start;"><span style="color:var(--text-muted);"><i class="fa-solid fa-xmark"></i></span><span>Ngarep maqam tinggi tapi akhlak buruk = tertipu</span></div>
            </div>
          </div>

          <div style="display:flex; justify-content:center; gap:0.4rem; flex-wrap:wrap;">
            <span class="count-badge">#TazkiyatunNafs</span>
            <span class="count-badge">#JamudDhiddaen</span>
            <span class="count-badge">#Hikmah13</span>
            <span class="count-badge">#SyarahIbnuAbbad</span>
          </div>
        </div>
      </div>

      <!-- ================= RINGKASAN ================= -->
      <div style="background:var(--bg-card); border:1px solid var(--accent); border-left:5px solid var(--accent); border-radius:14px; padding:1.1rem 1.25rem; margin-bottom:1.5rem; display:flex; align-items:flex-start; gap:0.85rem;">
        <span style="width:38px; height:38px; border-radius:50%; background:var(--primary); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; font-size:0.95rem; flex-shrink:0;"><i class="fa-solid fa-feather-pointed"></i></span>
        <div>
          <p style="font-size:0.85rem; line-height:1.75; color:var(--text-main); margin:0;">
            <strong style="color:var(--primary);">Ringkas Hikmah 13:</strong>
            Hati tidak mungkin menerima dua yang saling berlawanan. <strong>Isyraq</strong> (nur iman &amp; yaqin)
            mustahil stumbling pada <strong>akwan</strong>; <strong>Rahlah</strong> ke Allah mustahil sambil
            terbelenggu <strong>syahwat</strong>; <strong>dukhul hadrah</strong> mustahil dengan
            <strong>janabah ghaflah</strong>; dan <strong>fahm asrar</strong> mustahil tanpa
            <strong>taubat</strong> dari hafawat &mdash;
            <span dir="rtl" style="font-family:'Amiri',serif; font-size:1.05rem;">لا يَجْتَمِعُ الضِّدَّيْنِ</span>
          </p>
        </div>
      </div>

      <!-- ================= PENUTUP HALAMAN ================= -->
      <div style="text-align:center; padding:1.5rem 0 0.5rem; border-top:1px solid var(--border-color);">
        <p style="font-family:'Amiri',serif; font-size:1.25rem; line-height:1.9; color:var(--primary); margin:0 0 0.5rem;">وَاللَّهُ أَعْلَمُ بِالصَّوَابِ</p>
        <span style="font-size:0.65rem; letter-spacing:0.16em; color:var(--text-muted); font-weight:700;">SYARAH AL-HIKAM &bull; IBNU 'ABBAD &bull; HIKMAH 13</span>
      </div>
    `;
  },
};