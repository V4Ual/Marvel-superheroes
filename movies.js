var t1 = document.getElementById('ttx');
var btn = document.getElementById('button');
var n1 = document.getElementById('changeName');





const alertgenerate = async() => {
    try {
        //this code write for given html for json content

        // const setheaders = {
        //     headers: {
        //         Accept: "application/json"
        //     }
        // }

        const res = await fetch('https://www.superheroapi.com/api.php/302887488699115/search/' + t1.value)
        const data = await res.json();
        const name = data.results[0].name;
        const url = data.results[0].image.url;

        // ***************powerstart*****************************


        let intelligence = data.results[0].powerstats.intelligence;
        const strength = data.results[0].powerstats.strength;
        const speed = data.results[0].powerstats.speed;
        const durability = data.results[0].powerstats.durability;
        const power = data.results[0].powerstats.power;
        const combat = data.results[0].powerstats.combat;

        // ******************biography********************

        const fullname = data.results[0].biography['full-name'];
        const alteregos = data.results[0].biography['alter-egos'];
        const aliases = data.results[0].biography.aliases;
        const placeofbirth = data.results[0].biography['place-of-birth'];
        const firstappearnace = data.results[0].biography['first-appearance'];
        const publisher = data.results[0].biography.publisher;
        const alignment = data.results[0].biography.alignment;

        // **********************appearance****************************
        const gender = data.results[0].appearance.gender;
        const race = data.results[0].appearance.race;
        const height = data.results[0].appearance.height;
        const weight = data.results[0].appearance.weight;
        const eyes = data.results[0].appearance['eye-color'];
        const hair = data.results[0].appearance['hair-color'];


        // **************************work********************************
        const occupation = data.results[0].work.occupation;
        const base = data.results[0].work.base;

        // **************************work fatching***********************

        document.querySelector('.occupation').innerHTML = occupation;
        document.querySelector('.base').innerHTML = base;


        //  **************************group ***************************

        const group = data.results[0].connections["group-affiliation"];
        const relatives = data.results[0].connections.relatives;

        // ******************************group fatching ****************************

        document.querySelector('.group').innerHTML = group;
        document.querySelector('.relatives').innerHTML = relatives;

        // *************************appearance fatching************************

        document.querySelector('.gender').innerHTML = gender;
        document.querySelector('.human').innerHTML = race;
        document.querySelector('.height').innerHTML = height;
        document.querySelector('.Weight').innerHTML = weight;
        document.querySelector('.eyes').innerHTML = eyes;
        document.querySelector('.work').innerHTML = hair;







        // ***************************biography faching*******************************


        console.log(intelligence);
        console.log(fullname);
        document.querySelector('.full_name').innerHTML = fullname;
        document.querySelector('.alter_egos').innerHTML = alteregos;
        document.querySelector('.aliases').innerHTML = aliases;
        document.querySelector('.Place_of_birth').innerHTML = placeofbirth;
        document.querySelector('.First_Appearance').innerHTML = firstappearnace;
        document.querySelector('.Publisher').innerHTML = publisher;
        document.querySelector('.Alignment').innerHTML = alignment;


        n1.innerHTML = name;

        document.querySelector('img').src = url;

        // *************************power data fatch**************************

        document.querySelector('.Intelligence').style.width = `${intelligence}%`;
        document.querySelector('.Intelligence').innerHTML = `${intelligence}%`;

        document.querySelector('.Strength').style.width = `${strength}%`;
        document.querySelector('.Strength').innerHTML = `${strength}%`;

        document.querySelector('.Speed').style.width = `${speed}%`;
        document.querySelector('.Speed').innerHTML = `${speed}%`;

        document.querySelector('.Durability').style.width = `${durability}%`;
        document.querySelector('.Durability').innerHTML = `${durability}%`;

        document.querySelector('.Power').style.width = `${power}%`;
        document.querySelector('.Power').innerHTML = `${power}%`;

        document.querySelector('.Combat').style.width = `${combat}%`;
        document.querySelector('.Combat').innerHTML = `${combat}%`;


        // ******************************biography*************************





















    } catch (err) {
        console.log(`the error id ${err}`);

    }

}
btn.addEventListener('click', alertgenerate);
alertgenerate();