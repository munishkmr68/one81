/* React Components */
import { Accordion } from 'react-bootstrap';

/* Styling elements */
import style from './style.module.css'

/**
 * The modular react component.
 * 
 * @function CallToAction
 * @returns Design of call to action for homepage.
 */
export const Faq = (props) => {
    return ( 
    <>
			<Accordion>
        <Accordion.Item>
          <Accordion.Header>What is one81?</Accordion.Header>
          <Accordion.Body>
           <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>What does it cost to sign up?</Accordion.Header>
          <Accordion.Body>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does it work?</Accordion.Header>
          <Accordion.Body>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="3">
          <Accordion.Header>How do I benefit if I sign up?</Accordion.Header>
          <Accordion.Body>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="4">
          <Accordion.Header>Do I get any accreditation from completing one81 courses?</Accordion.Header>
          <Accordion.Body>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="5">
          <Accordion.Header>Can my company sign up on my behalf?</Accordion.Header>
          <Accordion.Body>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="6">
          <Accordion.Header>What rewards can I earn?</Accordion.Header>
          <Accordion.Body>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
    )
}