import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Materials Science Dept.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            {/* About Us */}
            <NavDropdown title="About Us" id="about-us-dropdown">
              <LinkContainer to="/about-us">
                <NavDropdown.Item>About Us</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/career-paths">
                <NavDropdown.Item>Career Paths</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/job-opportunities">
                <NavDropdown.Item>Job Opportunities</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown title="Staff" id="staff-dropdown">
                <LinkContainer to="/staff/academic">
                  <NavDropdown.Item>Academic</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/staff/non-academic">
                  <NavDropdown.Item>Non-Academic</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </NavDropdown>

            {/* Research and Impact */}
            <NavDropdown title="Research and Impact" id="research-dropdown">
              <LinkContainer to="/research-facilities">
                <NavDropdown.Item>Research Facilities</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/undergrad-research">
                <NavDropdown.Item>Undergraduate Research Projects</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/postgrad-research">
                <NavDropdown.Item>Postgraduate Research Projects</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/project-proposals">
                <NavDropdown.Item>Project Proposal Submission</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            {/* Education */}
            <NavDropdown title="Education" id="education-dropdown">
              <LinkContainer to="/undergrad-programs">
                <NavDropdown.Item>Undergraduate Programs</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/postgrad-programs">
                <NavDropdown.Item>Postgraduate Programs</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            {/* SOMES */}
            <NavDropdown title="SOMES" id="somes-dropdown">
              <LinkContainer to="/what-is-somes">
                <NavDropdown.Item>What is SOMES?</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/events">
                <NavDropdown.Item>Events</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            {/* Contact */}
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
