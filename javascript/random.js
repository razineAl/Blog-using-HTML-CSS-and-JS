let pageContent = document.getElementById('pageContent');
let pictInfo = document.getElementById('pictInfo');
let rawImages = '[{"filename":"berlin.jpg","author":"razine aliouche","name":"berlin","exposure":"120 iso - 11mn - f/22 - 302 sec"},{"filename":"Amazonie_couv-foret.jpg","author":"razine aliouche","name":"L\'amazonie dans toute sa splendeure ","exposure":"100 iso - 18mn - f/22 - 341 sec"},{"filename":"sunset.jpg","author":"razine aliouche","name":"coucher de soleil","exposure":"100 iso - 18mn - f/18 - 302 sec"},{"filename":"canberra_06.jpg","name":"Australie-canberra-","author":"razine aliouche","exposure":"100 iso - 18mn - f/22 - 302 sec"},{"filename":"capCarbon.jpg","name":"cap carbone","author":"razine aliouche","exposure":"100 iso - 18mn - f/22 - 156 sec"},{"filename":"mountains.png","name":"montagnes","author":"razine aliouche","exposure":"100 iso - 18mn - f/22 - 302 sec"},{"filename":"Niagara.jpg","name":"chutes du niagara","author":"razine aliouche","exposure":"60 iso - 18mn - f/26 - 50 sec"},{"filename":"manhattan.jpg","author":"razine aliouche","name":"new york city","exposure":"100 iso - 18mn - f/22 - 410 sec"},{"filename":"balloon.jpg","name":"balon","author":"razine aliouche","exposure":"100 iso - 18mn - f/22 - 302 sec"},{"filename":"fantasy.png","name":"dirigeable","author":"razine aliouche","exposure":"100 iso - 18mn - f/22 - 302 sec"}]';
let images = JSON.parse(rawImages);
let randomImage = images[Math.floor(Math.random()*images.length)];
pageContent.style.backgroundImage=`url(/images/${randomImage.filename})`;
if(pictInfo){
    while(pictInfo.firstChild){
        pictInfo.removeChild(pictInfo.firstChild);
    }
    let picTitle = document.createElement('h1');
    let picTitleContent = document.createTextNode(randomImage.name); 
    picTitle.appendChild(picTitleContent);
    pictInfo.appendChild(picTitle);
    
    let pa = document.createElement('p');
    let par = document.createTextNode(randomImage.author);
    pa.appendChild(par);
    pictInfo.appendChild(pa);
    
    let exp = document.createElement('p'); 
    let expo = document.createTextNode(randomImage.exposure);
    exp.appendChild(expo);
    pictInfo.appendChild(exp);
}
