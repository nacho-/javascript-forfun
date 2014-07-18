1
2
3
4
5
6
// selecting a random array item
var selectName = ["Javier", "Pedro", "Luis", "Eugenio",  "Jaime"];
var firstNameGen = function () {
var selectedName = selectName[Math.floor(Math.random() * selectName.length)];
return selectedName;
};


var selectLastName = ["Alonso", "Pérez", "Martinez", "Fernandez"];
var lastNameGen = function () {
var selectedLastName = selectLastName[Math.floor(Math.random() * selectLastName.length)];
return selectedLastName;
}

debug(firstNameGen()+ " " + lastNameGen())