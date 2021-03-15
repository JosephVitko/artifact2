import logo from './logo.svg';
import './App.css';
import Game from './TicTacToe'
import Dictionary from './Dictionary'
import WithListLoading from "./WithListLoading";
import {useEffect, useState} from "react";
import Nav from './Nav'
import Image from 'react-bootstrap/Image'

function App() {
  const ListLoading = WithListLoading(Dictionary)
  const [appState, setAppState] = useState({
    loading: false,
    entries: null,
  })

  useEffect(() => {
    setAppState({ loading: true })
    const apiUrl = 'https://josephvitko.herokuapp.com/api/engl1102/artifact2/get_data'
    fetch(apiUrl)
        .then((response) => {response.json()
            .then(data => {
                console.log(data)
              setAppState({ loading: false, entries: data['dictionary_entries']})
            })
        })
  }, [setAppState])
  return (
      <div className='App'>
          <Nav />
          <div className='splash-container1'>
              <div className="IFuOkc"
                   jsname="LQX2Vd"></div>
              <div className='splash-caption'>
                  <h1 className='splash-text fancy-font-big'>Dictionary of Culinary Terms</h1>
                  <span className='splash-subtitle'>Essential Words for Aspiring Cooks</span>
              </div>
          </div>
          <div className='second-section'>
              <div className='second-header'>
                  Essential Culinary Terminologies:
              </div>
              <div className='second-subtitle'>
                  This dictionary will help aspiring young chefs better understand recipes.
              </div>
          </div>

        <div className='container'>
            <div className='entry-container'>
            <ListLoading isLoading={appState.loading} entries={appState.entries}/>
            </div>
        </div>
      </div>
  );
}

export default App;
