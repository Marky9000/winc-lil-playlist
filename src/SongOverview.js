import React from 'react'
// import SongForm from './components/SongForm'
import SongList from './SongList'


class SongOverview extends React.Component {
  
  constructor() {
    super()
    this.state =
    {
      songs: [{
     id:'',
        artist: 'Artist:',
        track: 'Song:',
        genre: 'Genre:',
        rating: 'Rating:'
      }

      ],

      
    }

    this.addSong = this.addSong.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleArtist = this.handleArtist.bind(this)
    this.handleTrack= this.handleTrack.bind(this)
    this.deleteItem = this.deleteItem(this)

  }
  
addSong(e) {
    e.preventDefault();

    const newSongs = this.state
    if (newSongs.artist !== '') {
      const songs = [...this.state.songs, newSongs]
      this.setState({
        songs: songs,
          artist: '',
          track:'',
          genre: '',
          rating: ''
      })
    }
}

handleChange(e) {
    e.preventDefault();
      this.setState({
          [e.target.name]: e.target.value  
      })
}
  
handleArtist(e) {
      e.preventDefault();
        this.setState({
          artist: e.target.value,
          id:Date.now() 
        })
      console.log(this.state)
}

handleTrack(e) {
    e.preventDefault();
    this.setState({
      track: e.target.value, 
    }) 
}
     
deleteItem(key) {
       const filteredSongs = this.state.songs.filter(item => item.key !== key);
         this.setState({
           songs: filteredSongs
         })                
}

  
emptyList = () => {
       const emptyList = [{
                id:'',
                artist: 'Artist',
                track: 'Song',
                genre: 'Genre',
                rating: 'Rating'
              }]
          this.setState({
                songs: emptyList,
                   })
    return
    
  }

render() {
      
      return (
        <div className="totalDiv">
      
          <form onSubmit={this.addSong} >
                <input type="text" name="artist" value={this.state.artist}
                  onChange={this.handleArtist}
                  placeholder="type artist name" className="formLayer">
                  
                        </input>
                <input type="text" name="track" value={this.state.track}
                  onChange={this.handleTrack}
                  placeholder="type track name" className="formLayer">
                  
                        </input>
                <label>genre:</label>
                      <select name="genre" onChange={this.handleChange}
                        value={this.state.genre} className="formLayer">
                              <option value="---">?</option>
                              <option value="Jazz">Jazz</option>
                              <option value="Electro">Electro</option>
                              <option value="Grunge">Grunge</option> 
                              <option value="Classic">Klassiek</option>
                              <option value="Funky">Funk</option>
                              <option value="Ambient">Ambient</option>
                              <option value="Hip-Hop">Hip-Hop</option>
                              <option value="Lo-Fi">Lo-Fi</option>
                      </select>
                <label>rating: </label>
                      <select name="rating" onChange={this.handleChange}
                        value={this.state.rating} className="formLayer">
                              <option value="?">?</option>
                              <option value="Awesome"> 1 </option>
                              <option value="Unreal"> 2 </option>
                              <option value="Excellent"> 3 </option>
                              <option value="Crazy"> 4 </option>
                              <option value="Unbelievable"> 5 </option>
                              <option value="Out of this wolrd"> 6 </option>
                              <option value="Irresponsible"> 7 </option>
                              <option value="Sick"> 8 </option>
                      </select>
                
                <button type="submit" >Add to list</button>
                    
          </form>     
    <ul>
            < SongList songs={this.state.songs}
              deleteItem={this.deleteItem}
              addSong={this.addSong}/>
     
    </ul>
          <button onClick={this.emptyList}>
        Empty list?
      </button>
             
              </div>)}
           
    
  } 
  
  export default SongOverview;