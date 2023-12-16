const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];
const dummyArray = [
  { name: "Alice", age: 28, profession: "Designer" },
  { name: "Charlie", age: 40, profession: "Manager" }
];
// 1. Print Developers
function printDeveloper() {
  data.forEach(function (developer)
  {
  let dev = developer.name;
  console.log(dev);
  });
}
printDeveloper();
// 2. Add Data
function addData() {
  const experience = "experinece";
  const Experience = "Experience";
  const exp = prompt("Enter no. of yrs of experience");
  const Exp = prompt("Enter no. fo yrs of expereince");
  data[0][experience] = exp;
  data[1][Experience] = Exp;
  console.log(data);
}
addData();
// 3. Remove Admins
// 3. Remove Admins
function removeAdmin() {
  const newData = data.map(person => {
    if (person.profession === "admin") {
      const { profession, ...rest } = person;
      return { ...rest };
    }
    return person;
  });
  console.log(newData);
}
removeAdmin();
// 4. Concatenate Array
function concatenateArray() {
  const concArr = [...data, ...dummyArray];
  console.log(concArr);
}
concatenateArray();
// 5. Average Age
function averageAge() {
  let count = 0;
  let sum = 0;
  data.forEach(function (item)
  {
    sum += item.age;
    count++;
  })
  const avg = count > 0 ? sum/count : 0;
  console.log("Average age is:" + avg);
}
averageAge();
// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(person => person.age>25);
  console.log(isAbove25);
}
averageAge();

// 7. Unique Professions
function uniqueProfessions() {
  data.forEach(function (prof)
  {
    const profession = prof.profession;
  console.log("profession:" + profession);
  })
}
uniqueProfessions();
// 8. Sort by Age
function sortByAge() {
  data.sort((a,b) => a.age -b.age);
    console.log(data);
}
sortByAge();
// 9. Update Profession
 // 9. Update Profession
function updateJohnsProfession() {
  const updatedData = data.map(person => {
    if (person.name === "john") {
      return { ...person, profession: "manager" };
    }
    return person;
  });

  console.log(updatedData);
}
updateJohnsProfession();

// 10. Profession Count
function getTotalProfessions() {
  let devCount =0;
  let admCount = 0;
  data.forEach(function (prof)
  {
    if(prof.profession==="developer")
    {
      devCount++;
    }
    else if(prof.profession==="admin")
    {
      admCount++;
    }
  });
  const total = admCount + devCount;
  console.log(total);
}
