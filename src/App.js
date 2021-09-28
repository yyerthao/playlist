import './App.css';
import { React, Component} from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      songs: [
        { name: 'Dreaming of You', added: '2012-09-20' },
        { name: 'Baby Shark', added: '2016-09-09' },
        { name: 'Wheels on the Bus', added: '2020-05-05' }
      ]
    }
  }


    render() {
      return(
        <div className="App">
          <header>Playlist</header>
            <ul>
              {this.state.songs.map(song => 
                <li>{song.name}</li>
                )}
            </ul>
        </div>
      ) 
    }
}

export default App;
