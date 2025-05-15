import React from 'react';
import '../pages/home.css' ;
import Abdessamad  from '../assets/membres/Abdessamad.png';
import Aymen from '../assets/membres/Aymen.png';
import Bouga from '../assets/membres/Bouga.png';
import Soufiane from '../assets/membres/Soufiane.png';
import Nouhaila from '../assets/membres/Nouhaila.png';
import Myriem from '../assets/membres/Myriem.png';
import Aziza from '../assets/membres/Aziza.png';
import Sanaa from '../assets/membres/Sanaa.png';
import salma from '../assets/membres/salma.png';
import walid from '../assets/membres/walid.png';
import AYMAN from '../assets/membres/AYMAN.png';
import Latifa from '../assets/membres/Latifa.png';
import mounir from '../assets/membres/mounir.png';
import Boutaina from '../assets/membres/Boutaina.png';
import ilyas from '../assets/membres/ilyas.png';
import pichome from   '../assets/pichome2.jpg';
const members = [
  {
    photo : Bouga,
    position: "Présidente",
    name: "BOUGA BOUCHRA",
    email: "bouga.bouchra@gmail.com"
  
  },
  {
    photo : Abdessamad,
    position: "Vice-président",
    name: "Abdessamad Morad",
    email: "abdessamad.morad01@gmail.com"

  },
  {
    photo : Soufiane,
    position: "Trésorier",
    name: "Soufiane Arybou",
    email: "soufianearybou@gmail.com"
  },
  {
    photo : Nouhaila,
    position: "Secrétaire générale",
    name: "Nouhaila Khachtaoui",
    email: "nouhailakhachtaoui5@gmail.com"
  },
  {
    photo : Myriem,
    position: "Responsable de communication",
    name: "Myriem BENHADDOU",
    email: "benhaddoumyriem1@gmail.com"
  },
  {
    photo : Aziza , 
    position: "Responsable matériel",
    name: "Aziza NASYF",
    email: "azizanasyf6@gmail.com"
  },
  {
    photo : Sanaa ,
    position: "Cellule des événements",
    name: "Hartal Sanaa",
    email: "hartalsanaa@gmail.com"
  },
  {
    photo : salma ,
    position: "Designer",
    name: "El Haouzi Salma",
    email: "salma123elhaouzi@gmail.com"
  },
  {
    photo : walid ,
    position: "Responsable RSE",
    name: "Walid Rachid",
    email: "rachidwalid427@gmail.com"
  },
  {
    photo : AYMAN,
    position: "Membre",
    name: "EL HANSALI AYMAN",
    email: "aymanhansali2004@gmail.com"
  },
  {
    photo : Latifa,
    position: "Membre",
    name: "Moujahid Latifa",
    email: "latifamoujahud@gmail.com"
  },

  {
    photo : Aymen,
    position: "Membre",
    name: "Aymen Abid",
    email: "aymenabid084@gmail.com"
  },
  
  {
    photo : mounir ,
    position: "Membre",
    name: "Mounir BOUGUI",
    email: "bouguimounir875@gmail.com"
  },
  {
    photo : Boutaina ,
    position: "Membre",
    name: "Boutaina Soultana",
    email: "boutaina2002maroc@gmail.com"
  },
  {
    photo: ilyas ,
    position: "Membre",
    name: "Nait Ilyas",
    email: "naitkhermacheilyas@gmail.com"
  },
];

function Home() {
  return (
<><div className="homesec">
    <div className="homecont">
    <p className="theparag">Construisons le futur, un robot à la fois</p>
    <div> 
          <img src={require('../assets/pichome2.jpg')} alt="Robot Futuriste" className="pichome"/>
      </div>
      <h1>Club CRIOT</h1>
      <div className="clubpres">
        <p>
        Le <strong>Club de Robotique et IoT (CRIOT)</strong> de la Faculté des Sciences Ben M'Sik – Université Hassan II est un espace innovant qui rassemble des étudiants passionnés par la robotique, l’électronique, et les objets connectés. Notre mission est de concevoir, construire et expérimenter des projets technologiques concrets tout en renforçant l’esprit d’équipe, la créativité et la compétence technique. À travers des ateliers, des compétitions et des événements collaboratifs, nous œuvrons à bâtir un avenir où l’innovation technologique est à la portée de tous.
        </p>
      </div>
      
      
      
    </div>
  </div>




    
    <div className="home-container">
    <h2 className="home-title">Membres Principaux du Club CRIOT</h2>
    <div className="members-grid">
      {members.map((member, index) => (
        <div key={index} className="member-card">
          <img src={member.photo} alt={member.name} />
          <h3>{member.name}</h3>
          <p><strong>{member.position}</strong></p>
          <p>{member.email}</p>
        </div>
      ))}
    </div>
  </div>
</>
  
  );
}



export default Home;
