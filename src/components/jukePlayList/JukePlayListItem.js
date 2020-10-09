import React from 'react'
import PropTypes from 'prop-types'
import './JukePlayListItem.css'

let cleanName = function(name) {
	return name.replace(/-|_/g, " ").trim();
}

const JukePlayListItem = ({ item }) => (
  <li className="JukePlayListItem">
    <span>{cleanName(item.song)}</span>
    <br/>
    <span>{item.artist}</span>
  </li>
)


JukePlayListItem.propTypes = {
	item: PropTypes.shape({
		song: PropTypes.shape.isRequired,
		artist: PropTypes.shape.isRequired
	})
}

export default JukePlayListItem
