import React from 'react'

import PropTypes from 'prop-types'

import './faq.css'

const FAQ = (props) => {
  return (
    <div className={`faq-accordion ${props.rootClassName} `}>
      <div
        data-role="accordion-container"
        className="faq-element1 accordion-element"
      >
        <div className="faq-details1">
          <span className="faq-text10">
            What types of packaging do you offer?
          </span>
          <span data-role="accordion-content" className="faq-text11">
            We specialize in high-quality corrugated boxes for various
            industries, including retail, e-commerce, electronics, food, and
            more. We also provide custom packaging solutions tailored to your
            specific needs.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className="faq-icon10">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element2 accordion-element"
      >
        <div className="faq-details2">
          <span className="faq-text12">
            Can I get custom-designed boxes for my business?
          </span>
          <span data-role="accordion-content" className="faq-text13">
            Yes, we offer custom packaging options, including logo printing,
            specific dimensions, and designs to help your brand stand out.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className="faq-icon12">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element3 accordion-element"
      >
        <div className="faq-details3">
          <span className="faq-text14">
            What is the minimum order quantity (MOQ)?
          </span>
          <span data-role="accordion-content" className="faq-text15">
            Our MOQ varies depending on the type and customization of the boxes.
            Contact us to discuss your requirements and get an exact number.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className="faq-icon14">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element4 accordion-element"
      >
        <div className="faq-details4">
          <span className="faq-text16">
            {' '}
            How long does it take to deliver an order?
          </span>
          <span data-role="accordion-content" className="faq-text17">
            Delivery times depend on the order size and customization. Standard
            orders are typically delivered within 7–10 business days, while
            custom orders may take longer.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className="faq-icon16">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element5 accordion-element"
      >
        <div className="faq-details5">
          <span className="faq-text18">How do I place an order?</span>
          <span data-role="accordion-content" className="faq-text19">
            You can place an order by contacting us directly via WhatsApp,
            email, or through our website. Our team will guide you through the
            process.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className="faq-icon18">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className="faq-element6 accordion-element"
      >
        <div className="faq-details6">
          <span className="faq-text20">Do you offer bulk discounts?</span>
          <span data-role="accordion-content" className="faq-text21">
            Yes, we offer competitive pricing and discounts for bulk orders.
            Contact us for more information.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className="faq-icon20">
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  rootClassName: '',
}

FAQ.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ
