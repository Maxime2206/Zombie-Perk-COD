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
    {
      id: 3,
      name: 'Quick Revive',
      description: 'Faster reviving and self-revive.',
      image: 'images/revive.jpeg'
    },
    {
      id: 4,
      name: 'Deadshot Daiquiri',
      description: 'Increases aim assist and headshot damage.',
      image: 'images/deadshot.jpeg'
    },
    {
      id: 5,
      name: 'Tombstone Soda',
      description: 'Upon death, gain the ability to retrieve your weapons and perks.',
      image: 'images/tombstone.jpeg'
    },
    {
      id: 6,
      name: 'Stamin-Up',
      description: 'Increases player sprint speed by 7.5% and stamina.',
      image: 'images/stamina.jpeg'
    },
    {
      id: 7,
      name: 'Mule Kick',
      description: 'Allows players to carry a third weapon.',
      image: 'images/mule.jpeg'
    },
    {
      id: 8,
      name: 'Elemental Pop',
      description: 'Causes bullets to have random elemental effects.',
      image: 'images/pop.jpeg'
    },
    {
      id: 9,
      name: 'PHD Flopper',
      description: 'immune to self-dealt damage.',
      image: 'images/PHD.jpeg'
      },
  ];

  // Rajoutez d'autre atout ici pour les autres modes zombies //

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
