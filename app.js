function calculate(operation) {
    let x1 = parseFloat(document.getElementById("x1").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let z1 = parseFloat(document.getElementById("z1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let y2 = parseFloat(document.getElementById("y2").value);
    let z2 = parseFloat(document.getElementById("z2").value);

    switch (operation) {
        case 'A':
            document.getElementById("magnitudeA").value = calculateMagnitude(x1, y1, z1).toFixed(3);
            break;
        case 'B':
            document.getElementById("magnitudeB").value = calculateMagnitude(x2, y2, z2).toFixed(3);
            break;
        case 'dot':
            document.getElementById("result").innerText = "Dot Product of A and B: " + calculateDotProduct(x1, y1, z1, x2, y2, z2).toFixed(3);
            break;
        case 'cross':
            document.getElementById("result").innerText = "Cross Product of A and B: " + calculateCrossProduct(x1, y1, z1, x2, y2, z2);
            break;
        case 'angle':
            document.getElementById("result").innerText = "Angle between A and B: " + calculateAngle(x1, y1, z1, x2, y2, z2).toFixed(3) + " degrees";
            break;
        default:
            break;
    }
}

function calculateMagnitude(x, y, z) {
    return Math.sqrt(x * x + y * y + z * z);
}

function calculateDotProduct(x1, y1, z1, x2, y2, z2) {
    return x1 * x2 + y1 * y2 + z1 * z2;
}

function calculateCrossProduct(x1, y1, z1, x2, y2, z2) {
    let i = y1 * z2 - z1 * y2;
    let j = -(x1 * z2 - z1 * x2);
    let k = x1 * y2 - y1 * x2;

    return `${i.toFixed(3)}i + ${j.toFixed(3)}j + ${k.toFixed(3)}k`;
}

function calculateAngle(x1, y1, z1, x2, y2, z2) {
    let dotProduct = calculateDotProduct(x1, y1, z1, x2, y2, z2);
    let magnitudeA = calculateMagnitude(x1, y1, z1);
    let magnitudeB = calculateMagnitude(x2, y2, z2);

    let value = dotProduct / (magnitudeA * magnitudeB);
    return Math.acos(value) * (180 / Math.PI);
}

function clearInputs() {
    document.getElementById("x1").value = "";
    document.getElementById("y1").value = "";
    document.getElementById("z1").value = "";
    document.getElementById("x2").value = "";
    document.getElementById("y2").value = "";
    document.getElementById("z2").value = "";
    document.getElementById("magnitudeA").value = "";
    document.getElementById("magnitudeB").value = "";
    document.getElementById("result").innerText = "";
}

function calculateUnitVector() {
    // Get user inputs
    var unit_i = parseFloat(document.getElementById("unit_i").value);
    var unit_j = parseFloat(document.getElementById("unit_j").value);
    var unit_k = parseFloat(document.getElementById("unit_k").value);

    // Calculate magnitude
    var magnitude = Math.sqrt(unit_i * unit_i + unit_j * unit_j + unit_k * unit_k);

    // Calculate unit vector components
    var unit_vector_i = (unit_i / magnitude).toFixed(3);
    var unit_vector_j = (unit_j / magnitude).toFixed(3);
    var unit_vector_k = (unit_k / magnitude).toFixed(3);

    // Display the result
    document.getElementById("answer").innerHTML = "The unit vector is: " + unit_vector_i + "i + " + unit_vector_j + "j + " + unit_vector_k + "k";
}

function clearInput_for_unit_vector() {
    document.getElementById("unit_i").value = "";
    document.getElementById("unit_j").value = "";
    document.getElementById("unit_k").value = "";
}