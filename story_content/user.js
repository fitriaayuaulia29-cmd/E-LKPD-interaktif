function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rNxac9GSCK":
        Script1();
        break;
      case "6f1jZ8WRsSZ":
        Script2();
        break;
      case "5Z5UEo5KpVp":
        Script3();
        break;
      case "6HwBdh11wqe":
        Script4();
        break;
      case "6LCi0a34HsI":
        Script5();
        break;
      case "6hYFu9XpZxT":
        Script6();
        break;
  }
}

function Script1()
{
  const player = GetPlayer();

// Payload disesuaikan 100% dengan urutan dan penulisan header spreadsheet terbaru
const payload = {
  "pertemuan": player.GetVar("pertemuan"), 
  "topik": player.GetVar("topik"),         
  "kelompok": player.GetVar("kelompok"),
  "namaanggota1": player.GetVar("namaanggota1"),
  "namaanggota2": player.GetVar("namaanggota2"),
  "namaanggota3": player.GetVar("namaanggota3"),
  "namaanggota4": player.GetVar("namaanggota4"),
  "namaanggota5": player.GetVar("namaanggota5"),
  "namaanggota6": player.GetVar("namaanggota6"),

  // --- MATERI PENCEMARAN TANAH ---
  "BioOrient_Tanah_Soal1_Jawaban1Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban1Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban1Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban1Penyebab"),
  "BioOrient_Tanah_Soal1_Jawaban2Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban2Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban2Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban2Penyebab"),
  "BioOrient_Tanah_Soal1_Jawaban3Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban3Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban3Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban3Penyebab"),
  "Skor_BioOrient_Tanah_Soal1": player.GetVar("Skor_BioOrient_Tanah_Soal1"),
  
  "BioOrient_Tanah_Soal2_MasalahUtama": player.GetVar("BioOrient_Tanah_Soal2_MasalahUtama"),
  "BioOrient_Tanah_Soal2_Alasan": player.GetVar("BioOrient_Tanah_Soal2_Alasan"),
  "Skor_BioOrient_Tanah_Soal2": player.GetVar("Skor_BioOrient_Tanah_Soal2"),
  
  "BioThink_Tanah_JawabanRumusanMasalah": player.GetVar("BioThink_Tanah_JawabanRumusanMasalah"),
  "Skor_BioThink_Tanah_RumusanMasalah": player.GetVar("Skor_BioThink_Tanah_RumusanMasalah"),
  
  "BioThink_Tanah_JawabanTujuan": player.GetVar("BioThink_Tanah_JawabanTujuan"),
  "Skor_BioThink_Tanah_Tujuan": player.GetVar("Skor_BioThink_Tanah_Tujuan"), // Perbaikan huruf 'T' kapital
  
  "BioActivity_Tanah_Soal1_Jawaban1Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban1Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban1Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban1Alasan"),
  "BioActivity_Tanah_Soal1_Jawaban2Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban2Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban2Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban2Alasan"),
  "BioActivity_Tanah_Soal1_Jawaban3Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban3Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban3Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban3Alasan"),
  "Skor_BioActivity_Tanah_BerbagaiAlternatif": player.GetVar("Skor_BioActivity_Tanah_BerbagaiAlternatif"),
  
  "BioActivity_Tanah_Soal2_JawabanAlternatif": player.GetVar("BioActivity_Tanah_Soal2_JawabanAlternatif"),
  "BioActivity_Tanah_Soal2_JawabanAlasan": player.GetVar("BioActivity_Tanah_Soal2_JawabanAlasan"),
  "Skor_BioActivity_Tanah_Soal2_AlternatifPILIH": player.GetVar("Skor_BioActivity_Tanah_Soal2_AlternatifPILIH"),
  
  "BioAneva_Tanah_JawabanKelebihan1": player.GetVar("BioAneva_Tanah_JawabanKelebihan1"),
  "BioAneva_Tanah_JawabanKelebihan2": player.GetVar("BioAneva_Tanah_JawabanKelebihan2"),
  "BioAneva_Tanah_JawabanKekurangan1": player.GetVar("BioAneva_Tanah_JawabanKekurangan1"),
  "BioAneva_Tanah_JawabanKekurangan2": player.GetVar("BioAneva_Tanah_JawabanKekurangan2"),

  // --- MATERI PENCEMARAN AIR ---
  "Air_BioOrient_Soal1_Jawaban1Masalah": player.GetVar("Air_BioOrient_Soal1_Jawaban1Masalah"),
  "Air_BioOrient_soal1_Jawaban1Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban1Alasan"),     // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban2Masalah": player.GetVar("Air_BioOrient_soal1_Jawaban2Masalah"),   // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban2Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban2Alasan"),     // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban3Masalah": player.GetVar("Air_BioOrient_soal1_Jawaban3Masalah"),   // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban3Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban3Alasan"),     // Perbaikan huruf 's' kecil
  "Air_Skor_BioOrient_Soal1": player.GetVar("Air_Skor_BioOrient_Soal1"),
  
  "Air_BioOrient_Soal2_JawabanMasalah": player.GetVar("Air_BioOrient_Soal2_JawabanMasalah"),
  "Air_BioOrient_Soal2_JawabanAlasan": player.GetVar("Air_BioOrient_Soal2_JawabanAlasan"),
  "Air_Skor_BioOrient_Soal2": player.GetVar("Air_Skor_BioOrient_Soal2"),
  
  "Air_BioThink_JawabanRumusanMasalah": player.GetVar("Air_BioThink_JawabanRumusanMasalah"),
  "Air_Skor_BioThink_RumusanMasalah": player.GetVar("Air_Skor_BioThink_RumusanMasalah"),
  
  "Air_BioThink_JawabanTujuan": player.GetVar("Air_BioThink_JawabanTujuan"),
  "Air_Skor_BioThink_Tujuan": player.GetVar("Air_Skor_BioThink_Tujuan"),
  
  "Air_BioActivity_Jawaban1Alternatif": player.GetVar("Air_BioActivity_Jawaban1Alternatif"),
  "Air_BioActivity_Jawaban1Alasan": player.GetVar("Air_BioActivity_Jawaban1Alasan"),
  "Air_BioActivity_Jawaban2Alternatif": player.GetVar("Air_BioActivity_Jawaban2Alternatif"),
  "Air_BioActivity_Jawaban2Alasan": player.GetVar("Air_BioActivity_Jawaban2Alasan"),
  "Air_BioActivity_Jawaban3Alternatif": player.GetVar("Air_BioActivity_Jawaban3Alternatif"),
  "Air_BioActivity_Jawaban3Alasan": player.GetVar("Air_BioActivity_Jawaban3Alasan"),
  "Air_Skor_BioActivity_Alternatifsolusi": player.GetVar("Air_Skor_BioActivity_Alternatifsolusi"),
  
  "Air_BioActivity_JawabanAlternatifFIX": player.GetVar("Air_BioActivity_JawabanAlternatifFIX"),
  "Air_BioActivity_JawabanAlasanAlternatifFIX": player.GetVar("Air_BioActivity_JawabanAlasanAlternatifFIX"),
  "Air_Skor_BioActivity_ALTERNATIFDIPILIH": player.GetVar("Air_Skor_BioActivity_ALTERNATIFDIPILIH"),
  
  "Air_BioAneva_JawabanKelebihan1": player.GetVar("Air_BioAneva_JawabanKelebihan1"),
  "Air_BioAneva_JawabanKelebihan2": player.GetVar("Air_BioAneva_JawabanKelebihan2"),
  "Air_BioAneva_JawabanKekurangan1": player.GetVar("Air_BioAneva_JawabanKekurangan1"),
  "Air_BioAnev_JawabanKekurangan2": player.GetVar("Air_BioAnev_JawabanKekurangan2")             // Perbaikan dari BioAneva ke BioAnev
};

const url = "https://script.google.com/macros/s/AKfycbyP89y4Bi0_E3skELQuvJlrQ6r5ZUvF_bdE5vhkaCR_2d0bt9gHQZip3EW_qN_0YRGgOw/exec";

fetch(url, {
  method: 'POST',
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => { console.log("Sukses terintegrasi ke Sheets:", data); })
.catch(err => { console.error("Error Integrasi:", err); });
}

function Script2()
{
  const player = GetPlayer();

// Payload disesuaikan 100% dengan urutan dan penulisan header spreadsheet terbaru
const payload = {
  "pertemuan": player.GetVar("pertemuan"), 
  "topik": player.GetVar("topik"),         
  "kelompok": player.GetVar("kelompok"),
  "namaanggota1": player.GetVar("namaanggota1"),
  "namaanggota2": player.GetVar("namaanggota2"),
  "namaanggota3": player.GetVar("namaanggota3"),
  "namaanggota4": player.GetVar("namaanggota4"),
  "namaanggota5": player.GetVar("namaanggota5"),
  "namaanggota6": player.GetVar("namaanggota6"),

  // --- MATERI PENCEMARAN TANAH ---
  "BioOrient_Tanah_Soal1_Jawaban1Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban1Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban1Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban1Penyebab"),
  "BioOrient_Tanah_Soal1_Jawaban2Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban2Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban2Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban2Penyebab"),
  "BioOrient_Tanah_Soal1_Jawaban3Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban3Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban3Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban3Penyebab"),
  "Skor_BioOrient_Tanah_Soal1": player.GetVar("Skor_BioOrient_Tanah_Soal1"),
  
  "BioOrient_Tanah_Soal2_MasalahUtama": player.GetVar("BioOrient_Tanah_Soal2_MasalahUtama"),
  "BioOrient_Tanah_Soal2_Alasan": player.GetVar("BioOrient_Tanah_Soal2_Alasan"),
  "Skor_BioOrient_Tanah_Soal2": player.GetVar("Skor_BioOrient_Tanah_Soal2"),
  
  "BioThink_Tanah_JawabanRumusanMasalah": player.GetVar("BioThink_Tanah_JawabanRumusanMasalah"),
  "Skor_BioThink_Tanah_RumusanMasalah": player.GetVar("Skor_BioThink_Tanah_RumusanMasalah"),
  
  "BioThink_Tanah_JawabanTujuan": player.GetVar("BioThink_Tanah_JawabanTujuan"),
  "Skor_BioThink_Tanah_Tujuan": player.GetVar("Skor_BioThink_Tanah_Tujuan"), // Perbaikan huruf 'T' kapital
  
  "BioActivity_Tanah_Soal1_Jawaban1Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban1Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban1Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban1Alasan"),
  "BioActivity_Tanah_Soal1_Jawaban2Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban2Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban2Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban2Alasan"),
  "BioActivity_Tanah_Soal1_Jawaban3Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban3Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban3Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban3Alasan"),
  "Skor_BioActivity_Tanah_BerbagaiAlternatif": player.GetVar("Skor_BioActivity_Tanah_BerbagaiAlternatif"),
  
  "BioActivity_Tanah_Soal2_JawabanAlternatif": player.GetVar("BioActivity_Tanah_Soal2_JawabanAlternatif"),
  "BioActivity_Tanah_Soal2_JawabanAlasan": player.GetVar("BioActivity_Tanah_Soal2_JawabanAlasan"),
  "Skor_BioActivity_Tanah_Soal2_AlternatifPILIH": player.GetVar("Skor_BioActivity_Tanah_Soal2_AlternatifPILIH"),
  
  "BioAneva_Tanah_JawabanKelebihan1": player.GetVar("BioAneva_Tanah_JawabanKelebihan1"),
  "BioAneva_Tanah_JawabanKelebihan2": player.GetVar("BioAneva_Tanah_JawabanKelebihan2"),
  "BioAneva_Tanah_JawabanKekurangan1": player.GetVar("BioAneva_Tanah_JawabanKekurangan1"),
  "BioAneva_Tanah_JawabanKekurangan2": player.GetVar("BioAneva_Tanah_JawabanKekurangan2"),

  // --- MATERI PENCEMARAN AIR ---
  "Air_BioOrient_Soal1_Jawaban1Masalah": player.GetVar("Air_BioOrient_Soal1_Jawaban1Masalah"),
  "Air_BioOrient_soal1_Jawaban1Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban1Alasan"),     // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban2Masalah": player.GetVar("Air_BioOrient_soal1_Jawaban2Masalah"),   // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban2Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban2Alasan"),     // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban3Masalah": player.GetVar("Air_BioOrient_soal1_Jawaban3Masalah"),   // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban3Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban3Alasan"),     // Perbaikan huruf 's' kecil
  "Air_Skor_BioOrient_Soal1": player.GetVar("Air_Skor_BioOrient_Soal1"),
  
  "Air_BioOrient_Soal2_JawabanMasalah": player.GetVar("Air_BioOrient_Soal2_JawabanMasalah"),
  "Air_BioOrient_Soal2_JawabanAlasan": player.GetVar("Air_BioOrient_Soal2_JawabanAlasan"),
  "Air_Skor_BioOrient_Soal2": player.GetVar("Air_Skor_BioOrient_Soal2"),
  
  "Air_BioThink_JawabanRumusanMasalah": player.GetVar("Air_BioThink_JawabanRumusanMasalah"),
  "Air_Skor_BioThink_RumusanMasalah": player.GetVar("Air_Skor_BioThink_RumusanMasalah"),
  
  "Air_BioThink_JawabanTujuan": player.GetVar("Air_BioThink_JawabanTujuan"),
  "Air_Skor_BioThink_Tujuan": player.GetVar("Air_Skor_BioThink_Tujuan"),
  
  "Air_BioActivity_Jawaban1Alternatif": player.GetVar("Air_BioActivity_Jawaban1Alternatif"),
  "Air_BioActivity_Jawaban1Alasan": player.GetVar("Air_BioActivity_Jawaban1Alasan"),
  "Air_BioActivity_Jawaban2Alternatif": player.GetVar("Air_BioActivity_Jawaban2Alternatif"),
  "Air_BioActivity_Jawaban2Alasan": player.GetVar("Air_BioActivity_Jawaban2Alasan"),
  "Air_BioActivity_Jawaban3Alternatif": player.GetVar("Air_BioActivity_Jawaban3Alternatif"),
  "Air_BioActivity_Jawaban3Alasan": player.GetVar("Air_BioActivity_Jawaban3Alasan"),
  "Air_Skor_BioActivity_Alternatifsolusi": player.GetVar("Air_Skor_BioActivity_Alternatifsolusi"),
  
  "Air_BioActivity_JawabanAlternatifFIX": player.GetVar("Air_BioActivity_JawabanAlternatifFIX"),
  "Air_BioActivity_JawabanAlasanAlternatifFIX": player.GetVar("Air_BioActivity_JawabanAlasanAlternatifFIX"),
  "Air_Skor_BioActivity_ALTERNATIFDIPILIH": player.GetVar("Air_Skor_BioActivity_ALTERNATIFDIPILIH"),
  
  "Air_BioAneva_JawabanKelebihan1": player.GetVar("Air_BioAneva_JawabanKelebihan1"),
  "Air_BioAneva_JawabanKelebihan2": player.GetVar("Air_BioAneva_JawabanKelebihan2"),
  "Air_BioAneva_JawabanKekurangan1": player.GetVar("Air_BioAneva_JawabanKekurangan1"),
  "Air_BioAnev_JawabanKekurangan2": player.GetVar("Air_BioAnev_JawabanKekurangan2")             // Perbaikan dari BioAneva ke BioAnev
};

const url = "https://script.google.com/macros/s/AKfycbyP89y4Bi0_E3skELQuvJlrQ6r5ZUvF_bdE5vhkaCR_2d0bt9gHQZip3EW_qN_0YRGgOw/exec";

fetch(url, {
  method: 'POST',
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => { console.log("Sukses terintegrasi ke Sheets:", data); })
.catch(err => { console.error("Error Integrasi:", err); });
}

function Script3()
{
  const player = GetPlayer();

// Payload disesuaikan 100% dengan urutan dan penulisan header spreadsheet terbaru
const payload = {
  "pertemuan": player.GetVar("pertemuan"), 
  "topik": player.GetVar("topik"),         
  "kelompok": player.GetVar("kelompok"),
  "namaanggota1": player.GetVar("namaanggota1"),
  "namaanggota2": player.GetVar("namaanggota2"),
  "namaanggota3": player.GetVar("namaanggota3"),
  "namaanggota4": player.GetVar("namaanggota4"),
  "namaanggota5": player.GetVar("namaanggota5"),
  "namaanggota6": player.GetVar("namaanggota6"),

  // --- MATERI PENCEMARAN TANAH ---
  "BioOrient_Tanah_Soal1_Jawaban1Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban1Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban1Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban1Penyebab"),
  "BioOrient_Tanah_Soal1_Jawaban2Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban2Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban2Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban2Penyebab"),
  "BioOrient_Tanah_Soal1_Jawaban3Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban3Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban3Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban3Penyebab"),
  "Skor_BioOrient_Tanah_Soal1": player.GetVar("Skor_BioOrient_Tanah_Soal1"),
  
  "BioOrient_Tanah_Soal2_MasalahUtama": player.GetVar("BioOrient_Tanah_Soal2_MasalahUtama"),
  "BioOrient_Tanah_Soal2_Alasan": player.GetVar("BioOrient_Tanah_Soal2_Alasan"),
  "Skor_BioOrient_Tanah_Soal2": player.GetVar("Skor_BioOrient_Tanah_Soal2"),
  
  "BioThink_Tanah_JawabanRumusanMasalah": player.GetVar("BioThink_Tanah_JawabanRumusanMasalah"),
  "Skor_BioThink_Tanah_RumusanMasalah": player.GetVar("Skor_BioThink_Tanah_RumusanMasalah"),
  
  "BioThink_Tanah_JawabanTujuan": player.GetVar("BioThink_Tanah_JawabanTujuan"),
  "Skor_BioThink_Tanah_Tujuan": player.GetVar("Skor_BioThink_Tanah_Tujuan"), // Perbaikan huruf 'T' kapital
  
  "BioActivity_Tanah_Soal1_Jawaban1Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban1Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban1Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban1Alasan"),
  "BioActivity_Tanah_Soal1_Jawaban2Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban2Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban2Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban2Alasan"),
  "BioActivity_Tanah_Soal1_Jawaban3Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban3Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban3Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban3Alasan"),
  "Skor_BioActivity_Tanah_BerbagaiAlternatif": player.GetVar("Skor_BioActivity_Tanah_BerbagaiAlternatif"),
  
  "BioActivity_Tanah_Soal2_JawabanAlternatif": player.GetVar("BioActivity_Tanah_Soal2_JawabanAlternatif"),
  "BioActivity_Tanah_Soal2_JawabanAlasan": player.GetVar("BioActivity_Tanah_Soal2_JawabanAlasan"),
  "Skor_BioActivity_Tanah_Soal2_AlternatifPILIH": player.GetVar("Skor_BioActivity_Tanah_Soal2_AlternatifPILIH"),
  
  "BioAneva_Tanah_JawabanKelebihan1": player.GetVar("BioAneva_Tanah_JawabanKelebihan1"),
  "BioAneva_Tanah_JawabanKelebihan2": player.GetVar("BioAneva_Tanah_JawabanKelebihan2"),
  "BioAneva_Tanah_JawabanKekurangan1": player.GetVar("BioAneva_Tanah_JawabanKekurangan1"),
  "BioAneva_Tanah_JawabanKekurangan2": player.GetVar("BioAneva_Tanah_JawabanKekurangan2"),

  // --- MATERI PENCEMARAN AIR ---
  "Air_BioOrient_Soal1_Jawaban1Masalah": player.GetVar("Air_BioOrient_Soal1_Jawaban1Masalah"),
  "Air_BioOrient_soal1_Jawaban1Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban1Alasan"),     // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban2Masalah": player.GetVar("Air_BioOrient_soal1_Jawaban2Masalah"),   // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban2Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban2Alasan"),     // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban3Masalah": player.GetVar("Air_BioOrient_soal1_Jawaban3Masalah"),   // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban3Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban3Alasan"),     // Perbaikan huruf 's' kecil
  "Air_Skor_BioOrient_Soal1": player.GetVar("Air_Skor_BioOrient_Soal1"),
  
  "Air_BioOrient_Soal2_JawabanMasalah": player.GetVar("Air_BioOrient_Soal2_JawabanMasalah"),
  "Air_BioOrient_Soal2_JawabanAlasan": player.GetVar("Air_BioOrient_Soal2_JawabanAlasan"),
  "Air_Skor_BioOrient_Soal2": player.GetVar("Air_Skor_BioOrient_Soal2"),
  
  "Air_BioThink_JawabanRumusanMasalah": player.GetVar("Air_BioThink_JawabanRumusanMasalah"),
  "Air_Skor_BioThink_RumusanMasalah": player.GetVar("Air_Skor_BioThink_RumusanMasalah"),
  
  "Air_BioThink_JawabanTujuan": player.GetVar("Air_BioThink_JawabanTujuan"),
  "Air_Skor_BioThink_Tujuan": player.GetVar("Air_Skor_BioThink_Tujuan"),
  
  "Air_BioActivity_Jawaban1Alternatif": player.GetVar("Air_BioActivity_Jawaban1Alternatif"),
  "Air_BioActivity_Jawaban1Alasan": player.GetVar("Air_BioActivity_Jawaban1Alasan"),
  "Air_BioActivity_Jawaban2Alternatif": player.GetVar("Air_BioActivity_Jawaban2Alternatif"),
  "Air_BioActivity_Jawaban2Alasan": player.GetVar("Air_BioActivity_Jawaban2Alasan"),
  "Air_BioActivity_Jawaban3Alternatif": player.GetVar("Air_BioActivity_Jawaban3Alternatif"),
  "Air_BioActivity_Jawaban3Alasan": player.GetVar("Air_BioActivity_Jawaban3Alasan"),
  "Air_Skor_BioActivity_Alternatifsolusi": player.GetVar("Air_Skor_BioActivity_Alternatifsolusi"),
  
  "Air_BioActivity_JawabanAlternatifFIX": player.GetVar("Air_BioActivity_JawabanAlternatifFIX"),
  "Air_BioActivity_JawabanAlasanAlternatifFIX": player.GetVar("Air_BioActivity_JawabanAlasanAlternatifFIX"),
  "Air_Skor_BioActivity_ALTERNATIFDIPILIH": player.GetVar("Air_Skor_BioActivity_ALTERNATIFDIPILIH"),
  
  "Air_BioAneva_JawabanKelebihan1": player.GetVar("Air_BioAneva_JawabanKelebihan1"),
  "Air_BioAneva_JawabanKelebihan2": player.GetVar("Air_BioAneva_JawabanKelebihan2"),
  "Air_BioAneva_JawabanKekurangan1": player.GetVar("Air_BioAneva_JawabanKekurangan1"),
  "Air_BioAnev_JawabanKekurangan2": player.GetVar("Air_BioAnev_JawabanKekurangan2")             // Perbaikan dari BioAneva ke BioAnev
};

const url = "https://script.google.com/macros/s/AKfycbyP89y4Bi0_E3skELQuvJlrQ6r5ZUvF_bdE5vhkaCR_2d0bt9gHQZip3EW_qN_0YRGgOw/exec";

fetch(url, {
  method: 'POST',
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => { console.log("Sukses terintegrasi ke Sheets:", data); })
.catch(err => { console.error("Error Integrasi:", err); });
}

function Script4()
{
  const player = GetPlayer();

// Payload disesuaikan 100% dengan urutan dan penulisan header spreadsheet terbaru
const payload = {
  "pertemuan": player.GetVar("pertemuan"), 
  "topik": player.GetVar("topik"),         
  "kelompok": player.GetVar("kelompok"),
  "namaanggota1": player.GetVar("namaanggota1"),
  "namaanggota2": player.GetVar("namaanggota2"),
  "namaanggota3": player.GetVar("namaanggota3"),
  "namaanggota4": player.GetVar("namaanggota4"),
  "namaanggota5": player.GetVar("namaanggota5"),
  "namaanggota6": player.GetVar("namaanggota6"),

  // --- MATERI PENCEMARAN TANAH ---
  "BioOrient_Tanah_Soal1_Jawaban1Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban1Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban1Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban1Penyebab"),
  "BioOrient_Tanah_Soal1_Jawaban2Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban2Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban2Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban2Penyebab"),
  "BioOrient_Tanah_Soal1_Jawaban3Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban3Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban3Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban3Penyebab"),
  "Skor_BioOrient_Tanah_Soal1": player.GetVar("Skor_BioOrient_Tanah_Soal1"),
  
  "BioOrient_Tanah_Soal2_MasalahUtama": player.GetVar("BioOrient_Tanah_Soal2_MasalahUtama"),
  "BioOrient_Tanah_Soal2_Alasan": player.GetVar("BioOrient_Tanah_Soal2_Alasan"),
  "Skor_BioOrient_Tanah_Soal2": player.GetVar("Skor_BioOrient_Tanah_Soal2"),
  
  "BioThink_Tanah_JawabanRumusanMasalah": player.GetVar("BioThink_Tanah_JawabanRumusanMasalah"),
  "Skor_BioThink_Tanah_RumusanMasalah": player.GetVar("Skor_BioThink_Tanah_RumusanMasalah"),
  
  "BioThink_Tanah_JawabanTujuan": player.GetVar("BioThink_Tanah_JawabanTujuan"),
  "Skor_BioThink_Tanah_Tujuan": player.GetVar("Skor_BioThink_Tanah_Tujuan"), // Perbaikan huruf 'T' kapital
  
  "BioActivity_Tanah_Soal1_Jawaban1Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban1Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban1Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban1Alasan"),
  "BioActivity_Tanah_Soal1_Jawaban2Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban2Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban2Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban2Alasan"),
  "BioActivity_Tanah_Soal1_Jawaban3Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban3Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban3Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban3Alasan"),
  "Skor_BioActivity_Tanah_BerbagaiAlternatif": player.GetVar("Skor_BioActivity_Tanah_BerbagaiAlternatif"),
  
  "BioActivity_Tanah_Soal2_JawabanAlternatif": player.GetVar("BioActivity_Tanah_Soal2_JawabanAlternatif"),
  "BioActivity_Tanah_Soal2_JawabanAlasan": player.GetVar("BioActivity_Tanah_Soal2_JawabanAlasan"),
  "Skor_BioActivity_Tanah_Soal2_AlternatifPILIH": player.GetVar("Skor_BioActivity_Tanah_Soal2_AlternatifPILIH"),
  
  "BioAneva_Tanah_JawabanKelebihan1": player.GetVar("BioAneva_Tanah_JawabanKelebihan1"),
  "BioAneva_Tanah_JawabanKelebihan2": player.GetVar("BioAneva_Tanah_JawabanKelebihan2"),
  "BioAneva_Tanah_JawabanKekurangan1": player.GetVar("BioAneva_Tanah_JawabanKekurangan1"),
  "BioAneva_Tanah_JawabanKekurangan2": player.GetVar("BioAneva_Tanah_JawabanKekurangan2"),

  // --- MATERI PENCEMARAN AIR ---
  "Air_BioOrient_Soal1_Jawaban1Masalah": player.GetVar("Air_BioOrient_Soal1_Jawaban1Masalah"),
  "Air_BioOrient_soal1_Jawaban1Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban1Alasan"),     // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban2Masalah": player.GetVar("Air_BioOrient_soal1_Jawaban2Masalah"),   // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban2Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban2Alasan"),     // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban3Masalah": player.GetVar("Air_BioOrient_soal1_Jawaban3Masalah"),   // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban3Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban3Alasan"),     // Perbaikan huruf 's' kecil
  "Air_Skor_BioOrient_Soal1": player.GetVar("Air_Skor_BioOrient_Soal1"),
  
  "Air_BioOrient_Soal2_JawabanMasalah": player.GetVar("Air_BioOrient_Soal2_JawabanMasalah"),
  "Air_BioOrient_Soal2_JawabanAlasan": player.GetVar("Air_BioOrient_Soal2_JawabanAlasan"),
  "Air_Skor_BioOrient_Soal2": player.GetVar("Air_Skor_BioOrient_Soal2"),
  
  "Air_BioThink_JawabanRumusanMasalah": player.GetVar("Air_BioThink_JawabanRumusanMasalah"),
  "Air_Skor_BioThink_RumusanMasalah": player.GetVar("Air_Skor_BioThink_RumusanMasalah"),
  
  "Air_BioThink_JawabanTujuan": player.GetVar("Air_BioThink_JawabanTujuan"),
  "Air_Skor_BioThink_Tujuan": player.GetVar("Air_Skor_BioThink_Tujuan"),
  
  "Air_BioActivity_Jawaban1Alternatif": player.GetVar("Air_BioActivity_Jawaban1Alternatif"),
  "Air_BioActivity_Jawaban1Alasan": player.GetVar("Air_BioActivity_Jawaban1Alasan"),
  "Air_BioActivity_Jawaban2Alternatif": player.GetVar("Air_BioActivity_Jawaban2Alternatif"),
  "Air_BioActivity_Jawaban2Alasan": player.GetVar("Air_BioActivity_Jawaban2Alasan"),
  "Air_BioActivity_Jawaban3Alternatif": player.GetVar("Air_BioActivity_Jawaban3Alternatif"),
  "Air_BioActivity_Jawaban3Alasan": player.GetVar("Air_BioActivity_Jawaban3Alasan"),
  "Air_Skor_BioActivity_Alternatifsolusi": player.GetVar("Air_Skor_BioActivity_Alternatifsolusi"),
  
  "Air_BioActivity_JawabanAlternatifFIX": player.GetVar("Air_BioActivity_JawabanAlternatifFIX"),
  "Air_BioActivity_JawabanAlasanAlternatifFIX": player.GetVar("Air_BioActivity_JawabanAlasanAlternatifFIX"),
  "Air_Skor_BioActivity_ALTERNATIFDIPILIH": player.GetVar("Air_Skor_BioActivity_ALTERNATIFDIPILIH"),
  
  "Air_BioAneva_JawabanKelebihan1": player.GetVar("Air_BioAneva_JawabanKelebihan1"),
  "Air_BioAneva_JawabanKelebihan2": player.GetVar("Air_BioAneva_JawabanKelebihan2"),
  "Air_BioAneva_JawabanKekurangan1": player.GetVar("Air_BioAneva_JawabanKekurangan1"),
  "Air_BioAnev_JawabanKekurangan2": player.GetVar("Air_BioAnev_JawabanKekurangan2")             // Perbaikan dari BioAneva ke BioAnev
};

const url = "https://script.google.com/macros/s/AKfycbyP89y4Bi0_E3skELQuvJlrQ6r5ZUvF_bdE5vhkaCR_2d0bt9gHQZip3EW_qN_0YRGgOw/exec";

fetch(url, {
  method: 'POST',
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => { console.log("Sukses terintegrasi ke Sheets:", data); })
.catch(err => { console.error("Error Integrasi:", err); });
}

function Script5()
{
  const player = GetPlayer();

// Payload disesuaikan 100% dengan urutan dan penulisan header spreadsheet terbaru
const payload = {
  "pertemuan": player.GetVar("pertemuan"), 
  "topik": player.GetVar("topik"),         
  "kelompok": player.GetVar("kelompok"),
  "namaanggota1": player.GetVar("namaanggota1"),
  "namaanggota2": player.GetVar("namaanggota2"),
  "namaanggota3": player.GetVar("namaanggota3"),
  "namaanggota4": player.GetVar("namaanggota4"),
  "namaanggota5": player.GetVar("namaanggota5"),
  "namaanggota6": player.GetVar("namaanggota6"),

  // --- MATERI PENCEMARAN TANAH ---
  "BioOrient_Tanah_Soal1_Jawaban1Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban1Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban1Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban1Penyebab"),
  "BioOrient_Tanah_Soal1_Jawaban2Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban2Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban2Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban2Penyebab"),
  "BioOrient_Tanah_Soal1_Jawaban3Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban3Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban3Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban3Penyebab"),
  "Skor_BioOrient_Tanah_Soal1": player.GetVar("Skor_BioOrient_Tanah_Soal1"),
  
  "BioOrient_Tanah_Soal2_MasalahUtama": player.GetVar("BioOrient_Tanah_Soal2_MasalahUtama"),
  "BioOrient_Tanah_Soal2_Alasan": player.GetVar("BioOrient_Tanah_Soal2_Alasan"),
  "Skor_BioOrient_Tanah_Soal2": player.GetVar("Skor_BioOrient_Tanah_Soal2"),
  
  "BioThink_Tanah_JawabanRumusanMasalah": player.GetVar("BioThink_Tanah_JawabanRumusanMasalah"),
  "Skor_BioThink_Tanah_RumusanMasalah": player.GetVar("Skor_BioThink_Tanah_RumusanMasalah"),
  
  "BioThink_Tanah_JawabanTujuan": player.GetVar("BioThink_Tanah_JawabanTujuan"),
  "Skor_BioThink_Tanah_Tujuan": player.GetVar("Skor_BioThink_Tanah_Tujuan"), // Perbaikan huruf 'T' kapital
  
  "BioActivity_Tanah_Soal1_Jawaban1Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban1Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban1Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban1Alasan"),
  "BioActivity_Tanah_Soal1_Jawaban2Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban2Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban2Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban2Alasan"),
  "BioActivity_Tanah_Soal1_Jawaban3Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban3Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban3Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban3Alasan"),
  "Skor_BioActivity_Tanah_BerbagaiAlternatif": player.GetVar("Skor_BioActivity_Tanah_BerbagaiAlternatif"),
  
  "BioActivity_Tanah_Soal2_JawabanAlternatif": player.GetVar("BioActivity_Tanah_Soal2_JawabanAlternatif"),
  "BioActivity_Tanah_Soal2_JawabanAlasan": player.GetVar("BioActivity_Tanah_Soal2_JawabanAlasan"),
  "Skor_BioActivity_Tanah_Soal2_AlternatifPILIH": player.GetVar("Skor_BioActivity_Tanah_Soal2_AlternatifPILIH"),
  
  "BioAneva_Tanah_JawabanKelebihan1": player.GetVar("BioAneva_Tanah_JawabanKelebihan1"),
  "BioAneva_Tanah_JawabanKelebihan2": player.GetVar("BioAneva_Tanah_JawabanKelebihan2"),
  "BioAneva_Tanah_JawabanKekurangan1": player.GetVar("BioAneva_Tanah_JawabanKekurangan1"),
  "BioAneva_Tanah_JawabanKekurangan2": player.GetVar("BioAneva_Tanah_JawabanKekurangan2"),

  // --- MATERI PENCEMARAN AIR ---
  "Air_BioOrient_Soal1_Jawaban1Masalah": player.GetVar("Air_BioOrient_Soal1_Jawaban1Masalah"),
  "Air_BioOrient_soal1_Jawaban1Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban1Alasan"),     // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban2Masalah": player.GetVar("Air_BioOrient_soal1_Jawaban2Masalah"),   // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban2Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban2Alasan"),     // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban3Masalah": player.GetVar("Air_BioOrient_soal1_Jawaban3Masalah"),   // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban3Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban3Alasan"),     // Perbaikan huruf 's' kecil
  "Air_Skor_BioOrient_Soal1": player.GetVar("Air_Skor_BioOrient_Soal1"),
  
  "Air_BioOrient_Soal2_JawabanMasalah": player.GetVar("Air_BioOrient_Soal2_JawabanMasalah"),
  "Air_BioOrient_Soal2_JawabanAlasan": player.GetVar("Air_BioOrient_Soal2_JawabanAlasan"),
  "Air_Skor_BioOrient_Soal2": player.GetVar("Air_Skor_BioOrient_Soal2"),
  
  "Air_BioThink_JawabanRumusanMasalah": player.GetVar("Air_BioThink_JawabanRumusanMasalah"),
  "Air_Skor_BioThink_RumusanMasalah": player.GetVar("Air_Skor_BioThink_RumusanMasalah"),
  
  "Air_BioThink_JawabanTujuan": player.GetVar("Air_BioThink_JawabanTujuan"),
  "Air_Skor_BioThink_Tujuan": player.GetVar("Air_Skor_BioThink_Tujuan"),
  
  "Air_BioActivity_Jawaban1Alternatif": player.GetVar("Air_BioActivity_Jawaban1Alternatif"),
  "Air_BioActivity_Jawaban1Alasan": player.GetVar("Air_BioActivity_Jawaban1Alasan"),
  "Air_BioActivity_Jawaban2Alternatif": player.GetVar("Air_BioActivity_Jawaban2Alternatif"),
  "Air_BioActivity_Jawaban2Alasan": player.GetVar("Air_BioActivity_Jawaban2Alasan"),
  "Air_BioActivity_Jawaban3Alternatif": player.GetVar("Air_BioActivity_Jawaban3Alternatif"),
  "Air_BioActivity_Jawaban3Alasan": player.GetVar("Air_BioActivity_Jawaban3Alasan"),
  "Air_Skor_BioActivity_Alternatifsolusi": player.GetVar("Air_Skor_BioActivity_Alternatifsolusi"),
  
  "Air_BioActivity_JawabanAlternatifFIX": player.GetVar("Air_BioActivity_JawabanAlternatifFIX"),
  "Air_BioActivity_JawabanAlasanAlternatifFIX": player.GetVar("Air_BioActivity_JawabanAlasanAlternatifFIX"),
  "Air_Skor_BioActivity_ALTERNATIFDIPILIH": player.GetVar("Air_Skor_BioActivity_ALTERNATIFDIPILIH"),
  
  "Air_BioAneva_JawabanKelebihan1": player.GetVar("Air_BioAneva_JawabanKelebihan1"),
  "Air_BioAneva_JawabanKelebihan2": player.GetVar("Air_BioAneva_JawabanKelebihan2"),
  "Air_BioAneva_JawabanKekurangan1": player.GetVar("Air_BioAneva_JawabanKekurangan1"),
  "Air_BioAnev_JawabanKekurangan2": player.GetVar("Air_BioAnev_JawabanKekurangan2")             // Perbaikan dari BioAneva ke BioAnev
};

const url = "https://script.google.com/macros/s/AKfycbyP89y4Bi0_E3skELQuvJlrQ6r5ZUvF_bdE5vhkaCR_2d0bt9gHQZip3EW_qN_0YRGgOw/exec";

fetch(url, {
  method: 'POST',
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => { console.log("Sukses terintegrasi ke Sheets:", data); })
.catch(err => { console.error("Error Integrasi:", err); });
}

function Script6()
{
  const player = GetPlayer();

// Payload disesuaikan 100% dengan urutan dan penulisan header spreadsheet terbaru
const payload = {
  "pertemuan": player.GetVar("pertemuan"), 
  "topik": player.GetVar("topik"),         
  "kelompok": player.GetVar("kelompok"),
  "namaanggota1": player.GetVar("namaanggota1"),
  "namaanggota2": player.GetVar("namaanggota2"),
  "namaanggota3": player.GetVar("namaanggota3"),
  "namaanggota4": player.GetVar("namaanggota4"),
  "namaanggota5": player.GetVar("namaanggota5"),
  "namaanggota6": player.GetVar("namaanggota6"),

  // --- MATERI PENCEMARAN TANAH ---
  "BioOrient_Tanah_Soal1_Jawaban1Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban1Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban1Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban1Penyebab"),
  "BioOrient_Tanah_Soal1_Jawaban2Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban2Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban2Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban2Penyebab"),
  "BioOrient_Tanah_Soal1_Jawaban3Masalah": player.GetVar("BioOrient_Tanah_Soal1_Jawaban3Masalah"),
  "BioOrient_Tanah_Soal1_Jawaban3Penyebab": player.GetVar("BioOrient_Tanah_Soal1_Jawaban3Penyebab"),
  "Skor_BioOrient_Tanah_Soal1": player.GetVar("Skor_BioOrient_Tanah_Soal1"),
  
  "BioOrient_Tanah_Soal2_MasalahUtama": player.GetVar("BioOrient_Tanah_Soal2_MasalahUtama"),
  "BioOrient_Tanah_Soal2_Alasan": player.GetVar("BioOrient_Tanah_Soal2_Alasan"),
  "Skor_BioOrient_Tanah_Soal2": player.GetVar("Skor_BioOrient_Tanah_Soal2"),
  
  "BioThink_Tanah_JawabanRumusanMasalah": player.GetVar("BioThink_Tanah_JawabanRumusanMasalah"),
  "Skor_BioThink_Tanah_RumusanMasalah": player.GetVar("Skor_BioThink_Tanah_RumusanMasalah"),
  
  "BioThink_Tanah_JawabanTujuan": player.GetVar("BioThink_Tanah_JawabanTujuan"),
  "Skor_BioThink_Tanah_Tujuan": player.GetVar("Skor_BioThink_Tanah_Tujuan"), // Perbaikan huruf 'T' kapital
  
  "BioActivity_Tanah_Soal1_Jawaban1Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban1Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban1Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban1Alasan"),
  "BioActivity_Tanah_Soal1_Jawaban2Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban2Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban2Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban2Alasan"),
  "BioActivity_Tanah_Soal1_Jawaban3Alternatif": player.GetVar("BioActivity_Tanah_Soal1_Jawaban3Alternatif"),
  "BioActivity_Tanah_Soal1_Jawaban3Alasan": player.GetVar("BioActivity_Tanah_Soal1_Jawaban3Alasan"),
  "Skor_BioActivity_Tanah_BerbagaiAlternatif": player.GetVar("Skor_BioActivity_Tanah_BerbagaiAlternatif"),
  
  "BioActivity_Tanah_Soal2_JawabanAlternatif": player.GetVar("BioActivity_Tanah_Soal2_JawabanAlternatif"),
  "BioActivity_Tanah_Soal2_JawabanAlasan": player.GetVar("BioActivity_Tanah_Soal2_JawabanAlasan"),
  "Skor_BioActivity_Tanah_Soal2_AlternatifPILIH": player.GetVar("Skor_BioActivity_Tanah_Soal2_AlternatifPILIH"),
  
  "BioAneva_Tanah_JawabanKelebihan1": player.GetVar("BioAneva_Tanah_JawabanKelebihan1"),
  "BioAneva_Tanah_JawabanKelebihan2": player.GetVar("BioAneva_Tanah_JawabanKelebihan2"),
  "BioAneva_Tanah_JawabanKekurangan1": player.GetVar("BioAneva_Tanah_JawabanKekurangan1"),
  "BioAneva_Tanah_JawabanKekurangan2": player.GetVar("BioAneva_Tanah_JawabanKekurangan2"),

  // --- MATERI PENCEMARAN AIR ---
  "Air_BioOrient_Soal1_Jawaban1Masalah": player.GetVar("Air_BioOrient_Soal1_Jawaban1Masalah"),
  "Air_BioOrient_soal1_Jawaban1Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban1Alasan"),     // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban2Masalah": player.GetVar("Air_BioOrient_soal1_Jawaban2Masalah"),   // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban2Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban2Alasan"),     // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban3Masalah": player.GetVar("Air_BioOrient_soal1_Jawaban3Masalah"),   // Perbaikan huruf 's' kecil
  "Air_BioOrient_soal1_Jawaban3Alasan": player.GetVar("Air_BioOrient_soal1_Jawaban3Alasan"),     // Perbaikan huruf 's' kecil
  "Air_Skor_BioOrient_Soal1": player.GetVar("Air_Skor_BioOrient_Soal1"),
  
  "Air_BioOrient_Soal2_JawabanMasalah": player.GetVar("Air_BioOrient_Soal2_JawabanMasalah"),
  "Air_BioOrient_Soal2_JawabanAlasan": player.GetVar("Air_BioOrient_Soal2_JawabanAlasan"),
  "Air_Skor_BioOrient_Soal2": player.GetVar("Air_Skor_BioOrient_Soal2"),
  
  "Air_BioThink_JawabanRumusanMasalah": player.GetVar("Air_BioThink_JawabanRumusanMasalah"),
  "Air_Skor_BioThink_RumusanMasalah": player.GetVar("Air_Skor_BioThink_RumusanMasalah"),
  
  "Air_BioThink_JawabanTujuan": player.GetVar("Air_BioThink_JawabanTujuan"),
  "Air_Skor_BioThink_Tujuan": player.GetVar("Air_Skor_BioThink_Tujuan"),
  
  "Air_BioActivity_Jawaban1Alternatif": player.GetVar("Air_BioActivity_Jawaban1Alternatif"),
  "Air_BioActivity_Jawaban1Alasan": player.GetVar("Air_BioActivity_Jawaban1Alasan"),
  "Air_BioActivity_Jawaban2Alternatif": player.GetVar("Air_BioActivity_Jawaban2Alternatif"),
  "Air_BioActivity_Jawaban2Alasan": player.GetVar("Air_BioActivity_Jawaban2Alasan"),
  "Air_BioActivity_Jawaban3Alternatif": player.GetVar("Air_BioActivity_Jawaban3Alternatif"),
  "Air_BioActivity_Jawaban3Alasan": player.GetVar("Air_BioActivity_Jawaban3Alasan"),
  "Air_Skor_BioActivity_Alternatifsolusi": player.GetVar("Air_Skor_BioActivity_Alternatifsolusi"),
  
  "Air_BioActivity_JawabanAlternatifFIX": player.GetVar("Air_BioActivity_JawabanAlternatifFIX"),
  "Air_BioActivity_JawabanAlasanAlternatifFIX": player.GetVar("Air_BioActivity_JawabanAlasanAlternatifFIX"),
  "Air_Skor_BioActivity_ALTERNATIFDIPILIH": player.GetVar("Air_Skor_BioActivity_ALTERNATIFDIPILIH"),
  
  "Air_BioAneva_JawabanKelebihan1": player.GetVar("Air_BioAneva_JawabanKelebihan1"),
  "Air_BioAneva_JawabanKelebihan2": player.GetVar("Air_BioAneva_JawabanKelebihan2"),
  "Air_BioAneva_JawabanKekurangan1": player.GetVar("Air_BioAneva_JawabanKekurangan1"),
  "Air_BioAnev_JawabanKekurangan2": player.GetVar("Air_BioAnev_JawabanKekurangan2")             // Perbaikan dari BioAneva ke BioAnev
};

const url = "https://script.google.com/macros/s/AKfycbyP89y4Bi0_E3skELQuvJlrQ6r5ZUvF_bdE5vhkaCR_2d0bt9gHQZip3EW_qN_0YRGgOw/exec";

fetch(url, {
  method: 'POST',
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => { console.log("Sukses terintegrasi ke Sheets:", data); })
.catch(err => { console.error("Error Integrasi:", err); });
}

