
document.writeln("<table border='1' width='150' align='center' bgcolor=yellow>");

for (let i = 1; i < 11; i++) {
    document.writeln("<tr align='center'>");

    for (let j = 1; j < 11; j++) {
       
        if (i % 2 == 1) {
            if (j % 2 == 0) {
                document.writeln("<td bgcolor=yellow>" + i * j + "</td>");
            } else {
                document.writeln("<td bgcolor=red>" + i * j + "</td>");
            }
        } else if (i % 2 == 0) {
            if (j % 2 == 0) {
                document.writeln("<td bgcolor=red>" + i * j + "</td>");
            } else {
                document.writeln("<td bgcolor=yellow>" + i * j + "</td>");
            }
        }





    }
}
document.writeln("</tr>")

document.writeln("</table>")









