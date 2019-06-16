var val = 0, purchase = 0, count_ap = 0, count_ban = 0, count_org = 0, total_purchase = 0;
function values() {
    val = document.querySelector("input").value;
}
function result() {
    document.querySelector("span").innerHTML = total_purchase;
}
function inc_apple() {

    if (val >= 10) {
        count_ap += 1;
        purchase += 10;
        val = val - purchase;
        total_purchase = purchase + total_purchase;
        purchase = 0;
        document.querySelector("#app_id").value = count_ap;
        result();

    }
    else {
        alert("Not Enough Money to buy Apple")
    }
}
function inc_orange() {

    if (val >= 15) {
        count_org += 1;
        purchase += 15;
        val = val - purchase;
        total_purchase = purchase + total_purchase;
        purchase = 0;
        document.querySelector("#org_id").value = count_org; console.log(val);
        result();

    }
    else {
        alert("Not Enough Money to buy Orange")
    }
}
function inc_banana() {
    if (val >= 7) {
        count_ban += 1;
        purchase += 7;
        val = val - purchase;
        total_purchase = purchase + total_purchase;
        purchase = 0;
        document.querySelector("#bana_id").value = count_ban; console.log(val);
        result();

    }
    else {
        alert("Not Enough Money to buy Banana")
    }
}
function dec_apple() {
    if (total_purchase > 0 && count_ap > 0) {
        count_ap -= 1;
        purchase += 10;
        val = val + purchase;
        total_purchase = total_purchase - purchase;
        purchase = 0;
        document.querySelector("#app_id").value = count_ap;
        result();
    }

}
function dec_orange() {
    if (total_purchase > 0 && count_org > 0) {
        count_org -= 1;
        purchase += 15;
        val = val + purchase;
        total_purchase = total_purchase - purchase;
        purchase = 0;
        document.querySelector("#org_id").value = count_org;
        result();
    }

}
function dec_banana() {
    if (total_purchase > 0 && count_ban > 0) {
        count_ban -= 1;
        purchase += 7;
        val = val + purchase;
        total_purchase = total_purchase - purchase;
        purchase = 0;
        document.querySelector("#bana_id").value = count_ban;
        result();
    }
}