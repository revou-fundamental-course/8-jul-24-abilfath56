document.getElementById('submit-button').addEventListener('click', calculateBMI);

function calculateBMI() {
    const weight = parseFloat(document.getElementById('input-berat-badan').value);
    const height = parseFloat(document.getElementById('input-tinggi-badan').value) / 100;
    const age = parseInt(document.getElementById('input-usia').value);
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : null;

    if (isNaN(weight) || isNaN(height) || isNaN(age) || !gender || weight <= 0 || height <= 0 || age <= 0) {
        document.getElementById('bmi-result').innerText = '0';
        document.getElementById('bmi-category').innerText = 'Harap masukkan nilai yang valid untuk semua input.';
        return;
    }

    const bmi = weight / (height * height);

    let category = '';
    if (bmi < 18.5) {
        category = 'Kurus (Underweight)';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Kegemukan (Overweight)';
    } else {
        category = 'Obesitas (Obesity)';
    }

    document.getElementById('bmi-result').innerText = bmi.toFixed(2);
    document.getElementById('bmi-category').innerText = `Anda ${category}`;
}
