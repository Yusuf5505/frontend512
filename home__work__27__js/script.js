
let st= '-1.5 -5 02 fggg -123.4.fkfl;p[';
document.writeln(st+"<br>");
let reg=/-\d+\.\d+|\d+|-\d+/g
document.writeln(st.match(reg))