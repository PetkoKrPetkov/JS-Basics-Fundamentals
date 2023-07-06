function companyUsers(input) {

    let companies = {};

    input.forEach(pair => { 
        let [companyName, id] = pair.split(" -> ");
        if(!companies.hasOwnProperty(companyName)) {
            companies[companyName] = [];
        }
        companies[companyName].push(id); 
    });

    let sortedCompaniesArr = Object.entries(companies).sort((a,b)=>a[0].localeCompare(b[0]));

    for (const company of sortedCompaniesArr) {
        let [companyName, arrOfIds] = company
        console.log(companyName);
        let setOfIds = new Set(arrOfIds)
        for (const id of setOfIds) {
            console.log(`-- ${id}`);
            
        }
        
    }

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']
    )