calc.onclick = function () {
    var myform = this.form;
    myform.result.value = +myform.first.value + +myform.second.value + +myform.third.value;
}