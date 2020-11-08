class employee {
    constructor(name, work, sallary) {
        this.name = name;
        this.work = work;
        this.sallary = sallary
    }
}

let worklist = [
    new employee("Alex", "counter", 1500),
    new employee("Marty", "security", 1500),
    new employee("Gloria", "manager", 1500)]

class EmpTable {
    constructor(arr) {
        this.arr = arr
    }
    showBody() {
        let array = this.arr
        document.write("<table><thead><tr><th>name</th><th>position</th><th>sallary</th></tr></thead><tbody>")
        array.forEach(function (item) {
            document.write("<tr>")
            for (let key in item) {
                document.write("<td>" + item[key] + "</td>")
            }
            document.write("</tr>")
        });
        document.write("</tbody></table>")
    }
    get getHtml() {
        return this.showBody()
    }
}

let objEmpTable = new EmpTable(worklist);
objEmpTable.getHtml