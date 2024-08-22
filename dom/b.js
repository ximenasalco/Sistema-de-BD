function updateSum() {
    let sum = 0;
    document.querySelectorAll('.number-input').forEach(input => {
        const value = parseInt(input.value) || 0;
        sum += value;
    });
    document.getElementById('sum-result').innerText = sum;
}

document.getElementById('add-field-btn').addEventListener('click', function() {
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group';
    const newInput = document.createElement('input');
    newInput.type = 'number';
    newInput.className = 'number-input';
    newInput.placeholder = 'Introduce un número';
    newInput.addEventListener('input', updateSum);
    inputGroup.appendChild(newInput);
    document.getElementById('inputs-container').appendChild(inputGroup);
});

document.getElementById('change-color-btn').addEventListener('click', function() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});

document.querySelectorAll('.number-input').forEach(input => {
    input.addEventListener('input', updateSum);
});
