function calculate(operation) {
    let x1 = document.getElementById("x1").value;
    let y1 = document.getElementById("y1").value;
    let z1 = document.getElementById("z1").value;
    let x2 = document.getElementById("x2").value;
    let y2 = document.getElementById("y2").value;
    let z2 = document.getElementById("z2").value;

    switch (operation) {
        case 'A':
            if (isNaN(x1) || isNaN(y1) || isNaN(z1) || x1 === "" || y1 === "" || z1 === "") {
                document.getElementById("errorA").innerText = "Please enter valid numbers for vector A components.";
                return;
            }
            x1 = parseFloat(x1);
            y1 = parseFloat(y1);
            z1 = parseFloat(z1);
            document.getElementById("magnitudeA").value = calculateMagnitude(x1, y1, z1).toFixed(3);
            document.getElementById("errorA").innerText = "";
            break;
        case 'B':
            if (isNaN(x2) || isNaN(y2) || isNaN(z2) || x2 === "" || y2 === "" || z2 === "") {
                document.getElementById("errorB").innerText = "Please enter valid numbers for vector B components.";
                return;
            }
            x2 = parseFloat(x2);
            y2 = parseFloat(y2);
            z2 = parseFloat(z2);
            document.getElementById("magnitudeB").value = calculateMagnitude(x2, y2, z2).toFixed(3);
            document.getElementById("errorB").innerText = "";
            break;
        case 'dot':
            if (isNaN(x1) || isNaN(y1) || isNaN(z1) || x1 === "" || y1 === "" || z1 === "" ||
                isNaN(x2) || isNaN(y2) || isNaN(z2) || x2 === "" || y2 === "" || z2 === "") {
                document.getElementById("errorA").innerText = "Please enter valid numbers for vector A components.";
                document.getElementById("errorB").innerText = "Please enter valid numbers for vector B components.";
                return;
            }
            x1 = parseFloat(x1);
            y1 = parseFloat(y1);
            z1 = parseFloat(z1);
            x2 = parseFloat(x2);
            y2 = parseFloat(y2);
            z2 = parseFloat(z2);
            document.getElementById("result").innerText = "Dot Product of A and B: " + calculateDotProduct(x1, y1, z1, x2, y2, z2).toFixed(3);
            document.getElementById("errorA").innerText = "";
            document.getElementById("errorB").innerText = "";
            break;
        case 'cross':
            if (isNaN(x1) || isNaN(y1) || isNaN(z1) || x1 === "" || y1 === "" || z1 === "" ||
                isNaN(x2) || isNaN(y2) || isNaN(z2) || x2 === "" || y2 === "" || z2 === "") {
                document.getElementById("errorA").innerText = "Please enter valid numbers for vector A components.";
                document.getElementById("errorB").innerText = "Please enter valid numbers for vector B components.";
                return;
            }
            x1 = parseFloat(x1);
            y1 = parseFloat(y1);
            z1 = parseFloat(z1);
            x2 = parseFloat(x2);
            y2 = parseFloat(y2);
            z2 = parseFloat(z2);
            document.getElementById("result").innerText = "Cross Product of A and B: " + calculateCrossProduct(x1, y1, z1, x2, y2, z2);
            document.getElementById("errorA").innerText = "";
            document.getElementById("errorB").innerText = "";
            break;
        case 'angle':
            if (isNaN(x1) || isNaN(y1) || isNaN(z1) || x1 === "" || y1 === "" || z1 === "" ||
                isNaN(x2) || isNaN(y2) || isNaN(z2) || x2 === "" || y2 === "" || z2 === "") {
                document.getElementById("errorA").innerText = "Please enter valid numbers for vector A components.";
                document.getElementById("errorB").innerText = "Please enter valid numbers for vector B components.";
                return;
            }
            x1 = parseFloat(x1);
            y1 = parseFloat(y1);
            z1 = parseFloat(z1);
            x2 = parseFloat(x2);
            y2 = parseFloat(y2);
            z2 = parseFloat(z2);
            document.getElementById("result").innerText = "Angle between A and B: " + calculateAngle(x1, y1, z1, x2, y2, z2).toFixed(3) + " degrees";
            document.getElementById("errorA").innerText = "";
            document.getElementById("errorB").innerText = "";
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
    document.getElementById("errorA").innerText = "";
    document.getElementById("errorB").innerText = "";
}

function calculateUnitVector() {
    var unit_i = document.getElementById("unit_i").value;
    var unit_j = document.getElementById("unit_j").value;
    var unit_k = document.getElementById("unit_k").value;

    if (isNaN(unit_i) || isNaN(unit_j) || isNaN(unit_k) || unit_i === "" || unit_j === "" || unit_k === "") {
        document.getElementById("errorUnit").innerText = "Please enter valid numbers for unit vector components.";
        return;
    }

    unit_i = parseFloat(unit_i);
    unit_j = parseFloat(unit_j);
    unit_k = parseFloat(unit_k);

    var magnitude = Math.sqrt(unit_i * unit_i + unit_j * unit_j + unit_k * unit_k);
    var unit_vector_i = (unit_i / magnitude).toFixed(3);
    var unit_vector_j = (unit_j / magnitude).toFixed(3);
    var unit_vector_k = (unit_k / magnitude).toFixed(3);

    document.getElementById("answer").innerHTML = "The unit vector is: " + unit_vector_i + "i  + " + unit_vector_j + " j  + " + unit_vector_k + "k";
    document.getElementById("errorUnit").innerText = "";
}

function clearInput_for_unit_vector() {
    document.getElementById("unit_i").value = "";
    document.getElementById("unit_j").value = "";
    document.getElementById("unit_k").value = "";
    document.getElementById("errorUnit").innerText = "";
}






// for the header 

   // Dark Mode Button 

   document.getElementById("darkModeBtn").addEventListener("click", function() { 

    document.body.classList.add("dark-mode"); 
    
    }); 
    
     
    
    // Light Mode Button 
    
    document.getElementById("lightModeBtn").addEventListener("click", function() { 
    
     document.body.classList.remove("dark-mode"); 
    
    }); 
    
     
    
    // Font Size Select 
    
    document.getElementById("fontSizeSelect").addEventListener("change", function() { 
    
    var fontSize = this.value; 
    
     document.body.style.fontSize = fontSize; 
    
    }); 