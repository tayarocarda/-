function verify() {
    console.log("a")
    let a = parseInt(elementA.value);
    console.log(a)

    if (a > 36) {
        result = "Ваше место — боковое"
        document.getElementById("result").value = result;
    }
    else if (a % 2) {
        result = "Ваше место в купе внизу"
        document.getElementById("result").value = result;
    }
    else {
      result = "Ваше место в купе наверху"
      document.getElementById("result").value = result;
    }
}
const elementA = document.getElementById("a");
elementA.addEventListener('input', verify);
