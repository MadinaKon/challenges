const cohort = {
  cohortName: "honey",
  amountOfStudent: 12,
  teachers: [{ name: "Gimena" }, { name: "Marcel" }],
};

try {
  const jsonObj = JSON.stringify(cohort, null, 2);
  console.log(jsonObj, typeof jsonObj);

  const backToJS = JSON.parse(jsonObj);
  console.log(backToJS);
} catch (e) {
  console.log(e);
}
console.log("HELLO");
