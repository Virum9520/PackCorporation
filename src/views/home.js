import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Mark from '../components/mark'
import Card from '../components/card'
import Review from '../components/review'
import FAQ from '../components/faq'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>PackCorporation</title>
        <meta property="og:title" content="PackCorporation" />
      </Helmet>
      <header className="home-navbar">
        <span className="home-text10">
          <span className="home-text11">PackCorporation</span>
          <br></br>
        </span>
        <div className="home-nav-content">
          <div className="home-nav-links1">
            <a href="#whyus" className="home-link10 nav-link">
              Why us
            </a>
            <a href="#network" className="home-link11 nav-link">
              Network
            </a>
            <a href="#review" className="home-link12 nav-link">
              Reviews
            </a>
            <a href="#faq" className="home-link13 nav-link">
              FAQs
            </a>
          </div>
          <a href="#open-mobile-menu" className="home-link14">
            <div id="open-mobile-menu" className="home-hamburger get-started">
              <img
                alt="image"
                src="/Icons/hamburger-200h.png"
                className="home-image10"
              />
            </div>
          </a>
        </div>
        <div id="mobile-menu" className="home-mobile-menu">
          <div className="home-nav-links2">
            <span className="nav-link">Features</span>
            <span className="nav-link">Why us</span>
            <span className="nav-link">Prices</span>
            <span className="nav-link">Contact</span>
          </div>
          <div className="get-started">
            <span className="home-text13">Get started</span>
          </div>
        </div>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<script defer>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
            ></Script>
          </div>
        </div>
      </header>
      <section className="home-section10">
        <div className="home-hero">
          <div className="home-content1">
            <main className="home-main1">
              <header className="home-header10">
                <h1 className="home-heading10">
                  Crafting Packaging Solutions That Deliver Excellence
                </h1>
              </header>
              <span className="home-caption1">
                <span>
                  Reliable. Durable. Sustainable.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Your Partner in Corrugated Box Solutions.</span>
              </span>
              <div className="home-buttons1">
                <div className="home-get-started2 button">
                  <span className="home-text17">Get started</span>
                </div>
                <div className="home-get-started3 button">
                  <span className="home-text18">Explore Our Products</span>
                </div>
              </div>
            </main>
            <div className="home-highlight">
              <div className="home-avatars">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image11 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image12 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image13 avatar"
                />
              </div>
              <label className="home-caption2">
                Loved by 10,000+ people like you.
              </label>
            </div>
          </div>
          <img
            alt="image"
            src="/SectionImages/heroimage-500w.jpg"
            className="home-image14"
          />
        </div>
      </section>
      <section className="home-section11 section-work-data">
        <h2 className="home-text19">Your Trusted Packaging Partner</h2>
        <div className="home-features">
          <header className="feature feature-active home-feature1">
            <h3 className="home-text20 counter-numbers">200000+</h3>
            <p className="home-text21">Boxes Delivered</p>
            
            {/* <div>
              <h2 class="counter-numbers">2000</h2>
              <p>Boxes Delivered</p>
            </div>
            <div>
              <h2 class="counter-numbers">2000</h2>
              <p>Orders accepted</p>
            </div>
            <div>
              <h2 class="counter-numbers">2000</h2>
              <p>Projects designed</p>
            </div> */}
            

          </header>
          <header className="home-feature2 feature">
            <h3 className="home-text22 counter-numbers">150000+</h3>
            <p className="home-text23">Orders accepted</p>
          </header>
          <header className="feature home-feature3">
            <h3 className="home-text24 counter-numbers">2800+</h3>
            <p className="home-text25">Projects designed</p>
          </header>
        </div>
      </section>
      <section id="whyus" className="home-section12">
        <header className="home-header11">
          <h2 className="home-text26">Why choose Us?</h2>
          <span className="home-text27">
            With 30+ years of expertise in packaging solutions, we specialize in
            designing and delivering high-quality corrugated boxes tailored to
            your business needs. From small startups to large enterprises, we
            provide packaging that protects your products while showcasing your
            brand.
          </span>
        </header>
        <section className="home-note1">
          <div className="home-image15">
            <img
              alt="image"
              src="/SectionImages/custom-600h.jpg"
              className="home-image16"
            />
          </div>
          <div className="home-content2">
            <div className="home-main2">
              <div className="home-caption3">
                <span className="section-head">Why choose us</span>
              </div>
              <div className="home-heading11">
                <h2 className="section-heading">Custom Corrugated Boxes</h2>
                <p className="home-paragraph1 section-description">
                  Tailored sizes and designs for your unique requirements.
                </p>
              </div>
            </div>
            <div className="home-get-started4 button">
              <span className="home-text28">Get started</span>
            </div>
          </div>
        </section>
        <section className="home-note2">
          <div className="home-image17">
            <img
              alt="image"
              src="/SectionImages/delivery-500w.png"
              className="home-image18"
            />
          </div>
          <div className="home-content3">
            <main className="home-main3">
              <header className="home-caption4">
                <span className="home-section14 section-head">
                  Why Choose us
                </span>
              </header>
              <main className="home-heading13">
                <header className="home-header12">
                  <h2 className="section-heading">
                    Great care, wherever you are
                  </h2>
                </header>
                <div className="home-checkmarks">
                  <Mark label="On-Time Delivery"></Mark>
                  <Mark label="Bulk Shipping Solutions"></Mark>
                  <Mark label="Flexible Options"></Mark>
                </div>
              </main>
            </main>
            <div className="home-get-started5 button">
              <span className="home-text29">Get started</span>
            </div>
          </div>
        </section>
      </section>
      <section id="network" className="home-section15">
        <header className="home-header13">
          <header className="home-left1">
            <span className="section-head">Network</span>
            <h2 className="section-heading">
              <span>Meet our network</span>
              <br></br>
              <span>of providers</span>
            </h2>
          </header>
          <div className="home-right1">
            <p className="home-paragraph2 section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </header>
        <main className="home-cards1">
          <Card
            header1={
              <Fragment>
                <span className="home-text33">
                  <span>Aryan Paper</span>
                  <br></br>
                </span>
              </Fragment>
            }
            description="A pioneering packaging solutions provider delivering high-quality corrugated boxes and paper products"
            rootClassName="cardroot-class-name"
          ></Card>
          <Card
            icon="/Icons/group%201314-200h.png"
            header1={
              <Fragment>
                <span className="home-text36">
                  <span>Sima Mosbacher</span>
                </span>
              </Fragment>
            }
            rootClassName="cardroot-class-name1"
          ></Card>
          <Card
            icon="/Icons/group%201317-200h.png"
            header1={
              <Fragment>
                <span className="home-text38">
                  <span>Sima Mosbacher</span>
                </span>
              </Fragment>
            }
            rootClassName="cardroot-class-name2"
          ></Card>
        </main>
      </section>
      <section className="home-section17">
        <div className="home-cube1">
          <div className="home-top1 side"></div>
          <div className="home-front1 side"></div>
          <div className="home-left2 side"></div>
        </div>
        <main className="home-banner">
          <div className="home-header14">
            <h2 className="section-heading">
              Perfect Packaging for Every Need
            </h2>
          </div>
          <div className="home-buttons2">
            <div className="home-get-started6 button">
              <span className="home-text40">Get started</span>
            </div>
            <div className="home-book-demo button">
              <span className="home-text41">Explore our Products</span>
            </div>
          </div>
        </main>
      </section>
      <section className="home-section18">
        <div className="home-cube2">
          <div className="home-top2 side"></div>
          <div className="home-front2 side"></div>
          <div className="home-left3 side"></div>
        </div>
        <main className="home-pricing">
          <header className="home-header15">
            <header className="home-left4">
              <span className="section-head">Pricing</span>
              <h2 className="section-heading home-heading17">
                Start small, think big
              </h2>
            </header>
            <div className="home-right2">
              <p className="home-paragraph3 section-description">
                For more details on pricing, feel free to contact us on WhatsApp
                or speak directly with one of our representatives.
              </p>
            </div>
          </header>
        </main>
        <div className="home-help">
          <span className="home-text42">
            <span>Need any help?</span>
            <br></br>
          </span>
          <div className="home-contact-support">
            <a href="tel:+91 9322437770" className="home-link19">
              <p className="home-text45">Contact support -&gt;</p>
            </a>
          </div>
        </div>
      </section>
      <section id="review" className="home-section20">
        <header className="home-header16">
          <header className="home-left5">
            <span className="section-head">Review</span>
            <h2 className="home-heading18 section-heading">
              What users say about us
            </h2>
          </header>
          <div className="home-right3"></div>
        </header>
        <main className="home-cards2">
          <div className="home-container4">
            <Review
              quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”"
              author="Ravi Joshi"
              quote1={
                <Fragment>
                  <span className="home-text46">
                    We’ve been extremely satisfied with the quality and service
                    from PackCorporation. Their custom packaging options have
                    given our brand an edge, and their efficient delivery system
                    always keeps us on track.&quot;
                  </span>
                </Fragment>
              }
              position="Manager, Joshi's Handicrafts"
              rootClassName="reviewroot-class-name"
            ></Review>
            <Review
              quote='"PackCorporation has been our go-to packaging partner for over two years. Their durable and eco-friendly boxes have helped us maintain product quality during transit. Their customer service is always prompt and helpful!"'
              author="Neha Verma"
              quote1={
                <Fragment>
                  <span className="home-text47">
                    &quot;They have been our go-to packaging partner for over
                    two years. Their durable and eco-friendly boxes have helped
                    us maintain product quality during transit. Their customer
                    service is always prompt and helpful!&quot;
                  </span>
                </Fragment>
              }
              position="CEO, Advertizerss"
              rootClassName="reviewroot-class-name"
            ></Review>
          </div>
          <div className="home-container5">
            <Review
              quote='"As a startup, we needed reliable and affordable packaging solutions, and PackCorporation delivered just that. Their boxes are sturdy and perfectly sized for our product range, making our shipments hassle-free"'
              author="Pooja Mehta"
              quote1={
                <Fragment>
                  <span className="home-text48">
                    &quot;As a startup, we needed reliable and affordable
                    packaging solutions, and PackCorporation delivered just
                    that. Their boxes are sturdy and perfectly sized for our
                    product range, making our shipments hassle-free&quot;
                  </span>
                </Fragment>
              }
              position="Home Decor logistics Lead"
              rootClassName="reviewroot-class-name"
            ></Review>
            <Review
              quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”"
              author="Shalini Kapoor"
              quote1={
                <Fragment>
                  <span className="home-text49">
                    &quot;PackCorporation has been instrumental in ensuring our
                    products are delivered safely and securely. The packaging is
                    always top-notch, and we appreciate their attention to
                    detail and quick turnaround times.&quot;
                  </span>
                </Fragment>
              }
              position="Urban Chic Clothing"
              rootClassName="reviewroot-class-name"
            ></Review>
          </div>
          <div className="home-container6">
            <Review
              quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
              author="Vikram Singh"
              quote1={
                <Fragment>
                  <span className="home-text50">
                    <span>
                      &quot;PackCorporation’s packaging solutions have made a
                      noticeable difference in our logistics operations. We
                      trust them to deliver top-quality boxes that withstand
                      even the most challenging conditions.&quot;
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              }
              position="Singh's Electricals"
              rootClassName="reviewroot-class-name"
            ></Review>
            <Review
              quote="“Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
              author="Karan Desai"
              quote1={
                <Fragment>
                  <span className="home-text53">
                    &quot;We’ve been using PackCorporation for all our packaging
                    needs, and we couldn&apos;t be happier. The quality of their
                    corrugated boxes is exceptional, and the on-time delivery is
                    always spot-on.&quot;
                  </span>
                </Fragment>
              }
              position="Gourmet Foods"
              rootClassName="reviewroot-class-name"
            ></Review>
          </div>
        </main>
        <div className="home-view-more">
          <p className="home-text54">View more</p>
        </div>
      </section>
      <section id="faq" className="home-section22">
        <header className="home-header17">
          <span className="section-head">FAQ</span>
          <h2 className="home-heading19 section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="home-accordion">
          <FAQ rootClassName="fa-qroot-class-name"></FAQ>
        </main>
      </section>
      <section className="home-section24">
        <main className="home-content4">
          <header className="home-header18">
            <h2 className="home-heading20 section-heading">
              Stop searching for boxes for your business and  contact us!
            </h2>
            <div className="home-buttons3"></div>
          </header>
          <img
            alt="image"
            src="/SectionImages/contact-1200w.png"
            className="home-image19"
          />
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-content5">
          <main className="home-main-content">
            <div className="home-content6">
              <header className="home-main4">
                <div className="home-header19">
                  <span className="home-text55">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
                <div className="home-socials">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link20"
                  >
                    <img
                      alt="image"
                      src="/Icons/linkedin-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link21"
                  >
                    <img
                      alt="image"
                      src="/Icons/instagram-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link22"
                  >
                    <img
                      alt="image"
                      src="/Icons/twitter-200h.png"
                      className="social"
                    />
                  </a>
                </div>
              </header>
              <header className="home-categories">
                <div className="home-category1">
                  <div className="home-header20">
                    <span className="footer-header">Solutions</span>
                  </div>
                  <div className="home-links1">
                    <span className="footer-link">Responsive Web Design</span>
                    <span className="footer-link">Responsive Prototypes</span>
                    <span className="footer-link">Design to Code</span>
                    <span className="footer-link">Static Website Builder</span>
                    <span className="footer-link">
                      Static Website Generator
                    </span>
                  </div>
                </div>
                <div className="home-category2">
                  <div className="home-header21">
                    <span className="footer-header">Company</span>
                  </div>
                  <div className="home-links2">
                    <span className="footer-link">About</span>
                    <span className="footer-link">Team</span>
                    <span className="footer-link">News</span>
                    <span className="footer-link">Partners</span>
                    <span className="footer-link">Careers</span>
                    <span className="footer-link">Press &amp; Media</span>
                  </div>
                </div>
              </header>
            </div>
            <section className="home-copyright1">
              <span className="home-text69">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main5">
              <h1 className="home-heading21">Subscribe to our newsletter</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <div className="home-buy button">
                  <span className="home-text70">-&gt;</span>
                  <span className="home-text71">
                    <span>Subscribe now</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className="home-notice">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </h1>
          </main>
          <section className="home-copyright2">
            <span className="home-text74">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <div className="home-container8">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
