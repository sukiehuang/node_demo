/**
 * Created by 茜 on 2017/2/24.
 */
var http = require("http");
var cheerio = require("cheerio");
var url = "http://www.cnblogs.com/huangxi/";

function filterChapters(html){
    var $ = cheerio.load(html);
    var chapters = $(".day");

    var chapterData=[];

    chapters.each(function (item) {
        var data = $(this);
        var chapterTitle = data.find(".postTitle a").text();
        var chapterDate = data.find(".dayTitle a").text();

        var articalData = {
            title : chapterTitle,
            date : chapterDate
        }
        chapterData.push(articalData);
    });

    return chapterData;
}

function printInfo(chapterData){
    chapterData.forEach(function (item) {
        var chapterTitle = item.title;
        var chapterDate = item.date;

        console.log(chapterDate + '\n');
        console.log(chapterTitle);
    });
}

http.get(url, function (res) {
    var html = '';

    res.on('data' , function (data) {
        html+=data;
    });

    res.on('end' , function () {
        var chapterData = filterChapters(html);
        printInfo(chapterData);
    });
}).on('error', function () {
    console.log("获取数据失败！");
});