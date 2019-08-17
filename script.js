// data section
var data = {
  barbarian:{
    name:"Barbarian",
    image:"http://getwallpapers.com/wallpaper/full/7/4/3/151403.jpg",
    description:"He is the normal person, but he is a good person to attract building damage, and other people attack clan.",
    damage:"8",
    hitpoint:"45",
    speed:"16",
    link:"https://clashofclans.fandom.com/wiki/Barbarian",
    color: "#fcba03"
  },
  archer:{
    name:"Archer",
    image:"https://wallpapercave.com/wp/wp3716414.jpg",
    description:"Archer is suitable for group battles, only a large number of people can play her real damage.",
    damage:"7",
    hitpoint:"20",
    speed:"24",
    link:"https://clashofclans.fandom.com/wiki/Archer",
    color: "#fc03a1"
  },
  giant:{
    name:"Giant",
    image:"https://wallpapercave.com/wp/wp2253395.jpg",
    description:"Giant has more hitpoint you can put he first to attract damage",
    damage:"22",
    hitpoint:"300",
    speed:"12",
    link:"https://clashofclans.fandom.com/wiki/Giant",
    color: "#fcf803"
  },
  goblin:{
    name:"Goblin",
    image:"https://i.pinimg.com/originals/4c/52/2c/4c522ca4170b59d642a9e5dc7ad9e121.jpg",
    description:"Goblin is steal resourse first choice, he only attack resourse and he's damage to resourse building is double.",
    damage:"22",
    hitpoint:"300",
    speed:"12",
    link:"https://clashofclans.fandom.com/wiki/Goblin",
    color: "#00c707"
  },
  wallBreaker:{
    name:"Wall Breaker",
    image:"https://cdn.hipwallpaper.com/i/77/19/EYGJan.jpg",
    description:"wall Breaker only attack wall and it's damage to wall is 20 times.",
    damage:"12",
    hitpoint:"20",
    speed:"24",
    link:"https://clashofclans.fandom.com/wiki/Wall_Breaker",
    color: "#000000"
  },
  balloon:{
    name:"Balloon",
    image:"http://hdqwalls.com/wallpapers/clash-of-clans-balloons-08.jpg",
    description:"balloon is fly on the so, most of the building can attack him. but he's hitpoint is very low, recommend destroyed the building that can't hurt him before put him.",
    damage:"75",
    hitpoint:"150",
    speed:"10",
    link:"https://clashofclans.fandom.com/wiki/Balloon",
    color: "#626303"
  },
  wizard:{
    name:"Wizard",
    image:"https://wallpapercave.com/wp/wp2273213.jpg",
    description:"Wizard can far attack like archer but he's damage is much bigger than archer so he will cost more staff to have it.",
    damage:"75",
    hitpoint:"75",
    speed:"16",
    link:"https://clashofclans.fandom.com/wiki/Wizard",
    color: "#027fd9"
  },
  healer:{
    name:"Healer",
    image:"https://cdn.hipwallpaper.com/i/11/57/viNj5S.jpg",
    description:"Healer is the only person can treat the teammate, so in the team attack first protect her.",
    damage:"24.5",
    hitpoint:"500",
    speed:"16",
    link:"https://clashofclans.fandom.com/wiki/Healer",
    color: "#f3f79e"
  },
  dragon:{
    name:"Dragon",
    image:"https://www.barraques.cat/pngfile/big/3-35948_clash-of-clans-wallpapers-for-iphone-clash-of.jpg",
    description:"Dragon have a good damage, it will be the main army to attack clan",
    damage:"175",
    hitpoint:"1900",
    speed:"16",
    link:"https://clashofclans.fandom.com/wiki/Dragon",
    color: "#6b024a"
  },
  pEKKA:{
    name:"PEKKA",
    image:"http://www.portoalegre.travel/upload/b/47/474914_clash-of-clans-pekka-wallpaper.jpg",
    description:"P.E.K.K.A is the best army in the clan, but it's every attack is very slow that why it has a lot of hitpoint...",
    damage:"432",
    hitpoint:"2800",
    speed:"16",
    link:"https://clashofclans.fandom.com/wiki/P.E.K.K.A",
    color: "#bd06c7"
  },
  minion:{
    name:"Minion",
    image:"http://clash-wiki.com/images/media/wallpapers/clash-of-clans-minion-wallpaper.jpg",
    description:"Minion have same thing with barbarian but it's on the sky some building can attack them.",
    damage:"32",
    hitpoint:"55",
    speed:"32",
    link:"https://clashofclans.fandom.com/wiki/Minion",
    color: "#046484"
  },
  hogrider:{
    name:"Hog Rider",
    image:"https://wallpapercave.com/wp/wp2078570.jpg",
    description:"Hog Rider can cross the wall to the inside, and his damage is fast.",
    damage:"60",
    hitpoint:"270",
    speed:"24",
    link:"https://clashofclans.fandom.com/wiki/Hog_Rider",
    color: "#8c6804"
  },
  valkyrie:{
    name:"Valkyrie",
    image:"http://clash-wiki.com/images/media/wallpapers/clash-of-clans-valkyrie-wallpaper.jpg",
    description:"Valkyrie has very high damage,she's hitpoint also good, so she is good person to attract building's damage and attack them.",
    damage:"169.2",
    hitpoint:"750",
    speed:"24",
    link:"https://clashofclans.fandom.com/wiki/Valkyrie",
    color: "#e3a63d"
  },
  golem:{
    name:"Golem",
    image:"https://www.barraques.cat/pngfile/big/3-37522_wallpaper-clash-of-clans-3d-golem-coc-wallpaper.jpg",
    description:"Golem's effect is same with Giant, but he is butter to Giant, he has the most of the hitpoint is the troops.",
    damage:"91.2",
    hitpoint:"5100",
    speed:"12",
    link:"https://clashofclans.fandom.com/wiki/Golem",
    color: "#87837c"
  },
  witch:{
    name:"Witch",
    image:"http://clash-wiki.com/images/media/wallpapers/clash-of-clans-witch-wallpaper.jpg",
    description:"Witch can call the skeletons attack with her..",
    damage:"70",
    hitpoint:"300",
    speed:"12",
    link:"https://clashofclans.fandom.com/wiki/Witch",
    color: "#4f07ba"
},
}

// chart section
var labels = []
var damageData = []
var hitpointData = []
var speedData = []
var backgroundColors = []
for (character in data) {
  labels.push(data[character].name)
  damageData.push(data[character].damage)
  hitpointData.push(data[character].hitpoint)
  speedData.push(data[character].speed)
  backgroundColors.push(data[character].color)
}

var ctx = document.getElementById("damageChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Damge',
            data: damageData,
            backgroundColor: backgroundColors
        }]
    },
    options:{
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            min: 0,
          }
        }]
      }
    }
});
ctx = document.getElementById("hitpointChart");
myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'hitpoint',
            data: hitpointData,
            backgroundColor: backgroundColors
        }]
    },
    options:{
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            min: 0,
          }
        }]
      }
    }
});
ctx = document.getElementById("speedChart");
myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: labels,
      datasets: [{
          label: 'Speed',
          data: speedData,
          backgroundColor: backgroundColors
      }]
  },
  options:{
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true,
          min: 0,
        }
      }]
    }
  }
});

// card section
var container = document.getElementById("container");
var card = document.getElementById("template");
var cln;

while (container.childElementCount < Object.keys(data).length) {
  cln = card.cloneNode(true);
  container.appendChild(cln)
}

var changeCard = (item, image, name, description, link) => {
  item.firstElementChild.firstElementChild.src = image
  item.firstElementChild.lastElementChild.firstElementChild.textContent = name
  item.firstElementChild.lastElementChild.children[1].textContent = description
  item.firstElementChild.lastElementChild.lastElementChild.href = link
}

var element = container.firstElementChild
for (character in data) {
  changeCard(element, data[character].image, data[character].name, data[character].description, data[character].link)
  element = element.nextElementSibling
}
