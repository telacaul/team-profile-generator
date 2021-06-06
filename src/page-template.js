const createProfile = profile => {
    // Manager profile section
    const managerSection = manager => {
      return `
      <div class="col-12 mb-2 bg-dark text-light p-3">
          <h3 class="portfolio-item-title text-light">${manager.getName()}</h3>
          <h5 class="portfolio-languages">
              Job Title:
              ${manager.getRole()}
          </h5>
          <p> ID: ${manager.getID()}</p>
          <p> Email: ${manager.getEmail()}</p>
          <p> Office Number: ${manager.getPhoneNumber()}</p>
      </div>
    `;
  };
  
  
 // Engineer profile section
 const engineerSection = engineer => {
    return `
    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
        <h3 class="portfolio-item-title text-light">${engineer.getName()}</h3>
        <h5 class="portfolio-languages">
            Job Title:
            ${engineer.getRole()}
        </h5>
        <p> ID: ${engineer.getID()}</p>
        <p> Email: ${engineer.getEmail()}</p>
        <a href="#" class="btn mt-auto"><i class="fab fa-github mr-2"></i>${engineer.getGitHub()}</a>
    </div>
    `;
 };
  
 // Intern profile section
 const internSection = intern => {
    return `
    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
        <h3 class="portfolio-item-title text-light">${intern.getName()}</h3>
        <h5 class="portfolio-languages">
            Job Title:
            ${intern.getRole()}
        </h5>
        <p> ID: ${intern.getID()}</p>
        <p> Email: ${intern.getEmail()}</p>
        <p> School: ${intern.getSchool()}</p>
    </div>
    `;
 };
  
 const htmlPage = [];
  
 htmlPage.push(profile
    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => managerSection(manager))
 );
  
 htmlPage.push(profile
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => engineerSection(engineer))
    .join('')
 );
  
 htmlPage.push(profile
    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => internSection(intern))
    .join('')
 );
  
 return htmlPage.join('');

};
  
// Export to HTML page
  
module.exports = profile => {
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Portfolio Demo</title>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
     <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
     <link rel="stylesheet" href="../src/css/style.css">
    </head>
    
    <body>
        <header>
          <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">Meet the team!</h1>
            <nav class="flex-row">
              <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="#">GitHub</a>
            </nav>
          </div>
        </header>
        <main class="container my-5">
          <section class="my-3" id="portfolio">
              <h2 class="text-dark bg-primary p-2 display-inline-block">Introducing..</h2>
              <div class="flex-row justify-space-between">
                  ${createProfile(profile)}
              </div>
          </section>
        </main>
        <footer class="container text-center py-3">
          <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Tela Caul</h3>
        </footer>
    </body>
    </html>
    `;
};
  
//module.exports = generatePage;