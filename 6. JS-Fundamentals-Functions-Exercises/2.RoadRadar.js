function roadRadar([speed,zone]) {
    speed = Number(speed);
    let limit = function getLimit() {
          switch (zone){
               case "residential": return 20;
               case "city": return 50;
               case "interstate": return 90;
               case "motorway": return 130;
           }
      };
       let overspeed = speed - limit();
      if(overspeed <= 0){

      }else if(overspeed <= 20){
          console.log("speeding");
      }else if(overspeed <= 40){
          console.log("excessive speeding")
      }else if(overspeed > 40){
          console.log("reckless driving");
      }

}

roadRadar([21, "residential"]);

//alternative solution
function roadRadar1([speed, zone]) {
    let dictionary = {"residential": 20,"city": 50, "interstate": 90, "motorway": 130};
    if (dictionary[zone] != undefined){
        if(dictionary[zone]<speed){
            let difference=speed-dictionary[zone];
            if(difference>0 && difference<=20){
                console.log("speeding")
            }
            if(difference>20 && difference<=40){
                console.log("excessive speeding");
            }
            else if(difference>40){
                console.log("reckless driving");
            }
        }
    }
}
roadRadar1([120, "interstate"]);