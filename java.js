/**
 * Created by Gintarė on 2017-07-13.
 */
var d = new Date();
document.write((d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getFullYear() + ",");
document.write(" " + (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear());
document.write(" or " + d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + ",");
document.write(" " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear());