let pitch_pictures = [
    "http://cpbl-elta.cdn.hinet.net/upload/head/005233.jpg",
    "http://cpbl-elta.cdn.hinet.net/upload/head/006004.jpg",
    "http://cpbl-elta.cdn.hinet.net/upload/head/006011.jpg",
    "http://cpbl-elta.cdn.hinet.net/upload/head/006010.jpg",
    "http://cpbl-elta.cdn.hinet.net/upload/head/R527.jpg"
];

let batter_pictures = [
    "http://cpbl-elta.cdn.hinet.net/upload/head/R529.jpg",
    "http://cpbl-elta.cdn.hinet.net/upload/head/k441.jpg",
    "http://cpbl-elta.cdn.hinet.net/upload/head/H929.jpg",
    "http://cpbl-elta.cdn.hinet.net/upload/head/H038.jpg",
    "http://cpbl-elta.cdn.hinet.net/upload/head/004636.jpg"
];

let pitch_players = [
    "米蘭達(中信兄弟)",
    "卡本特(樂天)",
    "霸能(樂天)",
    "費爾本(統一獅)",
    "王溢正(樂天)"
];

let batter_players = [
    "林泓育(樂天)",
    "林立(樂天)",
    "陳傑憲(統一獅)",
    "王威晨(中信兄弟)",
    "江坤宇(中信兄弟)"
];

let era = [
    "2.66",
    "3.11",
    "3.66",
    "3.79",
    "4.00"
];

let avg = [
    "0.412",
    "0.392",
    "0.392",
    "0.369",
    "0.357"
];

$(document).ready(function () {
    $("#choose").click(function () {
        //method1. $("a").hide();//hide all images
        //alert("hi"); 彈跳視窗
        //$("H1").text($("li").eq(1).text()); 將?改成食物名稱, eq為其index
        //let num = $("#choices li").length;//li有幾個
        let num = 5
        //$("H1").text(num);
        let rdm = Math.floor(Math.random() * num);//0<= Math.random() < 1 //Math.floor() -> 無條件捨去後的最大整數
        // $("#random-result").text($("#choices li").eq(rdm).text());

        $("#random-result").text(pitch_players[rdm] + " " + era[rdm])

        $("#random-pic").attr("src", pitch_pictures[rdm]);
    });

    $("#batter").click(function () {
        //method1. $("a").hide();//hide all images
        //alert("hi"); 彈跳視窗
        //$("H1").text($("li").eq(1).text()); 將?改成食物名稱, eq為其index
        //let num = $("#choices li").length;//li有幾個
        let num = 5
        //$("H1").text(num);
        let rdm = Math.floor(Math.random() * num);//0<= Math.random() < 1 //Math.floor() -> 無條件捨去後的最大整數
        // $("#random-result").text($("#choices li").eq(rdm).text());
        $("#random-result").text(batter_players[rdm] + " " + avg[rdm])

        $("#random-pic").attr("src", batter_pictures[rdm]);
    });
});
