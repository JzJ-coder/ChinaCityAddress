// 鼠标移到相应的城市换色
function over(id) {
    document.getElementById(id).style.backgroundColor = "#f5694b";
    document.getElementById(id).style.color = "#ffffff";
}

function out(id) {
    document.getElementById(id).style.backgroundColor = "#ffffff";
}

// 点击字母选择城市
window.cityChannelChange = function (sName, oEvent) {
    $("#city_name").children().hide();
    $("#letter_list").children().removeClass("on");
    $(oEvent).addClass("on");
    $("#city_name").children("div[name='city_channel_" + sName + "']").show();
};

window.onload = function () {
    // <a id="pick_me" href="javascript:void(0)">切换城市</a>
    var pick_me = document.getElementById("pick_me");
    pick_me.onclick = function (e) { //点击出现
        document.getElementById('dialog').style.display = 'block';
        document.getElementById('body_dialog').style.display = 'block'
        e.stopPropagation(); //阻止冒泡
    }
    // 点击空白消失
    var body_dialog = document.getElementById("body_dialog");
    body_dialog.onclick = function (e) {
        document.getElementById('dialog').style.display = 'none';
        document.getElementById('body_dialog').style.display = 'none'
    }
}