class Calculator {
    constructor(operand) {
        this.operand = operand;
        this.current_operand = "";
        this.prev_operand = "";
        this.operation = "";
        this.reset();
    }

    reset() {
        this.current_operand = "";
        this.prev_operand = "";
        this.operation = "";
    }

    delete() {
        if (this.current_operand !== "") {
            this.current_operand = this.current_operand.toString().slice(0, -1);
        } else {
            if (this.operation !== "") {
                this.operation = "";
                this.current_operand = this.prev_operand;
                this.prev_operand = "";
            }
        }
    }

    appendNumber(number) {
        if (number === "." && this.current_operand.includes(".")) return;
        if (this.prev_operand !== "" && this.operation === "")
            this.prev_operand = "";
        this.current_operand =
            this.current_operand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.current_operand === "" && this.prev_operand === "") return;
        if (this.prev_operand !== "" && this.operation !== "") {
            this.compute();
        }
        if (this.current_operand !== "") {
            this.prev_operand = this.current_operand;
            this.current_operand = "";
        }
        this.operation = operation;
    }

    compute() {
        const curr = parseFloat(this.current_operand);
        const prev = parseFloat(this.prev_operand);
        if (isNaN(curr) || isNaN(prev)) return;

        switch (this.operation) {
            case "+":
                this.prev_operand = +(prev + curr).toFixed(3);
                break;
            case "-":
                this.prev_operand = +(prev - curr).toFixed(3);
                break;
            case "x":
                this.prev_operand = +(prev * curr).toFixed(3);
                break;
            case "/":
                this.prev_operand = +(prev / curr).toFixed(3);
                break;
            default:
                return;
        }
        this.current_operand = "";
    }

    formatDisplayNum(num) {
        const stringNum = num.toString();
        const intDigits = parseFloat(stringNum.split(".")[0]);
        const decDigits = stringNum.split(".")[1];
        let intDisplay;
        if (isNaN(intDigits)) {
            intDisplay = "";
        } else {
            intDisplay = intDigits.toLocaleString("en", {
                maximumFractionDigits: 0,
            });
        }
        if (decDigits != null) {
            return `${intDisplay}.${decDigits}`;
        } else {
            return intDisplay;
        }
    }

    updateDisplay() {
        this.operand.innerText = `${this.formatDisplayNum(this.prev_operand)} ${
            this.operation
        } ${this.formatDisplayNum(this.current_operand)}`;
    }
}

const numBtns = document.querySelectorAll("[data-number]");
const optBtns = document.querySelectorAll("[data-operation]");
const operand = document.querySelector("[data-operand]");
const delBtn = document.querySelector("[data-del]");
const resetBtn = document.querySelector("[data-reset]");
const equalsBtn = document.querySelector("[data-equals]");

const calculator = new Calculator(operand);

numBtns.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

optBtns.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

resetBtn.addEventListener("click", (button) => {
    calculator.reset();
    calculator.updateDisplay();
});

equalsBtn.addEventListener("click", (button) => {
    calculator.compute();
    calculator.operation = "";
    calculator.updateDisplay();
});

delBtn.addEventListener("click", (button) => {
    calculator.delete();
    calculator.updateDisplay();
});
