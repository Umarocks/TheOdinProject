// const resumeData = {
//   generalInfo: {
//     id: 1,
//     fullName: "John Doe",
//     email: "john.doe@example.com",
//     phoneNum: "123-456-7890",
//     city: "Cityville",
//     province: "Provinceland",
//   },
//   educationInfo: [
//     {
//       id: 1,
//       degree: "Bachelor of Science in Computer Science",
//       school: "University XYZ",
//       city: "Cityville",
//       country: "Country ABC",
//       startDate: "2016-09-01",
//       endDate: "2020-05-31",
//     },
//     {
//       id: 2,
//       degree: "Master of Business Administration",
//       school: "Business School ABC",
//       city: "Citytown",
//       country: "Country XYZ",
//       startDate: "2020-09-01",
//       endDate: "2022-05-31",
//     },
//   ],
//   professionalExperience: [
//     {
//       id: 3,
//       jobTitle: "Software Engineer",
//       company: "Tech Solutions Inc.",
//       city: "Cityville",
//       startDate: "2020-06-01",
//       endDate: "2022-05-30",
//       description:
//         "Developed web applications and collaborated with cross-functional teams.",
//     },
//     {
//       id: 4,
//       jobTitle: "Project Manager",
//       company: "Project Management Co.",
//       city: "Citytown",
//       startDate: "2022-06-01",
//       endDate: null, // Indicates the current position
//       description: "Led project teams and managed project budgets.",
//     },
//   ],
// };

// const x = resumeData.educationInfo;
// console.log(x);
// x[0].id = 51612;
// const y = x.findIndex((obj) => obj.id === 2);
// console.log(y);
// console.log(x[y]);

console.log("exc1");
let item = { name: "john", years: 30 };
let { name, years, isAdmin = "False" } = item;
console.log(`name:${name},price:${years},quantity:${isAdmin}`);
