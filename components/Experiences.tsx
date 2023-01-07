import React from 'react';

const Experiences = () => {
  return (
    <div className='text-white flex flex-col'>
      <h2 className='text-6xl uppercase tracking-wider'>Experiences</h2>
      <div className='mt-4'>
        <h3 className='text-2xl'>Connect innov - Start up</h3>
        <span className='text-lg italic text-gray-300 capitalize'>
          Colombes, île-de-France, France
        </span>
        <ul className='ml-6 xl:list-disc'>
          <li>
            <h3 className='text-xl mt-4'>Full Stack Developer</h3>
            <span className='text-sm text-gray-300'>Oct. 2022 - En cours</span>
            <p>
              ---- Création du nouveau site TableKids avec NextJS - En cours
              <br />
              ---- Développement d&apos;une application sur Totem pour la
              Pharmacie Epitact avec React Native - En cours
            </p>
          </li>
          <li>
            <h3 className='text-xl mt-4 capitalize'>
              Technicien électronique & informatique
            </h3>
            <span className='text-sm text-gray-300'>
              Avr. 2022 - Oct. 2022 | 7mois
            </span>
            <p>
              ---- Paramétrage et mise en service de kiosque et totem (Android
              et Windows) <br />
              ---- Assemblage, paramétrage et mise en service de TableKids
              (Hardware et Software) <br />
              ---- Analyser les dysfonctionnements, déterminer les root causes
              et appliquer les correctifs adéquats (Hardware et Software) <br />
              ---- Support technique pour les clients <br />
              ---- Montage vidéo (Première Pro)
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
