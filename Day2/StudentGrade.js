const mark = 50;

function studentGrade(mark) 
{
  switch (true) 
  {
    case mark > 90 && mark <= 100:
      return "A";
      break;
    case mark >= 80 && mark < 90:
      return "B";
      break;
    case mark >= 70 && mark < 80:
      return "C";
      break;
    case mark >= 60 && mark < 70:
      return "D";
      break;
    case mark <= 50  && mark >= 0:
      return "F";
      break;
    default:
      return "Invalid mark";
  }
}

console.log(studentGrade(mark));