//3
//Your teacher friend wants to make a quick app to sort
//his students by their grades
//(all of which are between 0 and 100, with at most 1 decimal pt).
//All of his colleagues love this idea, and they want to sort
//the students by grade,regardless of class
//-- but one of them thinks it'd be awesome to extend this across the nation.
//(You scoff at this idea, but whatever, you are pretty sure you can do this
//if they give you an array of {students:"name",grades:"val"},
//and only go through the array a few times to do it... no nested loops)

students = [];

for (var i = 0; i < 1000; ++i) {
  students.push({
    'students': 'student_' + i,
    'grades': Math.floor(Math.random()*100)
  });
}


result = students.sort(function (x, y) {
  if(x.grades < y.grades){
    return -1;
  }else if(x.grades > y.grades){
    return 1;
  }else{
     return 0
  }
});

console.log(result);
