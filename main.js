result = document.querySelector("#res");
btns = document.querySelectorAll("button");

function registerClick(event) {
  clickEl = event.target.textContent;

  if (clickEl == "C") {
    result.innerText = "";
  } else {
    if (clickEl == "=") {
      let exp = result.innerText;
      let op = "";
      if (exp.includes("+")) {
        op = "+";
      } else if (exp.includes("-")) {
        op = "-";
      } else if (exp.includes("*")) {
        op = "*";
      } else if (exp.includes("/")) {
        op = "/";
      }
      expression = exp.split(op);
      num1 = parseInt(expression[0], 2);
      num2 = parseInt(expression[1], 2);
      resultat = eval(num1 + op + num2);
      result.innerText = resultat.toString(2);
    } else {
      let temp = result.innerText;
      result.innerText = temp + clickEl;
    }
  }
}

btns.forEach((btn) => {
  btn.setAttribute("onclick", "registerClick(event)");
});
