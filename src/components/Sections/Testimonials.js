import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import testimonialsData from "../../constants/testimonials"
import Section from "../Section"

const Testimonials = () => {
  const data = useStaticQuery(getTestimonials)
  const testimonials = data.testimonials.edges

  return (
    <Section title="Co o nás říkají" message="">
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
                  {testimonialsData[index].name}
                </div>
                <p className="testimonials__text">
                  {testimonialsData[index].text}
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
  }
`
