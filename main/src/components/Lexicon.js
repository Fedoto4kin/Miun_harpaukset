import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, ButtonGroup, Button,  Container } from 'bootstrap-4-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faQuestion, faBookOpen } from '@fortawesome/free-solid-svg-icons'

const WordTable = React.lazy(() => import('./Lexicon/WordTable'));
const About = React.lazy(() => import('./Lexicon/About'));
const SearchBar = React.lazy(() => import('./Lexicon/SearchBar'));

import history from './history';

export default class Lexicon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    
    this.getSearchStr = this.getSearchStr.bind(this);
    if (this.props.match.params.search) this.state.search = this.props.match.params.search;

  }

  componentDidMount() {
  	document.title = 'Šanakniiga – Miun harpaukšet karielan kieleh';
   }	

  getSearchStr(srt) {
    this.setState({ search: srt});
    history.push(srt); 
  }

  render() {

    return (
    <div>

          <Navbar dark bg="dark">
          <Container>
          <Navbar.Brand>
            <h2  className='text-info' style={{textShadow: "1px 1px #000"}} >
            <FontAwesomeIcon icon={faBookOpen} size="lg"  /> Šanakniiga</h2></Navbar.Brand>
            <ButtonGroup  className='float-right'>
              <React.Suspense  fallback={<span className="spinner-grow text-info"></span>}> 
                  <About />
              </React.Suspense>
            </ButtonGroup>
           
           </Container>
          </Navbar>
           <Navbar light bg="light" pt='5' pb='2' mb='1' className='sticky-top'>
          <Container>
          <React.Suspense fallback={<span className="spinner-grow spinner-grow-lg"></span>} >
            <SearchBar
              search={this.state.search}
              pushSearchStr={this.getSearchStr}
            />
          </React.Suspense>
          </Container>
          </Navbar>
        <React.Suspense fallback={<div>...</div>} >
          <WordTable search={this.state.search} />
        </React.Suspense>
        <div style={{height:'4em'}}>
        </div>

          <Navbar dark bg="dark" pt='3' pb='2' mt= '3' className='row-fluid fixed-bottom border-top border-white'>
          <Container>
            <h5  className='text-info'  >Miun harpaukšet karielan kieleh</h5>
          </Container>
          </Navbar>
      </div>
    );
  }
}