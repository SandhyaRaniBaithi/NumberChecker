document.getElementById("checkButton").addEventListener("click", function () {
    const input = document.getElementById("numberInput").value;
    const result = document.getElementById("result");
  
    
    if (input === "") {
      result.textContent = "Please enter a number!";
      return;
    }
  
    const number = parseInt(input);
  
    if (number < 0) {
      result.textContent = "Enter a positive value";
    } else if (number % 2 === 0) {
      const evenNumbers = [number + 2, number + 4, number + 6];
      result.textContent = `Next 3 even numbers: ${evenNumbers.join(", ")}`;
    } else {
      const oddNumbers = [number + 2, number + 4, number + 6];
      result.textContent = `Next 3 odd numbers: ${oddNumbers.join(", ")}`;
    }
  });
  