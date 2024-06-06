import { StaticImageData } from 'next/image'
import { FunctionComponentElement } from 'react'
import { IconBaseProps } from 'react-icons'

export interface Artifact {
  /**
   * Give your artifact a title like 'Design Project for Nonprofit'
   */
  title: string
  /**
   * Describe your artifact
   */
  description: string
  /**
   * Enter a comma-separated list of items inside square brackets like this:
   * ['Adobe Photoshop', 'Microsoft Excel', 'First Aid']
   */
  tags: string[]
  /**
   * Upload an image into the /public/images folder
   * Then import the image at the top of this file like this:
   * import nameOfImage from '../public/images/nameOfImageFile.jpg'
   * Then use nameOfImage for the imageUrl property.
   */
  imageUrl?: StaticImageData | string
  /**
   * Enter a url to the page you want visitors to explore
   */
  url: string
}

export interface Experience {
  /**
   * Give your work or educational experience a title
   * i.e. 'Paramedic' or 'Associate in Arts'
   */
  title: string
  /**
   * Where is this employer or school? Provide a City and state like this:
   * 'Toms River, NJ'
   */
  location: string
  /**
   * Describe your experience like this:
   * 'I worked as a paramedic for XYZ organization and I was responsible for...'
   */
  description: string
  /**
   * If this is a work experience use HiOutlineBriefcase
   * If this is an educational experience use LuGraduationCap
   */
  icon?: FunctionComponentElement<IconBaseProps>
  /**
   * Provide the year you started i.e. '2019'
   */
  start: string
  /**
   * Provide the year you ended or if you are still there use present like this:
   * '2024' or 'Present'
   */
  end: string
}

export interface Link {
  /**
   * This is the text that will appear in your navigation menu
   */
  name: string

  /**
   * The hash string (i.e. anchor link) must start with a # symbol and words are
   * separated by dashes like this: #about-me
   */
  hash: string // i.e. "#projects"
}