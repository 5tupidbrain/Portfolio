import React from 'react';
import { objOne, objTwo } from './data';


function Proj_card(props) {
  return (
    <>
      <div className='pcard'>
        <a href={props.url}>
          <img src={props.img} alt='' ></img>
        </a>
        <div className='proj-card'>
          <h4>Project #{props.no}</h4>
          <a href={props.url}>{props.name}</a>
          <p>{props.desc} <span role="img" aria-label="l-bolt">⚡</span></p>
          <ul>
            <li>{props.lang1}</li>
            <li>{props.lang2}</li>
            <li>{props.lang3}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className='Container-4 Container'>
          <div className='proj'>

            <div className='projects' >
              <h2>Some Things I've Built</h2>
            </div>
            <div className='p-grid'>

              <Proj_card{...objOne} />
              <Proj_card{...objTwo} />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects