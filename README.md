# Version Français

# Zombies Perks - Call of Duty

## Description

Bienvenue sur le projet **Zombies Perks**, une application web interactive construite avec **React** permettant d'afficher une liste d'atouts (perks) du mode Zombies dans **Call of Duty**. L'application permet aux joueurs de découvrir et explorer les atouts du jeu de manière simple, intuitive et responsive.

Chaque atout est présenté avec :
- **Son nom**
- **Une brève description**
- **Une image représentative**

## Fonctionnalités principales

✨ **Affichage des atouts** : Liste des atouts avec images et descriptions.  
🌐 **Interface claire et responsive** : Conçue pour offrir une expérience utilisateur fluide sur tous les appareils (mobile, tablette, desktop).  
📦 **Pas de backend** : Toutes les données sont stockées en local dans l'application, sans nécessité de serveur externe.

## Technologies utilisées

- **React** : Framework JavaScript pour construire l'interface utilisateur.
- **CSS** : Pour styliser l'application avec un design moderne et épuré.
- **JavaScript (ES6+)** : Utilisation des fonctionnalités modernes d'ES6+ pour une gestion efficace du code.

## Installation

### Prérequis

- **Node.js** : Assurez-vous d'avoir installé **Node.js** sur votre machine (version 12.x ou supérieure).

### Étapes d'installation

1. Clonez ce repository sur votre machine locale.
   ```bash
   git clone https://github.com/votre-utilisateur/zombies-perks.git
```

### Code

import React from 'react';

const PerkList = () => {
  const perks = [
    {
      id: 1,
      name: 'Jugger-Nog',
      description: 'Increases max health by 50%.',
      image: '/images/jugger.jpeg'
      },      
    {
      id: 2,
      name: 'Speed Cola',
      description: 'Increases reload speed by 50%.',
      image: 'images/speed.jpeg'
    },

    // rajoutez autant d'atout que vous voulez (tant qu'ils existes bien sur) //

    // et Finir par cette partie du code dans src/components/PerkList.js //

        return (
    <div>
      <h2>Liste des Atout du Mode Zombie de Call Of Duty</h2>
      <ul>
        {perks.map((perk) => (
          <li key={perk.id} style={{ marginBottom: '20px' }}>
            <img
              src={perk.image}
              alt={perk.name}
              style={{ width: '150px', height: '150px', marginRight: '10px' }}
            />
            <strong>{perk.name}</strong>: {perk.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerkList;

```

# English Version

# Zombies Perks - Call of Duty

## Description

Welcome to the **Zombies Perks** project, an interactive web application built with **React** that displays a list of perks from the **Zombies mode** in **Call of Duty**. The app allows players to discover and explore the game's perks in a simple, intuitive, and responsive way.

Each perk is presented with:
- **Its name**
- **A brief description**
- **A representative image**

## Key Features

✨ **Perk Display**: A list of perks with images and descriptions.  
🌐 **Clear and Responsive Interface**: Designed to offer a smooth user experience on all devices (mobile, tablet, desktop).  
📦 **No Backend**: All data is stored locally in the app, no external server required.

## Technologies Used

- **React**: JavaScript framework to build the user interface.
- **CSS**: To style the app with a modern and clean design.
- **JavaScript (ES6+)**: Leveraging modern ES6+ features for efficient code management.

## Installation

### Prerequisites

- **Node.js**: Make sure **Node.js** is installed on your machine (version 12.x or higher).

### Installation Steps

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/your-username/zombies-perks.git
```

### Code

import React from 'react';

const PerkList = () => {
  const perks = [
    {
      id: 1,
      name: 'Jugger-Nog',
      description: 'Increases max health by 50%.',
      image: '/images/jugger.jpeg'
      },      
    {
      id: 2,
      name: 'Speed Cola',
      description: 'Increases reload speed by 50%.',
      image: 'images/speed.jpeg'
    },

    // add as many assets as you want (as long as they exist of course) // 

    // and Finish with this part of the code in src/components/PerkList.js //

    return (
    <div>
      <h2>Liste des Atout du Mode Zombie de Call Of Duty</h2>
      <ul>
        {perks.map((perk) => (
          <li key={perk.id} style={{ marginBottom: '20px' }}>
            <img
              src={perk.image}
              alt={perk.name}
              style={{ width: '150px', height: '150px', marginRight: '10px' }}
            />
            <strong>{perk.name}</strong>: {perk.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerkList;