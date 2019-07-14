import history from "../history";
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar,Nav, NavDropdown,Button,FormControl,Form } from "react-bootstrap";
import SettingModal from "./settingModal"
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URI;


class Mynavbar extends React.Component {
 constructor() {
   super()
   this.state = {
    showModal: false,
    searchArticles: {
      searchWord: "",
      language: "en"
    },
    searchArticlesValidation: false
  }
 }

 search = async(query) => {
  try{
    
    const searchResult = await axios('/api/search/?q='+query);
    
    return searchResult.data;

  } catch {

  }
}


toggleModal = ()=>{

  this.setState({showModal: !this.state.showModal})
}

handleChange = event => {
    let eTarget = event.target;
    this.setState({ searchArticlesValidation: true });
    if (eTarget.form.checkValidity() === false || !eTarget.value ) {
      event.preventDefault();
      event.stopPropagation();

    }
    
    const newData = { ...this.state.searchArticles };
    newData[event.target.name] = event.target.value;
    this.setState({ searchArticles: newData });
}


handleFocusOut = event => {

  this.setState({ searchArticlesValidation: false });
}


handleSubmit = async (event,search) => {
  event.preventDefault();
  
  if (event.currentTarget.checkValidity()) {  
   history.push("/search/"+this.state.searchArticles.searchWord)
  }
}

 render () {
  const { searchArticlesValidation } = this.state;
  let categoryMenu;
  if(this.props.category){    
    categoryMenu = this.props.category.map((cat,i)=>{
    return <NavDropdown.Item as={Link} key={i} to={"/world-news/"+cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</NavDropdown.Item>
  });

  }

  
  var config
  var getData = () => {
      config = {
        title: "Preferences: " + this.props.user.fullName
      }
    }
   
  return (
    
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="top" variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>            
          
          {this.props.user && 
              <>                
              <NavDropdown title="World News" id="collasible-nav-dropdown">
                  {categoryMenu}
              </NavDropdown>
              </>
          }
          </Nav>

          {!this.props.user && 
            <Nav>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="/signup">SignUp</Nav.Link>
            </Nav>
          }
          {this.props.user && 
            
          <Nav>
          {/* Search News */}
            <Form 
              inline
              validated={searchArticlesValidation}
              onSubmit={e => this.handleSubmit(e,this.search)}
              >
              <FormControl
                required
                name="searchWord"                
                minLength="3"
                value={this.state.searchArticles.searchWord}
                onBlur={this.handleFocusOut}
                onChange={this.handleChange}
                type="text" placeholder="Search"
                className="mr-sm-2" />
              <Button disabled={this.state.searchArticles.searchWord ? false : true} type="submit" variant="outline-primary">Search</Button>
            </Form>

            {/* Jurgen <Nav.Link as={Link} to={`${this.props.history.location.pathname == "/" ? "modal": this.props.history.location.pathname + 'modal'}`} ><i class="fas fa-cogs"></i></Nav.Link> */}
            <Nav.Link onClick={this.toggleModal}   ><i className="fas fa-cogs"></i></Nav.Link>
            {/* <Nav.Link as={Link}   ><i class="fas fa-cogs"></i></Nav.Link> */}
            <Nav.Link onClick={ ()=> { this.props.logoutUser() } } >Logout</Nav.Link>
          </Nav>
          }
        
        </Navbar.Collapse>
      </Navbar>
          
      <SettingModal
          onShow={this.state.showModal ? getData(): null }
          {...config}
          dialogClassName="setting-modal"
          aria-labelledby="setting-modal"          
          show={this.state.showModal}
          toggleModal={this.toggleModal} />
    </>
  );

 } 
};
export default withRouter(Mynavbar);
