
var creatureArr;

var portalFunction = function (creatureArray, multiply, creatureName) {
    for( var i in creatureArray ){
        if( creatureArray[i].creature == creatureName ){
            creatureArray[i].x *= multiply;
            creatureArray[i].y *= multiply;
        }
    }
};

creatureArr = [{creature:"Morgran", x:100, y:100}, {creature:"Grubnor", x:50, y:50}]

portalFunction(creatureArr, -0.5, "Grubnor")
console.log(creatureArr);




