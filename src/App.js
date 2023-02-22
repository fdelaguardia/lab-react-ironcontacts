import './App.css';
import { useState } from 'react';
import contacts from './contacts.json'


function App() {

  const [shownContacts, setShownContacts] = useState(contacts.slice(0,5))

  const addRandom = () => {
    let remainingContacts = contacts.filter((contact) => {
      return !shownContacts.some((remainingContact) => remainingContact.id === contact.id) 
    })
    let newContacts = [...shownContacts]
    newContacts.push(remainingContacts[Math.floor(Math.random() * remainingContacts.length)])
    setShownContacts(newContacts)
  }

  const sortPopularity = () => {
    let rankByPop = [...shownContacts].sort((a, b) => {
      return b.popularity - a.popularity
    })
    
    setShownContacts(rankByPop)
  }

  const sortName = () => {
    let rankByName = [...shownContacts].sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    
    setShownContacts(rankByName)
  }

  const deleteContact = (id) => {
    const updatedContacts = shownContacts.filter((contact) => {
      return contact.id !== id
    })
    setShownContacts(updatedContacts)
  }

  return (
    <div className="App">

      <h1>IronContacts</h1>

      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>

      <table width="80%">

        <thead>
          <tr>
            <th><h2>Picture</h2></th>
            <th><h2>Name</h2></th>
            <th><h2>Popularity</h2></th>
            <th><h2>Won Oscar</h2></th>
            <th><h2>Won Emmy</h2></th>
            <th><h2>Actions</h2></th>
          </tr>
        </thead>

        <tbody>

          {
            shownContacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt="contact" width="100px" ></img></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>{contact.wonOscar && <h2>🏆</h2>}</td>
                  <td>{contact.wonEmmy  && <h2>🏆</h2>}</td>
                  <td><button onClick={() => deleteContact(contact.id)} >Delete</button></td>
                </tr>

              )
            })
          }

          

        </tbody>

      </table>
      
    </div>
  );
}

export default App;