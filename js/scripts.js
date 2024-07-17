document.querySelector('.submit').addEventListener('click', function() {
    const beratBadan = parseFloat(document.getElementById('input-berat-badan').value);
    const tinggiBadan = parseFloat(document.getElementById('input-tinggi-badan').value) / 100; // Convert cm to meters
    const usia = parseInt(document.getElementById('input-usia').value);
    const jenisKelamin = document.querySelector('input[name="gender"]:checked');

    if (isNaN(beratBadan) || isNaN(tinggiBadan) || isNaN(usia) || !jenisKelamin) {
        alert('Tolong isi semua data dengan benar.');
        return;
    }

    const bmi = (beratBadan / (tinggiBadan * tinggiBadan)).toFixed(1);

    let kategori;
    if (bmi < 18.5) {
        kategori = 'Anda memiliki berat badan kurang';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        kategori = 'Anda memiliki berat badan normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        kategori = 'Anda memiliki berat badan berlebih';
    } else {
        kategori = 'Anda memiliki obesitas';
    }

    document.querySelector('.result-section h2').innerText = bmi;
    document.querySelector('.result-section h5').innerText = kategori;
});

