import React from 'react'

const Header = ({searchValue, onSearchChange}) => {
  return (
    <div className="note-app__header">
      <div className="logo">
        <h1>Notes App</h1>
        <p>by: Frisnadi</p>
      </div>
        <input 
          type="text" 
          className="search_bar"
          placeholder="Cari catatan ..." 
          value={searchValue}
          onChange={onSearchChange}
          />
    </div>
  )
}

export default Header