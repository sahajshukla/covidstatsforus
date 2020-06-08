
const url = 'https://api.thevirustracker.com/free-api?global=stats';
const new_url = 'https://api.thevirustracker.com/free-api?countryTotals=ALL';
async function getcovd(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
     
    const total_cases = data.results[0].total_cases;
    const total_recovered = data.results[0].total_recovered;
    const total_unresolved = data.results[0].total_unresolved;
    const total_deaths = data.results[0].total_deaths;
    const total_new_cases = data.results[0].total_new_cases_today;
    const total_new_deaths = data.results[0].total_new_deaths_today;
    const total_serious_cases = data.results[0].total_serious_cases;
    const total_affected_countries = data.results[0].total_affected_countries;
    const total_active_cases = data.results[0].total_active_cases;

    console.log(total_cases);
    console.log(total_recovered);
    console.log(total_deaths);
    var table = document.getElementById('my_table');
    var row = `<tr>
                    <td>${total_affected_countries}</td>
                    <td>${total_cases}</td>
                    <td>${total_active_cases}</td>
                    <td>${total_deaths}</td>
                    <td>${total_new_cases}</td>
                    <td>${total_new_deaths}</td>
                    <td>${total_recovered }</td>
                    <td>${total_serious_cases}</td>
                </tr>`
    table.innerHTML+=row;
    
}

async function getstats2(){
    const response = await fetch(new_url);
    const new_data = await response.json();
    console.log(new_data);
    var table1 = document.getElementById('my_table1')
    var nv = new_data.countryitems[0][1].title;
    console.log(nv);
    for (var i =1; i < 194 ; i++){
        var row1 = `<tr>
                        <td>${new_data.countryitems[0][i].title}</td>
                        <td>${new_data.countryitems[0][i].total_cases}</td>
                        <td>${new_data.countryitems[0][i].total_active_cases}</td>
                        <td>${new_data.countryitems[0][i].total_deaths}</td>
                        <td>${new_data.countryitems[0][i].total_new_cases_today}</td>
                        <td>${new_data.countryitems[0][i].total_new_deaths_today}</td>
                        <td>${new_data.countryitems[0][i].total_recovered}</td>
                        <td>${new_data.countryitems[0][i].total_serious_cases}</td>
                   </tr>`
        table1.innerHTML+=row1;
    }
}

getcovd();
getstats2();