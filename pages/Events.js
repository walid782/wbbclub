// src/pages/events.js
import React from 'react';
import  '../pages/events.css';
import pic1 from '../pages/events/pic1.jpeg';
import pic2 from '../pages/events/pic2.jpeg';
import pic3 from '../pages/events/pic3.jpeg';
import pic4 from '../pages/events/pic4.jpeg';
import pic5 from '../pages/events/pic5.jpeg';

function Events() {
  const events = [
    {
      name: "Formation Arduino - Partie 1",
      date: "2 Décembre 2023",
      description: "Dans le cadre d'une future compétition, nous avons consacré la première partie de la formation Arduino (Arduino UNO), réalisée par le président du club CRIOT. Cette session comprenait une introduction à cette carte et ses caractéristiques. Les participants ont appris beaucoup d'informations sur cette carte, ainsi que des notions sur la façon de la programmer avec le logiciel Tinkercad.",
      image: pic1 , 
    },
    {
      name: "Formation Arduino - Partie 2",
      date: "9 Décembre 2023",
      description: "La deuxième session de formation Arduino a permis aux participants de mettre en pratique les concepts théoriques avec des équipements réels, explorant les boucles, les conditions de programmation et la configuration de la carte Arduino. Le projet LED a été particulièrement éclairant.",
      image: pic2,
    },
    {
      name: "Lancement CRIOT-LAB",
      date: "9 Mars 2024",
      description: "Le club a organisé une journée consacrée à l'innovation et à la créativité avec la première édition de CRIOT-LAB. Au programme : une formation sur la gestion de projets, suivie d'un atelier de sélection d'idées innovantes pour de futurs projets du club.",
      image: pic3,
    },
    {
      name: "Journée sur l'Intelligence Artificielle",
      date: "20 Mars 2024",
      description: "Dans le cadre de la semaine de l'entrepreneuriat universitaire, le club a organisé une journée sur l'IA avec des formations et des ateliers pratiques. La présence du Doyen de la faculté et de professeurs a contribué à la réussite de l'événement.",
      image: pic4,
    },
    {
      name: "Robotique et IA au Collège Ettahadi",
      date: "25 Mai 2024",
      description: "Le club a organisé un atelier de robotique et IA au collège Ettahadi, où les collégiens ont eu l'opportunité de construire des robots, de les programmer et de découvrir leurs applications. Un événement marquant pour éveiller les vocations scientifiques et technologiques des jeunes.",
      image: pic5,
    },
  ];

  return (
    <div className="events-container">
    <h2 style={{ textAlign: 'center' }}>Événements à venir</h2>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {events.map((event, index) => (
        <li key={index} className="event-item">
          <img src={event.image} alt={event.name} />
          <div className="event-text">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p>{event.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default Events;
