"use strict";

/**************************************************
Template p5 project


Here is a description of this template p5 project.
**************************************************/
let timeline = {
  x: 0,
  y: 1100,
  length: 4256,
  width: 2500,
  height: 40,
  radius: 5,
  fill: {
    r: 254,
    g: 175,
    b: 108
  },
  sections: [
    {name: "Intro", end:181, fill:{r: 254, g: 175, b: 108}, sectNum: 0},
    {name: "Homepod Mini", end: 288, fill:{r: 254, g: 175, b: 108}, sectNum: 1},
    {name: "Homepod Acoustics", end: 458, fill:{r: 254, g: 175, b: 108}, sectNum: 1},
    {name: "Siri", end: 571, fill:{r: 254, g: 175, b: 108}, sectNum: 1},
    {name: "Smart Home", end: 698, fill:{r: 254, g: 175, b: 108}, sectNum: 1},
    {name: "Homepod Privacy", end: 780, fill:{r: 254, g: 175, b: 108}, sectNum: 1},
    {name: "iPhone", end: 865, fill:{r: 254, g: 175, b: 108}, sectNum: 2},
    {name: "Verizon 5G", end: 1215, fill:{r: 254, g: 175, b: 108}, sectNum: 5},
    {name: "Cinematic", end: 1260, fill:{r: 254, g: 175, b: 108}, sectNum: 2 },
    {name: "iPhone Design", end: 1331, fill:{r: 254, g: 175, b: 108}, sectNum: 2},
    {name: "Super Retina XDR", end: 1400, fill:{r: 254, g: 175, b: 108}, sectNum: 2},
    {name: "Ceramic Shield", end: 1490, fill:{r: 254, g: 175, b: 108}, sectNum: 2},
    {name: "iPhone 5G", end: 1655, fill:{r: 254, g: 175, b: 108}, sectNum: 5},
    {name: "A14 Bionic Chip", end: 1817, fill:{r: 254, g: 175, b: 108}, sectNum: 2},
    {name: "League of Legends", end: 1945, fill:{r: 254, g: 175, b: 108}, sectNum: 5},
    {name: "Camera", end: 1995, fill:{r: 254, g: 175, b: 108}, sectNum: 3},
    {name: "Comp. Photography", end: 2072, fill:{r: 254, g: 175, b: 108}, sectNum: 3},
    {name: "Video Capabilities", end: /*2100*/ 2195, fill:{r: 254, g: 175, b: 108}, sectNum: 3},
    //{name: "Video Cinematic", end: 2195, fill:{r: 254, g: 175, b: 108}, sectNum: 3},
    {name: "Mag Safe", end: 2297, fill:{r: 254, g: 175, b: 108}, sectNum: 2},
    {name: "Environment", end: 2465, fill:{r: 254, g: 175, b: 108}, sectNum: 4},
    {name: "iPhone Mini", end: 2576, fill:{r: 254, g: 175, b: 108}, sectNum: 6},
    {name: "Cinematic", end: 2668, fill:{r: 254, g: 175, b: 108}, sectNum: 6},
    {name: "iPhone 12 Prices", end: 2725, fill:{r: 254, g: 175, b: 108}, sectNum: 6},
    {name: "iPhone Pro", end: 2796, fill:{r: 254, g: 175, b: 108}, sectNum: 7},
    {name: "iPhone Pro Specs", end: 2915, fill:{r: 254, g: 175, b: 108}, sectNum: 7},
    {name: "A14 Bionic", end: 2984, fill:{r: 254, g: 175, b: 108}, sectNum: 7},
    {name: "Pro Cameras", end: 3042, fill:{r: 254, g: 175, b: 108}, sectNum: 8},
    {name: "Pro Max Cameras", end: 3180, fill:{r: 254, g: 175, b: 108}, sectNum: 8},
    {name: "Apple ProRAW", end: 3340, fill:{r: 254, g: 175, b: 108}, sectNum: 8},
    {name: "iPhone Pro Video", end: 3458, fill:{r: 254, g: 175, b: 108}, sectNum: 8},
    {name: "Pro Video Cinematic", end: 3520, fill:{r: 254, g: 175, b: 108}, sectNum: 8},
    {name: "LiDAR", end: 3651, fill:{r: 254, g: 175, b: 108}, sectNum: 8},
    {name: "5G", end: 3764, fill:{r: 254, g: 175, b: 108}, sectNum: 5},
    {name: "Cinematic", end: 3905, fill:{r: 254, g: 175, b: 108}, sectNum: 7},
    {name: "Price", end: 3990, fill:{r: 254, g: 175, b: 108}, sectNum: 7},
    {name: "Conclusion", end: 4080, fill:{r: 254, g: 175, b: 108}, sectNum: 9},
    {name: "Rolling credits", end: 4256, fill:{r: 254, g: 175, b: 108}, sectNum: 9}
  ]
};

let spacing = {
  timeline_dots: 50,
  dots_width: 350,
  imageW: 140,
  imageH: 180,
  imageBorder: 15
};

let text_5g = {
  title: "'5G'",
  y: timeline.y - spacing.timeline_dots - ((spacing.dots_width / 5) * 2),
  fill: {
    r: 116,
    g: 193,
    b: 175
  },
  stroke: {
    r: 200,
    g: 200,
    b: 200
  },
  times: [
    860.69,
    869.34,
    881.65,
    892.19,
    912.71,
    917.05,
    964.83,
    969.54,
    982.45,
    994.76,
    1006.91,
    1009.74,
    1015.45,
    1039.37,
    1043.78,
    1057.99,
    1076.58,
    1098.07,
    1127.9,
    1142.48,
    1145.68,
    1151.02,
    1165.0,
    1167.27,
    1176.28,
    1181.65,
    1196.76,
    1199.8,
    1206.87,
    1259.09,
    1284.58,
    1472.81,
    1476.64,
    1502.17,
    1509.84,
    1521.62,
    1525.36,
    1540.77,
    1546.25,
    1550.05,
    1552.99,
    1557.12,
    1563.06,
    1583.45,
    1593.69,
    1607.67,
    1615.35,
    1619.85,
    1642.68,
    1821.59,
    1852.32,
    1871.81,
    1912.98,
    2139.47,
    2480.25,
    2544.34,
    2557.72,
    2896.73,
    3531.6,
    3655.52,
    3662.23,
    3674.94,
    3691.79,
    3712.88,
    3769.14,
    3792.16,
    3796.83,
    3926.06,
    4001.37
  ]
};

let text_you = {
  title: "'You/your'",
  y: timeline.y - spacing.timeline_dots - ((spacing.dots_width / 5) * 3),
  fill: {
    r: 161,
    g: 141,
    b: 213
  },
  stroke: {
    r: 200,
    g: 200,
    b: 200
  },
  times: [
    521.26,
    524.66,
    588.62,
    652.55,
    671.2,
    2272.97,
    2537.7,
    3280.35,
    3315.92,
    3320.79,
    3374.01,
    3442.41,
    3839.71,
    81.61,
    98.67,
    105.84,
    128.16,
    138.77,
    143.08,
    176.28,
    209.38,
    219.19,
    224.42,
    241.07,
    248.21,
    250.98,
    255.26,
    258.09,
    260.79,
    264.46,
    270.34,
    273.21,
    280.61,
    315.78,
    330.73,
    355.12,
    359.56,
    364.5,
    368.87,
    371.74,
    376.01,
    384.28,
    395.46,
    399.53,
    405.37,
    410.34,
    414.88,
    445.85,
    448.65,
    450.62,
    453.75,
    486.72,
    500.5,
    503.84,
    507.37,
    527.43,
    532.17,
    540.44,
    560.16,
    566.07,
    572.64,
    584.65,
    603.44,
    618.25,
    623.62,
    628.53,
    643.98,
    652.55,
    662.06,
    669.1,
    681.11,
    687.99,
    702.67,
    706.47,
    713.88,
    716.82,
    720.05,
    728.46,
    731.67,
    743.01,
    757.89,
    887.05,
    892.19,
    895.76,
    922.62,
    929.73,
    958.59,
    1015.45,
    1031.63,
    1034.9,
    1098.07,
    1108.98,
    1117.38,
    1173.24,
    1191.62,
    1193.03,
    1206.87,
    1253.45,
    1368.67,
    1387.79,
    1391.42,
    1456.39,
    1487.19,
    1557.12,
    1670.64,
    1673.34,
    1861.99,
    1889.72,
    1911.04,
    1912.98,
    1925.49,
    1928.4,
    1930.9,
    1974.34,
    2003.27,
    2053.19,
    2088.66,
    2151.22,
    2189.72,
    2251.62,
    2270.8,
    2275.71,
    2294.23,
    2300.5,
    2456.29,
    2513.68,
    2526.39,
    2686.55,
    2705.44,
    2785.45,
    2896.73,
    3021.95,
    3061.26,
    3088.26,
    3170.8,
    3191.86,
    3260.79,
    3305.67,
    3310.44,
    3322.66,
    3385.48,
    3412.18,
    3428.4,
    3432.13,
    3456.99,
    3480.35,
    3493.66,
    3520.82,
    3529.9,
    3531.6,
    3540.24,
    3572.27,
    3622.12,
    3650.72,
    3655.52,
    3658.82,
    3666.53,
    3835.84,
    4072.17
  ]
};

let text_we = {
  title: "'We/our'",
  y: timeline.y - spacing.timeline_dots - ((spacing.dots_width / 5) * 4),
  fill: {
    r: 194,
    g: 134,
    b: 219
  },
  stroke: {
    r: 200,
    g: 200,
    b: 200
  },
  times: [
    84.62,
    113.15,
    119.45,
    132.7,
    148.12,
    165.47,
    280.61,
    289.02,
    291.16,
    324.93,
    390.79,
    620.52,
    787.69,
    849.25,
    1306.67,
    1310.88,
    1380.81,
    1391.42,
    1414.95,
    1469.07,
    1502.17,
    1507.04,
    1509.84,
    1543.24,
    1612.38,
    1633.2,
    1804.34,
    1864.4,
    1992.53,
    2032.27,
    2091.42,
    2160.03,
    2212.14,
    2278.65,
    2382.08,
    2409.08,
    2963.9,
    3108.64,
    3180.98,
    3225.63,
    3241.47,
    3332.9,
    3378.18,
    3414.15,
    3536.34,
    3553.82,
    3616.25,
    3759.03,
    4039.87,
    4052.75,
    4066.6,
    138.77,
    148.12,
    294.16,
    297.63,
    309.81,
    728.46,
    1196.76,
    1387.79,
    1452.79,
    1519.19,
    1535.94,
    1552.99,
    1567.3,
    1577.08,
    1662.56,
    1940.74,
    2088.66,
    2147.78,
    2217.25,
    2221.32,
    2268.14,
    2287.15,
    2296.83,
    2422.49,
    2451.69,
    2678.55,
    2736.17,
    2863.7,
    2877.91,
    2974.78,
    3048.92,
    3739.34,
    98.67,
    577.91,
    640.41,
    860.69,
    864.77,
    1054.59,
    1057.99,
    1148.15,
    1193.03,
    1199.8,
    1465.1,
    1599.77,
    1642.68,
    1787.95,
    2325.09,
    2431.2,
    2447.15,
    3042.98,
    3191.86,
    3365.87,
    3369.57,
    3391.62,
    3536.34,
    3915.21,
    3993.23,
    4026.53,
    630.73,
    636.1,
    685.79,
    941.34,
    1047.35,
    1092.59,
    1593.69,
    1760.66,
    1769.4,
    1930.9,
    2082.98,
    2240.41,
    2376.81,
    3286.79,
    3549.95,
    3566.2,
    3926.06,
    4031.2,
    108.47,
113.15,
132.7,
138.77,
143.08,
224.42,
250.98,
262.8,
264.46,
270.34,
273.21,
355.12,
359.56,
364.5,
368.87,
376.01,
395.46,
405.37,
410.34,
414.88,
450.62,
500.5,
503.84,
507.37,
521.26,
527.43,
532.17,
572.64,
584.65,
603.44,
618.25,
628.53,
643.98,
662.06,
669.1,
681.11,
687.99,
702.67,
706.47,
713.88,
716.82,
720.05,
731.67,
757.89,
790.86,
849.25,
892.19,
907.94,
933.47,
941.34,
955.56,
984.69,
1057.99,
1074.47,
1096.2,
1108.98,
1124.86,
1142.48,
1151.02,
1202.04,
1324.12,
1327.96,
1368.67,
1387.79,
1391.42,
1407.27,
1447.65,
1452.79,
1456.39,
1460.29,
1498.3,
1529.26,
1535.94,
1557.12,
1573.51,
1577.08,
1580.81,
1607.67,
1662.56,
1670.64,
1742.01,
1769.4,
1787.95,
1794.73,
1796.06,
1808.34,
1845.91,
1864.4,
1911.04,
1928.4,
1944.68,
1962.16,
1971.67,
1974.34,
2151.22,
2212.14,
2270.8,
2314.41,
2329.86,
2335.0,
2356.56,
2376.81,
2426.39,
2453.19,
2513.68,
2521.95,
2678.55,
2732.6,
2736.17,
2795.96,
2799.5,
2812.75,
2827.29,
2834.2,
2849.08,
2859.53,
2883.45,
2889.09,
2906.81,
2913.25,
2916.38,
2963.9,
2985.02,
2991.09,
3017.28,
3042.98,
3090.32,
3104.6,
3135.1,
3173.87,
3180.98,
3188.35,
3197.2,
3212.51,
3230.83,
3241.47,
3245.85,
3280.35,
3353.05,
3385.48,
3405.2,
3418.65,
3432.13,
3529.9,
3531.6,
3536.34,
3592.69,
3622.12,
3662.23,
3731.0,
3747.51,
3835.84,
3878.78,
3920.05,
3930.66,
3954.85,
4022.69,
4031.2
  ]
};

let text_iphone = {
  title: "'iPhone'",
  y: timeline.y - spacing.timeline_dots - ((spacing.dots_width / 5) * 5),
  fill: {
    r: 111,
    g: 167,
    b: 170
  },
  stroke: {
    r: 200,
    g: 200,
    b: 200
  },
  times: [
    381.95,
    390.79,
    395.46,
    397.5,
    497.73,
    500.5,
    507.37,
    548.78,
    643.98,
    720.05,
    780.81,
    783.82,
    790.86,
    798.8,
    801.83,
    808.68,
    810.91,
    816.82,
    833.43,
    837.74,
    849.25,
    856.72,
    860.69,
    902.04,
    917.05,
    922.62,
    937.1,
    979.01,
    994.76,
    1176.28,
    1196.76,
    1202.04,
    1206.87,
    1251.18,
    1259.09,
    1277.14,
    1284.58,
    1301.8,
    1306.67,
    1310.88,
    1313.21,
    1324.12,
    1358.99,
    1395.6,
    1399.9,
    1438.67,
    1447.65,
    1456.39,
    1465.1,
    1469.07,
    1472.81,
    1550.05,
    1557.12,
    1563.06,
    1588.12,
    1599.77,
    1615.35,
    1642.68,
    1651.58,
    1655.42,
    1688.99,
    1696.76,
    1800.43,
    1827.69,
    1855.46,
    1871.81,
    1903.0,
    1940.74,
    1949.25,
    1959.43,
    2026.86,
    2032.27,
    2047.48,
    2070.8,
    2075.98,
    2088.66,
    2091.42,
    2143.38,
    2160.03,
    2186.62,
    2230.3,
    2235.74,
    2243.18,
    2256.46,
    2265.0,
    2270.8,
    2296.83,
    2356.56,
    2376.81,
    2409.08,
    2418.25,
    2431.2,
    2466.33,
    2480.25,
    2510.74,
    2521.95,
    2532.73,
    2540.67,
    2550.12,
    2553.09,
    2570.3,
    2669.9,
    2675.74,
    2686.55,
    2689.16,
    2694.63,
    2698.17,
    2702.24,
    2725.49,
    2729.86,
    2732.6,
    2736.17,
    2782.98,
    2794.36,
    2795.96,
    2858.23,
    2870.37,
    2886.29,
    2969.24,
    2985.02,
    2999.77,
    3005.64,
    3014.61,
    3042.98,
    3076.24,
    3099.0,
    3205.71,
    3208.01,
    3305.67,
    3344.74,
    3348.21,
    3362.2,
    3369.57,
    3395.6,
    3408.41,
    3436.7,
    3444.81,
    3453.75,
    3488.52,
    3517.65,
    3536.34,
    3566.2,
    3572.27,
    3584.89,
    3642.98,
    3650.72,
    3716.12,
    3728.29,
    3739.34,
    3759.03,
    3771.2,
    3813.88,
    3817.45,
    3850.32,
    3875.61,
    3895.76,
    3911.18,
    3920.05,
    3933.4,
    3943.71,
    3954.85,
    3958.16,
    3961.36,
    3996.2,
    4026.53
  ]
};

let text_privacy = {
  title: "'Privacy'",
  y: timeline.y - spacing.timeline_dots - ((spacing.dots_width / 5) * 1),
  fill: {
    r: 111,
    g: 167,
    b: 170
  },
  stroke: {
    r: 200,
    g: 200,
    b: 200
  },
  times: [
    138.77,
    273.21,
    702.67,
    842.21,
    892.19,
    3691.79,
    4045.71
  ]
};

let speakers = [
  {name:"Tim Cook", title: "CEO, Apple", times: [78,765,1200,2725,3990], photo:""},
  {name:"Bob Brochers", title: "VP, Worldwide Product Marketing", times: [219,700], photo:""},
  {name:"Dave Wilkes", title: "Manager, Acoustic Engineer", times: [290], photo:""},
  {name:"Yael Garten", title: "Director, Siri Data Science and Engineering", times: [458], photo:""},
  {name:"Hans Vestberg", title: "CEO, Verizon", times: [953], photo:""},
  {name:"Kaiann Drance", title: "VP, iPhone Product Marketing", times: [1260,1652,1817,1940,2297,2465], photo:""},
  {name:"Arun Mathias", title: "VP, Wireless Technologies and Ecosystems", times: [1491], photo:""},
  {name:"Hope Giles", title: "VP, Engineering, Program Management, Hardware Technologies", times: [1689], photo:""},
  {name:"Michael Chow", title: "Executive Producer, Riot Games", times: [1864], photo:""},
  {name:"Deniz Teoman", title: "VP, Hardware Systems Engineering", times: [2195], photo:""},
  {name:"Lisa Jackson", title: "VP, Environment, Policy and Social Initiatives", times: [2314], photo:""},
  {name:"Greg Joswiak", title: "VP, Worldwide marketing", times: [2796,3306,3651], photo:""},
  {name:"Andrew Fernandez", title: "Manager, Camera Systems Engineering", times: [3042], photo:""},
  {name:"Alok Deshpande", title: "Senior Manager, Camera Software Engineering", times: [3180], photo:""},
  {name:"Francesca Sweet", title: "Product Line Manager, iPhone", times: [3550], photo:""},
];

let allTimes = [78,219,290,458,700,765,953,1200,1260,1491,1652,1689,1817,1864,1940,2195,2297,2314,2465,2725,2796,3042,3180,3306,3550,3651,3990];

let myFont;
function preload() {
  myFont = loadFont('http://db.onlinewebfonts.com/t/1c45e28f8e86cc89876f003b953cc3e9.ttf');
  speakers[0].photo = loadImage('assets/images/Cook.png');
  speakers[1].photo = loadImage('assets/images/Brochers.png');
  speakers[2].photo = loadImage('assets/images/Wilkes.png');
  speakers[3].photo = loadImage('assets/images/Garten.png');
  speakers[4].photo = loadImage('assets/images/Vestberg.png');
  speakers[5].photo = loadImage('assets/images/Drance.png');
  speakers[6].photo = loadImage('assets/images/Mathias.png');
  speakers[7].photo = loadImage('assets/images/Giles.png');
  speakers[8].photo = loadImage('assets/images/Chow.png');
  speakers[9].photo = loadImage('assets/images/Teoman.png');
  speakers[10].photo = loadImage('assets/images/Jackson.png');
  speakers[11].photo = loadImage('assets/images/Joswiak.png');
  speakers[12].photo = loadImage('assets/images/Fernandez.png');
  speakers[13].photo = loadImage('assets/images/Deshpande.png');
  speakers[14].photo = loadImage('assets/images/Sweet.png');
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(3000, 1500);
  background(250, 250, 250);

  textAlign(CENTER);
  textFont(myFont);
  fill(100);
  textSize(50);
  text("Frequency of certain words spoken by Apple employees at Apple's iPhone 12 Event", width / 2, 100);

  translate(430, 0);
  fill(timeline.fill.r, timeline.fill.g, timeline.fill.b);
  noStroke();

  //drawColoredBackground();
  drawTimeline2();
  drawSpeakers();
  //drawSpeakerTimeline();
  // drawLines(text_we);
  // drawLines(text_you);
  // drawLines(text_iphone);
  // drawLines(text_5g);
  drawPoints(text_privacy);
  drawPoints(text_5g);
  drawPoints(text_you);
  drawPoints(text_we);
  drawPoints(text_iphone);

}

function drawColoredBackground(){
  push();
  for(let i = timeline.sections.length-1; i>=0; i--){
    noStroke();
    switch (timeline.sections[i].sectNum) {
      case 0:
        fill(255, 226, 140);
        break;
      case 1:
        fill(254,160,90);
        break;
      case 2:
        fill(255, 139, 146);
        break;
      case 3:
        fill(238, 123, 194);
        break;
      case 4:
        fill(196, 120, 232);
        break;
      case 5:
        //fill(0);
        //stroke(100)
        break;
      case 6:
        fill(158, 133, 237);
        break;
      case 7:
        fill(105, 149, 245);
        break;
      case 8:
        fill(71, 193, 204);
        break;
      default:
        fill(64, 177, 175);
        fill(22, 204, 155);
    }
    let beginning;
    if(i==0){
      beginning = 0;
    } else{
      beginning = map(timeline.sections[i-1].end,timeline.x, timeline.length, timeline.x, timeline.width);
    }
    let end = map(timeline.sections[i].end, timeline.x, timeline.length, timeline.x, timeline.width)-beginning;
    rect(beginning, timeline.y- spacing.timeline_dots - spacing.dots_width, end, spacing.timeline_dots + spacing.dots_width);
  }
  fill('rgba(248, 248, 248, 0.8)');
  rect(timeline.x - 5, timeline.y - timeline.height - spacing.timeline_dots - spacing.dots_width - 5, timeline.width+10, timeline.height + spacing.timeline_dots + spacing.dots_width+5);
  pop();
}

function drawTimeline(){
  push();
  // translate(300, 0);

  for(let i = timeline.sections.length-1; i>=0; i--){
    noStroke();
    switch (timeline.sections[i].sectNum) {
      case 0:
        fill(255, 226, 140);
        break;
      case 1:
        fill(254,160,90);
        break;
      case 2:
        fill(255, 139, 146);
        break;
      case 3:
        fill(238, 123, 194);
        break;
      case 4:
        fill(196, 120, 232);
        break;
      case 5:
        //fill(0);
        //stroke(100)
        break;
      case 6:
        fill(158, 133, 237);
        break;
      case 7:
        fill(105, 149, 245);
        break;
      case 8:
        fill(71, 193, 204);
        break;
      default:
        fill(64, 177, 175);
        fill(22, 204, 155);
    }
    let beginning;
    if(i==0){
      beginning = 0;
    } else{
      beginning = map(timeline.sections[i-1].end,timeline.x, timeline.length, timeline.x, timeline.width);
    }
    let end = map(timeline.sections[i].end, timeline.x, timeline.length, timeline.x, timeline.width)-beginning;
    rect(beginning, timeline.y, end, timeline.height/*, timeline.radius*/);

    push();
    fill(100);
    textSize(15);
    textAlign(LEFT);
    translate(beginning, timeline.y + timeline.height + 10);
    rotate(PI/2);
    text(timeline.sections[i].name, 0, -5);

    stroke(100);
    strokeWeight(1);
    line(-400,-2,50,-2 );
    pop();
  }
  pop();
}

function drawTimeline2(){
  let fillIncrease = 20;
  push();
  // translate(300, 0);

  for(let i = timeline.sections.length-1; i>=0; i--){
    noStroke();
    switch (timeline.sections[i].sectNum) {
      case 0:
        fill(255, 226, 140);
        break;
      case 1:
        fill(254,160,90);
        break;
      case 2:
        fill(255, 139, 146);
        break;
      case 3:
        fill(238, 123, 194);
        break;
      case 4:
        fill(196, 120, 232);
        break;
      case 5:
        //fill(0);
        //stroke(100)
        break;
      case 6:
        fill(158, 133, 237);
        break;
      case 7:
        fill(105, 149, 245);
        break;
      case 8:
        fill(71, 193, 204);
        break;
      default:
        fill(64, 177, 175);
        fill(22, 204, 155);
    }


    if(i == 0 || i == 0 || i == 5 || i == 14 || i == 19 || i == 22 || i == 25 || i == 34){
      fillIncrease = -fillIncrease;
    }

    fill(200+fillIncrease);
    let beginning;
    if(i==0){
      beginning = 0;
    } else{
      beginning = map(timeline.sections[i-1].end,timeline.x, timeline.length, timeline.x, timeline.width)+2;
    }
    let end = map(timeline.sections[i].end, timeline.x, timeline.length, timeline.x, timeline.width)-beginning-4;
    rect(beginning, timeline.y, end, timeline.height, timeline.radius);

    push();
    if(i == 0 || i == 1 || i == 6 || i == 15 || i == 20 || i == 23 || i == 26 || i == 35){
      fill(50);
      textSize(25);
      textAlign(LEFT);
      translate(beginning, timeline.y - 10);
      text(timeline.sections[i].name, 0, -5);
    }
    pop();

    push();
    fill(100);
    textSize(20);
    textAlign(LEFT);
    translate(beginning, timeline.y + timeline.height + 10);
    rotate(PI/2);
    text(timeline.sections[i].name, 0, -5);

    stroke(100);
    strokeWeight(1);
    //line(-400,-2,50,-2 );
    pop();
  }
  pop();

  push();
  noStroke();
  fill(100);
  textSize(32);
  textAlign(RIGHT)
  text("Timeline", -50 , timeline.y + 30);
  pop();
}

function drawPoints(texts) {
  push();
  fill(237, 238, 240)
  rect(timeline.x, texts.y-20, timeline.width, 40, 5);

  stroke(texts.fill.r+20, texts.fill.g+20, texts.fill.b+20);
  noStroke();
  fill(texts.fill.r, texts.fill.g, texts.fill.b);
  fill('rgba(100, 100, 100, 0.4)');
  for (let i = 0; i < texts.times.length; i++) {
    ellipse(map(texts.times[i], timeline.x, timeline.length, timeline.x, timeline.width), texts.y, 15, 15);
  }

  noStroke();
  fill(100);
  textSize(32);
  textAlign(RIGHT)
  text(texts.title + " (" + texts.times.length+ " times)", -50 , texts.y +10);
  pop();
}

function drawLines(texts) {
  push();
  stroke(texts.stroke.r, texts.stroke.g, texts.stroke.b);
  strokeWeight(0.5);
  for (let i = 0; i < texts.times.length; i++) {
    let x = map(texts.times[i], timeline.x, timeline.length, timeline.x, timeline.width);
    line(x, texts.y, x, timeline.y);
  }
  pop();
}

function drawSpeakers(){
  let photoPosX = 0;
  let timelinePositionY = timeline.y- timeline.height - spacing.timeline_dots - spacing.dots_width
  let photoPosY = timelinePositionY - spacing.imageH -250;

  push();
  noStroke();
  fill(100);
  textSize(32);
  textAlign(RIGHT)
  text("Speakers", -50 , photoPosY + spacing.imageH/2);
  text("Who's Speaking", -50 , timeline.y- timeline.height - spacing.timeline_dots - spacing.dots_width -100 +30 );
  pop();

  for(let i = 0; i< speakers.length; i++){
    switch (i) {
      case 0:
        fill(180);
        break;
      case 1:
        fill('#F7E39A');
        break;
      case 2:
        fill('#FECE79');
        break;
      case 3:
        fill('#F8A555');
        break;
      case 4:
        fill('#F4816F');
        break;
      case 5:
        fill('#F48093');
        break;
      case 6:
        fill('#F390BC');
        break;
      case 7:
        fill('#E4B7D4');
        break;
      case 8:
        fill('#a4a5de');
        break;
      case 9:
        fill('#94CAE4');
        break;
      case 10:
        fill('#9FD9DA');
        break;
      case 11:
        fill('#97D1A9');
        break;
      case 12:
        fill('#CAE189');
        break;
      case 13:
        fill('#a1c4c3');
        break;
      default:
        fill(22, 204, 155);
    }

    push();
    // fill(100+i*10)
    textSize(20);
    textAlign(LEFT);
    rect(photoPosX, photoPosY, spacing.imageW, spacing.imageH+spacing.imageBorder, timeline.radius)
    image(speakers[i].photo, photoPosX, photoPosY, spacing.imageW, spacing.imageH);
    fill(100);
    text(speakers[i].name, photoPosX, photoPosY+spacing.imageH+spacing.imageBorder*2, spacing.imageW, 50);
    pop();

    for(let j = 0; j<speakers[i].times.length; j++){
      // push();
      // fill(100);
      // textSize(20);
      // textAlign(RIGHT);
       let beginning = map(speakers[i].times[j], timeline.x, timeline.length, timeline.x, timeline.width);
      // translate(beginning, timeline.y - timeline.height - spacing.timeline_dots - spacing.dots_width - 50);
      // rotate(PI/2);
      // text(speakers[i].name, 0, -5);
      // pop();

      push();
      /*let*/ beginning = map(speakers[i].times[j],timeline.x, timeline.length, timeline.x, timeline.width)+2;
      let end;
      let endIndex = allTimes.indexOf(speakers[i].times[j]) + 1;
      if (endIndex >= allTimes.length){
        end = map(4080, timeline.x, timeline.length, timeline.x, timeline.width)-beginning-4;
      } else{
        end = map(allTimes[endIndex], timeline.x, timeline.length, timeline.x, timeline.width)-beginning-4
      }
      //fill(100+i*10)
      rect(beginning, timelinePositionY - 100, end, timeline.height, timeline.radius);
      pop();

      // push();
      // stroke(100);
      // strokeWeight(1);
      // line(photoPosX+ (140/3),photoPosY+180,beginning+ end/2,timelinePositionY - 100 );
      // pop();
    }


    photoPosX+=(timeline.width+30)/15;

  }
}

function drawSpeakerTimeline(){
  push();
  fill(100);
  console.log(allTimes.length)
  for(let i = 0; i< allTimes.length; i++){
    let beginning = map(allTimes[i],timeline.x, timeline.length, timeline.x, timeline.width)+2;
    let end;
    if(i == allTimes.length-1){
      end = map(4080, timeline.x, timeline.length, timeline.x, timeline.width)-beginning-4;
    } else{
      end = map(allTimes[i+1], timeline.x, timeline.length, timeline.x, timeline.width)-beginning-4;
    }
    rect(beginning, timeline.y-500, end, timeline.height, timeline.radius);
  }
  pop();
}
function draw() {


}
