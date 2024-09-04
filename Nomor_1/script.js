document.getElementById('konversiBtn').addEventListener('click', convertNilai);

function convertNilai() {
    const input = document.getElementById('inputNumber');
    const nilai = parseInt(input.value);
    const output = document.getElementById('outputLetter');
    const error = document.getElementById('errorMessage');

    error.textContent = '';
    output.textContent = '';

    if (isNaN(nilai)) {
        error.textContent = 'Masukkan Nilai Angka ! ';
        return;
    }

    if (nilai < 0 || nilai > 100) {
        error.textContent = 'Nilai harus antara 0 - 100.';
        return;
    }

    let nilaiHuruf;

    if (nilai >= 81 && nilai <= 100) {
        nilaiHuruf = 'A';
    } else if (nilai >= 71 && nilai <= 80) {
        nilaiHuruf = 'B';
    } else if (nilai >= 56 && nilai <= 70) {
        nilaiHuruf = 'C';
    } else if (nilai >= 41 && nilai <= 55) {
        nilaiHuruf = 'D';
    } else if (nilai >= 0  && nilai <= 40) {
        nilaiHuruf = 'E';
    }
        else 
        nilaiHuruf = 'Nilai tidak valid.';

    output.textContent = `Hasil Convert Nilai Angka Ke Huruf: ${nilaiHuruf}`;
}
