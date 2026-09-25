let numbers = [];

const numberInput = document.getElementById("numberInput");
const targetInput = document.getElementById("targetInput");
const pushButton = document.getElementById("pushButton");
const popButton = document.getElementById("popButton");
const arrayDisplay = document.getElementById("arrayDisplay");
const result = document.getElementById("result");


// Updates what the array looks like on the webpage
function updateArray() {
    arrayDisplay.textContent = "[" + numbers.join(", ") + "]";
    updateResult();
}


// Two Sum function
function twoSum(nums, target) {

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {
                return [i, j];
            }

        }

    }

    return [];
}


// Updates the result shown on the webpage
function updateResult() {

    let target = Number(targetInput.value);

    if (targetInput.value === "") {
        result.textContent = "Enter a target number.";
        return;
    }

    let answer = twoSum(numbers, target);

    if (answer.length === 2) {

        result.textContent =
            "Indexes: [" + answer[0] + ", " + answer[1] + "]";

    } else {

        result.textContent =
            "No two numbers add up to " + target + ".";

    }
}


// PUSH button
pushButton.addEventListener("click", function () {

    if (numberInput.value === "") {
        return;
    }

    let number = Number(numberInput.value);

    numbers.push(number);

    numberInput.value = "";

    updateArray();
});


// POP button
popButton.addEventListener("click", function () {

    numbers.pop();

    updateArray();
});


// Updates the answer whenever the target changes
targetInput.addEventListener("input", function () {

    updateResult();

});


// Shows the empty array when the page first loads
updateArray();