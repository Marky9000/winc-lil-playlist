import React from 'react'


function SongList(props) {
     
    const songs = props.songs;
    const AllSongs = songs.map((item) => {

    return <div key={item.id}>
                <table style={{ width: "100%" }}>
                    <th className="song-row__item" >{item.artist}</th>
                    <th className="song-row__item">{item.track}</th>
                    <th className="song-row__item">{item.genre}</th>
                    <th className="song-row__item">{item.rating}</th>   
                </table>
            </div>})
 
    return (
        
    <li>{AllSongs} </li> 
)}


export default SongList

