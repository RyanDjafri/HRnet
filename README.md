# HRnet

WealthHealth, une société financière, utilise une application web interne appelée HRnet pour gérer les dossiers des employés. L'application actuelle utilise jQuery pour son frontend, causant des bugs importants et des problèmes de performance. La société a décidé de mettre à niveau HRnet en le convertissant en React.

## Tâches

1. **Conversion complète du projet en React**
   - Créer de nouvelles versions des pages "Créer un employé" et "Liste des employés".
   - Mettre en place une gestion d'état.
   - Maintenir ou moderniser le design.
   - Éventuellement, écrire des tests unitaires.

2. **Conversion des plugins jQuery en composants React**
   - Choisir un des plugins suivants à convertir :
     - Sélecteur de date
     - Fenêtre modale (jQuery.modal.js)
     - Menus déroulants
     - Tables de données
   - Se concentrer uniquement sur la fonctionnalité UI.

3. **Tests de performance**
   - Réaliser des audits Lighthouse pour les applications actuelle et convertie.
   - Faire un build de l'application avant les tests de performance.

## Détails de l'implémentation

- **Programmation fonctionnelle** : Éviter l'utilisation de classes; écrire du code modulaire et maintenable.
- **Documentation** : Fournir un README et des commentaires pour chaque composant React.
- **Rapports de performance** : Les inclure dans les livrables.

## Installation

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/RyanDjafri/HRnet.git

2. ```bash
    npm install

3. ```
    npm start

# Code

## Router

Le système de routage est géré par React Router. Voici un extrait de configuration :

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create-employee" component={CreateEmployee} />
        <Route path="/employee-list" component={EmployeeList} />
      </Switch>
    </Router>
  );
}

export default App;
```

Datatable :
Le composant Datatable remplace le plugin jQuery pour les tables de données.

```jsx
import React from 'react';

function Datatable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.position}</td>
            <td>{item.office}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Datatable;
```

DateTimePicker :
Le composant DateTimePicker remplace le plugin jQuery pour les sélecteurs de date.

```jsx
import React, { useState } from 'react';

function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <input
      type="date"
      value={selectedDate.toISOString().substring(0, 10)}
      onChange={(e) => handleDateChange(new Date(e.target.value))}
    />
  );
}

export default DateTimePicker;
```

Modal :
Le composant Modal remplace jQuery.modal.js.

```jsx
import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
