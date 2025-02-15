import Award from "./Award"
import Publication from "./Publication"
import StoryLink from "./StoryLink"

interface ProjectDetails {
  name: string
  title: string
  graphics?: {
    hero?: boolean
    heroForeground?: boolean
  }
  appearance?: {
    heroHasDarkColour?: boolean
  }
  tint?: string
  description?: string
  foundingYear?: string
  creationYear?: string
  teamSize?: string
  website?: string
  industry?: string
  markets?: string
  role?: string
  publications?: Publication[]
  awards?: Award[]
  storyTitle?: string
  storyLinks?: StoryLink[]
  story?: string
  partOf?: string
  availability?: string
  category?: string
  platforms?: string
}

export default ProjectDetails
