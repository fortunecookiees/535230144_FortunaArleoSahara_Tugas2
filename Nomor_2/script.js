function count(operator) {
    const bil1 = parseFloat(document.getElementById('bil1').value);
    const bil2 = parseFloat(document.getElementById('bil2').value);
    let hasil = 0;

    switch (operator) {
        case '+':
            hasil = bil1 + bil2;
            break;
        case '-':
            hasil = bil1 - bil2;
            break;
        case '*':
            hasil = bil1 * bil2;
            break;
        case '/':
            hasil = bil1 / bil2;
            break;
        default:
            alert("Operasi tidak dikenal");
            return;
    }

    document.getElementById('hasil').value = hasil;
}
