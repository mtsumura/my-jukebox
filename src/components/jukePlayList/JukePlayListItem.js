import React from 'react'
import PropTypes from 'prop-types'
import './JukePlayListItem.css'

const JukePlayListItem = ({ item }) => (
  <li className="JukePlayListItem">
    <span>{item.song}</span>
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
