import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';
import Navigator from './components/Navigator';
//Data
import person from './data/person';
import navigator from './data/navigator';


class App extends Component {
  render() {
    return (
      <header>
        <div className = 'container'>
          <div className='wrapper'>
            <div className='sidebar'>
              <About
                avatar={person.avatar}
                name={person.name}
                profession={person.profession}
                bio={person.bio}
                address={person.address}
                social={person.social} />
            </div>
            <div className='content-wrapper'>
                <div className='content'>

                  <Experience experience={person.experience} />
                  <Education education={person.education} />
                  <Skills skills={person.skills} />
                </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default App;
