"use strict"
let data = {
  dates: ['16-Jul','16-Aug','16-Sep','16-Oct','16-Nov','16-Dec','17-Jan','17-Feb','17-Mar','17-Apr','17-May','17-Jun','17-Jul','17-Aug','17-Sep','17-Oct','17-Nov','17-Dec','18-Jan','18-Feb','18-Mar','18-Apr','18-May','18-Jun','18-Jul','18-Aug','18-Sep','18-Oct','18-Nov','18-Dec','19-Jan','19-Feb','19-Mar','19-Apr','19-May','19-Jun','19-Jul','19-Aug','19-Sep','19-Oct','19-Nov','19-Dec','20-Jan','20-Feb','20-Mar','20-Apr','20-May','20-Jun','20-Jul'],
  montreal: {
    openingBusinesses:[3889,3492,3159,3570,3794,3343,5105,3368,3385,3465,3567,3390,3469,3471,3587,3430,3220,3349,3485,3563,3701,3568,3559,3499,3354,3628,3736,3576,5548,3739,3561,3757,3726,3706,3629,3634,3563,3522,3683,3531,3737,3777,3633,3661,2353,3641,4751,5926,6017],
    continuingBusinesses: [81538,81936,82080,81615,81240,81639,82151,84429,83884,83976,84326,84668,84812,84867,84524,84593,84929,84211,84068,84487,84268,85210,85050,85629,85978,85129,85064,85199,82923,84452,84302,84702,84962,86264,86453,86787,86936,86762,86428,86296,85760,85414,85222,85960,82004,77388,73982,72008,74601],
    closingBusinesses:[3679,3459,3237,3504,3598,3316,2860,2942,4062,3437,3222,3460,3341,3313,3664,3376,2695,3661,3324,3377,3828,3355,3862,3349,3161,4028,3474,3376,5409,3541,3610,3728,3316,3435,3682,3825,3425,3555,3534,3446,3631,3408,3646,3722,7211,8281,7206,7370,3212]
  }
}
function setup() {
  createCanvas (1300,2050);
  noStroke();
  background(15,15,20);

  for(let i = 0; i <1000000; i++){
    push();
    fill(random(0,15), random(0,15), random(0,25));
    ellipse(random(0,width),random(0,height), 5);
    pop();
  }

  fill(255);
  let startAtMonth = 20;
  let numDateSections = data.dates.length - startAtMonth;
  let mainMargin = 50;
  let sectionMargin = 18;
  let sectionWidth = (width-mainMargin*2)/numDateSections - sectionMargin;
  let xSection = mainMargin;
  for(let i = startAtMonth; i<data.dates.length; i++){
    //rect(xSection,mainMargin,sectionWidth,height-mainMargin*2);
    push();
    fill(200);
    textAlign(LEFT);
    translate(xSection+sectionWidth/2,mainMargin+20);
    rotate(-PI/2);
    text(data.dates[i],0,0);
    pop();
    let bizPerSquare = 50;
    let ptPerRow = 5;
    let ptMargin = 1;
    let ptSize = sectionWidth/ptPerRow - ptMargin;
    let ptX = xSection+ptMargin/2;
    let ptY = mainMargin+40;
    let openBiz = int(data.montreal.openingBusinesses[i]/bizPerSquare);
    let contBiz = int(data.montreal.continuingBusinesses[i]/bizPerSquare);
    let closBiz = int(data.montreal.closingBusinesses[i]/bizPerSquare);
    let pointsTotal = openBiz + contBiz + closBiz;
    for(let j = 0; j < pointsTotal; j++){
      push();
      if(j <= closBiz){
        fill(255-random(0,50),0,106);
      }else if(j <= closBiz+openBiz){
        let ran = random(0,50);
        fill(240-ran,240-ran,255-ran);
      }else if (j <= pointsTotal){
        let ran = random(0,50);
        fill(150-ran,150-ran,165-ran);
      }

      rect(ptX,ptY,ptSize-random(0,2));
      pop();
      ptX+= ptSize + ptMargin;

      if(j%ptPerRow === 0){
        if(j != 0){
          ptY += ptSize + ptMargin;
        }
          ptX = xSection+ptMargin/2;
      }
    }

    xSection +=sectionMargin+sectionWidth;
  }

  let marginBottom = 200;
  strokeWeight(2);
  push();
  stroke(255-random(0,50),0,106);
  let x = mainMargin+ (sectionMargin*23) + sectionWidth*24 + sectionMargin/2;
  line(x,mainMargin-20,x,height-marginBottom+45);
  //line(0,height-marginBottom,width,height-marginBottom);
  strokeWeight(5);
  stroke(200);
  point(x,height-marginBottom+45)
  pop();

  push();
  fill(255-random(0,50),0,106);
  textSize(15)
  textAlign(CENTER);
  text("Outbreak",x,height-marginBottom+70)
  pop();

  push();
  fill(200);
  textAlign(LEFT);
  textSize(30);
  text("Number of businesses in Montreal",mainMargin,height-marginBottom+70)
  pop();

  push();
  stroke(200);
  line(mainMargin,height-marginBottom+80,mainMargin+457,height-marginBottom+80)
  pop();

  push();
  fill(200);
  textAlign(LEFT);
  textSize(12);
  text("Opening Business",mainMargin,height-marginBottom+110);
  text("Active Business",mainMargin,height-marginBottom+130);
  text("Closing Business",mainMargin,height-marginBottom+150);
  pop();

  push();
  fill(200);
  textAlign(LEFT);
  textSize(12);
  rect(mainMargin*4,height-marginBottom+102,7);
  fill(150,150,165);
  rect(mainMargin*4,height-marginBottom+122,7);
  fill(255,0,106)
  rect(mainMargin*4,height-marginBottom+142,7);
  pop();
}

function draw() {

}
