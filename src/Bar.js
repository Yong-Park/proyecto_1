/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-duplicates */
import React from 'react';
import { Component } from 'react';
import './Bar.sass';

export default class Bar extends Component {
  render() {
    return (
      <div className="Bar">
        <div className="EditingDeck">
          <div className="EditingDeck-Text">Editing deck:</div>
          <div className="EditingDeck-name">Galaxy</div>
          <div className="BanList-text">
            Banlist:
            <div className="BanList-type">
              <option value="0" className="Banlist-type1">2022.02 TCG</option>
            </div>
          </div>
          <div className="buttons">
            <button className="Save">Save</button>
            <button className="Clear">Clear</button>
            <button className="Undo">Undo</button>
            <button className="Redo">Redo</button>
            <button className="Sort">Sort</button>
            <button className="Shuffle">Shuffle</button>
            <button className="Share">Share</button>
          </div>
        </div>
      </div>

    );
  }
}
