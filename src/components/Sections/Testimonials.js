import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import testimonialsData from "../../constants/testimonials"
import Section from "../Section"

const Testimonials = () => {
  const data = useStaticQuery(getTestimonials)
  const testimonials = data.testimonials.edges
  const {
    titlesection5,
    nameimage1,
    nameimage2,
    nameimage3,
    textimage1,
    textimage2,
    textimage3,
  } = data.text
  const names = [nameimage1, nameimage2, nameimage3]
  const texts = [textimage1, textimage2, textimage3]

  return (
    <Section
      title={titlesection5 ? titlesection5 : "Co o nás říkají"}
      classname="testimonials"
      message=""
    >
      <div className="testimonials">
        {testimonials.map((item, index) => {
          return (
            <article className="testimonials__card" key={index}>
              <Img
                fixed={item.node.childImageSharp.fixed}
                className="testimonials__image"
              />
              <div className="testimonials__left">
                <div className="testimonials__name">
                  {names[index] ? names[index] : testimonialsData[index].name}
                </div>
                <p className="testimonials__text">
                  {texts[index] ? texts[index] : testimonialsData[index].text}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

export default Testimonials

const getTestimonials = graphql`
  {
    testimonials: allFile(
      filter: { relativePath: { regex: "/testimonial-/" } }
      sort: { order: ASC, fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    }
    text: datoCmsFifthsection {
      titlesection5
      nameimage1
      nameimage2
      nameimage3
      textimage1
      textimage2
      textimage3
    }
  }
`
