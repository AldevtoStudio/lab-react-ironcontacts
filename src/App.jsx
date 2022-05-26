import './App.css';
import producerContacts from './contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(producerContacts.slice(0, 5));

  const handleAddRandom = () => {
    if (contacts.length === producerContacts.length) return;

    setContacts([
      ...contacts,
      producerContacts[Math.floor(Math.random() * producerContacts.length)]
    ]);
  };

  const handleSortByPopularity = () => {
    setContacts([...contacts].sort((a, b) => b.popularity - a.popularity));
  };

  const handleSortByName = () => {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleContactRemoval = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className='App'>
      <h1>IronContacts</h1>

      <div className='buttons'>
        <button onClick={handleAddRandom}>Add Random Contact</button>
        <button onClick={handleSortByPopularity}>Sort By Popularity</button>
        <button onClick={handleSortByName}>Sort By Name</button>
      </div>

      <table>
        <thead>
          <tr>
            <td>
              <h2>Picture</h2>
            </td>
            <td>
              <h2 className='sortBtn' onClick={handleSortByName}>
                Name
              </h2>
            </td>
            <td>
              <h2 className='sortBtn' onClick={handleSortByPopularity}>
                Popularity
              </h2>
            </td>
            <td>
              <h2>
                Won <br /> Oscar
              </h2>
            </td>
            <td>
              <h2>
                Won <br /> Emmy
              </h2>
            </td>
            <td>
              <h2>Actions</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{Math.round((contact.popularity + Number.EPSILON) * 100) / 100}</td>
                <td>{contact.wonOscar && '🏆'}</td>
                <td>{contact.wonEmmy && '🏆'}</td>
                <td>
                  <button onClick={() => handleContactRemoval(contact.id)}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
