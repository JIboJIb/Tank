var playList = [

    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
]
document.write("<ol>")
// playList.forEach(function (item) {
//     for (let key in item) {
//         document.write("<li>" + JSON.stringify(item[key]) + "</li>")
//     }
// })
var index;
for (index = 0; index < playList.length; ++index) {
    document.write("<li>" + JSON.stringify(playList[index]) + "</li>")
}
document.write("</ol>")
