export type Experience = {
  company: string
  type: string
  position: string
  period: string
  duration: string
  location?: string 
  description: string
  skills: string[]
}

export type Project = {
  title: string
  description: string
  images: string[]
  tech: string[]
}

export type Education = {
  school: string
  degree: string
  year: string
  remarks: string
}