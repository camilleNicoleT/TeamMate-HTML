// create the about section
const managerCard = function(manager){
 
  return `  <div class ="col-3 mt-3">
  <div class ='card'>
    <h2 class ='card-header'>${manager.name}</h2>
    <h3>Manager</h3>
  </div>
  <div class="card-body">
      <p class = "id"> ID:${manager.id} </p>
      <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
      <p class="github">Office Number:${manager.officeNumber}</p>
  </div>
  `;
};
const engineerCard = function(engineer){
 
  return ` 
   <div class ="col-3 mt-3">
  <div class ='card'>
    <h2 class ='card-header'>${engineer.name}</h2>
    <h3>Engineer</h3>
  </div>
  <div class="card-body">
      <p class = "id"> ID:${engineer.id} </p>
      <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
      <p class="github">GitHub: <a href= "https://github.com/${engineer.github}">${engineer.github}</p>
  </div>
  `;
};
const internCard = function(intern){
 
  return `  <div class ="col-3 mt-3">
  <div class ='card'>
    <h2 class ='card-header'>${intern.name}</h2>
    <h3>Engineer</h3>
  </div>
  <div class="card-body">
      <p class = "id"> ID:${intern.id} </p>
      <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
      <p class="github">School: ${intern.school}</p>
  </div>
  `;
};

createTeam = (input) => {
  employeeArray = [];

  const data = input[i];
  const role = data.getRole();

  if (role === 'Manager') {
    const Manager = managerCard(data);
    employeeArray.push(Manager);
  }
  if (role === 'Engineer') {
    const Engineer = engineerCard(data);
    employeeArray.push(Engineer);
  }
  if (role === 'Intern') {
    const Intern = internCard(data);
    employeeArray.push(Intern);
  }

  //join team
  const teamCards = employeeArray.join('');

  const createHTML = generatePage(teamCards);
  return createHTML;
}

/// create the page
const generatePage = (teamCards) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
 </head>
  <body>
      <header>
          <H1 class="page-title">My Team</H1>
      </header>
      <Main>
          <div class ='container'>
              <div class="row justify-content-center" id="cards">
            ${teamCards}
                  </div>
          </div>
      </Main>
  </body>
  </html>
  `;
};

module.exports= generatePage;