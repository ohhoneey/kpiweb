async function download(){
    const image = document.getElementById('image');
    const cell = document.getElementById('cell');
    const city = document.getElementById('city');
    const postcode = document.getElementById('postcode');
    const email = document.getElementById('email');

    let url = 'https://randomuser.me/api/';
    let response = await fetch(url);

    let data = await response.json();

    let info = data.results[0].picture.medium;
    let photo = `<img src=${info}>`;
    image.innerHTML = photo;

    cell2 = data.results[0].cell;
    insert = '<p class = "options"><b>Cell: </b>' + cell2 + '</p>';
    cell.innerHTML = insert;

    city2 = data.results[0].location.city;
    insert = '<p class = "options"><b>City: </b>' + city2 + '</p>';
    city.innerHTML = insert;

    postcode2 = data.results[0].location.postcode;
    insert = '<p class = "options"><b>Postcode: </b>' + postcode2 + '</p>';
    postcode.innerHTML = insert;

    email2 = data.results[0].location.country;
    insert = '<p class = "options"><b>Country: </b>' + email2 + '</p>';
    email.innerHTML = insert;
}
