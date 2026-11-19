
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

document.getElementById("operations").onclick = e => {

    const op = e.target.dataset.op;
    if (!op) return;

    const first = document.getElementById("a").value;
    const second = document.getElementById("b").value;
    const result = document.getElementById("result");

    // Check blank input
    if (first.trim() === "" || second.trim() === "") {
        result.textContent = "Please enter two valid numbers!";
        return;
    }

    const a = Number(first);
    const b = Number(second);

    // Check valid numbers
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        result.textContent = "Invalid number!";
        return;
    }

    let answer;

    switch (op) {
        case "+":
            answer = add(a, b);
            break;

        case "-":
            answer = subtract(a, b);
            break;

        case "*":
            answer = multiply(a, b);
            break;

        case "/":
            if (b === 0) {
                result.textContent = "Cannot divide by zero!";
                return;
            }

            answer = divide(a, b);
            break;

        default:
            return;
    }

    result.textContent = "Result: " + answer;
};
