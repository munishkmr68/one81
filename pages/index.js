/* React Components */
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Head from 'next/head'

/* Reusable Modular Elements */
import { BottomLinks } from '../components/BottomLinks';
import { Navigation } from '../components/Navigation';
import { HomeBanner } from '../components/HomeBanner';
import { Heading } from '../components/Heading';
import { Course } from '../components/Course';
import { PricePaid } from '../components/Pricing/Paid';
import { PriceFree } from '../components/Pricing/Free';
import { JourneyTab } from '../components/JourneyTab';
import { TestimonialCard } from '../components/Testimonial';
import { Faq } from '../components/Faq';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

/* Styling elements */
import styles from '../styles/Home.module.css'
import heading from '../styles/Heading.module.css'
import journey from '../styles/Journey.module.css'
import testimonial from '../styles/Testimonial.module.css'
import faq from '../styles/Faq.module.css'

/* Static Assets */
import AuthorImage1 from '../public/assets/testiImg1.png'
import AuthorImage2 from '../public/assets/testiImg2.png'
import AuthorImage3 from '../public/assets/testiImg3.png'

/**
 * @function Home
 * @returns Renders complete homepage.
 */
export default function Home() {
  return (
    <>
      { /* SEO elements */ }
      <Head>
        <title>One81</title>
        <meta name="description" content="One81" />
      </Head>

      { /* Bottom Fix Links */ }
      <BottomLinks/>


      { /* Header */ }
      <div className={styles.banner}>
        <Navigation/>
        <HomeBanner/>
      </div>

      { /* Courses */ }
      <Course/>

      { /* Pricing Section */ }
      <section className='PriceBlkMain bgGrey'>
        <Tabs
            defaultActiveKey="individuals"
            id="pricing-tab"
            className="prcingTabs"
          >
            <Tab eventKey="individuals" title="Individuals">
              <div className="prcingTabContent pd-180">
                <div className="container">
                  <Row className="d-flex align-items-center g-4">           
                    <Col lg={4}>
                      <PricePaid
                          paidHdng="Premium"
                          typeHdng="Subscription"
                          mainPrice="$9"
                          subPriceSmall="99"
                          perMonth="Per Month"
                          buildAnualTitle="Billed Annualy"
                          buildAnualPrice="$99"
                          buildPriceSup="00"
                          buildPriceSub="Year"
                          paidParah="Access All Courses Generate Shareable CV "
                          paidParahReward="Earn rewards"
                          cancleAnyTime="Cancel Anytime"
                      />
                    </Col>
                    <Col lg={4}>
                      <PriceFree
                          freeHdng="Get Started"
                          freTitle="Free"
                          freeParah="Access All Courses Generate Shareable CV "
                          cancleAnyTime="Cancel Anytime"
                      />
                    </Col>
                    <Col lg={4}>
                      <PricePaid
                          paidHdng="Premium"
                          typeHdng="Subscription"
                          mainPrice="$9"
                          subPriceSmall="99"
                          perMonth="Per Month"
                          buildAnualTitle="Billed Annualy"
                          buildAnualPrice="$99"
                          buildPriceSup="00"
                          buildPriceSub="Year"
                          paidParah="Access All COurses Generate Shareable CV "
                          paidParahReward="Earn rewards"
                          cancleAnyTime="Cancel Anytime"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab>
            <Tab eventKey="corporate" title="Corporate">
            <div className="prcingTabContent pd-180">
                <div className="container">
                  <Row className="d-flex align-items-center g-4">           
                    <Col lg={4}>
                      <PricePaid
                        paidHdng="Premium"
                        typeHdng="Subscription"
                        mainPrice="$9"
                        subPriceSmall="99"
                        perMonth="Per Month"
                        buildAnualTitle="Billed Annualy"
                        buildAnualPrice="$99"
                        buildPriceSup="00"
                        buildPriceSub="Year"
                        paidParah="Access All Courses Generate Shareable CV "
                        paidParahReward="Earn rewards"
                        cancleAnyTime="Cancel Anytime"
                      />
                    </Col>
                    <Col lg={4}>
                      <PriceFree
                        freeHdng="Get Started"
                        freTitle="Free"
                        freeParah="Access All Courses Generate Shareable CV "
                        cancleAnyTime="Cancel Anytime"
                      />
                    </Col>
                    <Col lg={4}>
                      <PricePaid
                        paidHdng="Premium"
                        typeHdng="Subscription"
                        mainPrice="$9"
                        subPriceSmall="99"
                        perMonth="Per Month"
                        buildAnualTitle="Billed Annualy"
                        buildAnualPrice="$99"
                        buildPriceSup="00"
                        buildPriceSub="Year"
                        paidParah="Access All COurses Generate Shareable CV "
                        paidParahReward="Earn rewards"
                        cancleAnyTime="Cancel Anytime"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab>
        </Tabs>
      </section>

      { /* Journey */ }
      <section className={journey.journeyBlk}>
        <div className={journey.tabCol}>
          <Tabs
            defaultActiveKey="blockchain"
            id="uncontrolled-tab-example"
            className="journeyTabs"
          >
            <Tab eventKey="blockchain" title="Blockchain">
              <JourneyTab
                pricetext="+70XP"
                Title="Blockchain A-Z: Learn how to build your first blockchain"
                parah="2 articles 24 hours of video 3 downloadable resources Full lifetime access"
                url="javascript:void(0);"
              />
            </Tab>
            <Tab eventKey="business" title="Business">
              <JourneyTab
                pricetext="+70XP"
                Title="Business A-Z: Learn how to build your first business"
                parah="2 articles 24 hours of video 3 downloadable resources Full lifetime access"
                url="javascript:void(0);"
              />
            </Tab>
            <Tab eventKey="coding-programming" title="Coding & Programming">
              <JourneyTab
                pricetext="+70XP"
                Title="Coding & Programming A-Z: Learn how to build your first Coding & Programming"
                parah="2 articles 24 hours of video 3 downloadable resources Full lifetime access"
                url="javascript:void(0);"
              />
            </Tab>
            <Tab eventKey="data-science" title="Data science">
              <JourneyTab
                pricetext="+70XP"
                Title="Data science A-Z: Learn how to build your first Data science"
                parah="2 articles 24 hours of video 3 downloadable resources Full lifetime access"
                url="javascript:void(0);"
              />
            </Tab>
            <Tab eventKey="design" title="Design">
              <JourneyTab
                pricetext="+70XP"
                Title="Design A-Z: Learn how to build your first Design"
                parah="2 articles 24 hours of video 3 downloadable resources Full lifetime access"
                url="javascript:void(0);"
              />
            </Tab>
            <Tab eventKey="security-software" title="IT Security & Software">
              <JourneyTab
                pricetext="+70XP"
                Title="IT Security & Software A-Z: Learn how to build your first IT Security & Software"
                parah="2 articles 24 hours of video 3 downloadable resources Full lifetime access"
                url="javascript:void(0);"
              />
            </Tab>
            <Tab eventKey="personal-development" title="Personal Development">
              <JourneyTab
                pricetext="+70XP"
                Title="Personal Development A-Z: Learn how to build your first Personal Development"
                parah="2 articles 24 hours of video 3 downloadable resources Full lifetime access"
                url="javascript:void(0);"
              />
            </Tab>
            <Tab eventKey="marketing" title="Marketing">
              <JourneyTab
                pricetext="+70XP"
                Title="Marketing A-Z: Learn how to build your first Marketing"
                parah="2 articles 24 hours of video 3 downloadable resources Full lifetime access"
                url="javascript:void(0);"
              />
            </Tab>
          </Tabs>
        </div>
        <div className={journey.tabsBottom}>
          <div className='container'>
            <Row>
              <Col md="auto">
                <h4>Start your journey</h4>
              </Col>
              <Col></Col>
              <Col md="auto">
                <h4><a href="javascript:void(0);">All <i className={journey.stdyIcon}></i></a></h4>
              </Col>
            </Row>
          </div>
        </div>       
      </section>

      { /* Testimonials */ }
      <section className={`${testimonial.testiBlock} pd-180 bgGrey`}>
        <Container>
          <Row className="d-flex align-items-center g-4">
              <Col lg>
                <TestimonialCard
                  name="Jane Doe"
                  auth_description="Blockchain A-Z: Learn how to build your first blockchain"
                  client_image={AuthorImage1}
                  alt="Jane Doe"
                />
              </Col>
              <Col lg>
                <TestimonialCard
                  name="John Doe"
                  auth_description="Blockchain A-Z: Learn how to build your first blockchain"
                  client_image={AuthorImage3}
                  alt="Jane Doe"
                />
              </Col>
              <Col lg>
                <TestimonialCard
                  name="Jane Doe"
                  auth_description="Blockchain A-Z: Learn how to build your first blockchain"
                  client_image={AuthorImage2}
                  alt="Jane Doe"
                />
              </Col>
          </Row>
        </Container>
      </section>

      { /* Featured Call to Action */ }
      <CallToAction />

      { /* FAQ */ }
      <section className={`${faq.faqBlock} pd-180`}>
        <Container>
          <Heading
            title="Frequently Asked Questions"
            customClass={`${heading.headingWhite}`}
          />  
          <div className={`${faq.faqRow} faqRow mt-5 pt-4`}>
            <Faq/>
            <div className={`${faq.faqCntct}`}>
              <p>Didn’t find the answer you were looking for? Please <a href="javascript:void(0);">contact us</a> and our team of experts will be happy to help.</p>  
            </div>  
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}
