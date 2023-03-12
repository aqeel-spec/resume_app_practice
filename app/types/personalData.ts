export type PersonalData = {
  name: string
  role: string
  education: string[]
  contactLinks: string[]
}
export type AboutMe = {
  title: string
  body: string[]
}
export type SkillsType = {
  soft: { icon: string; text: string }[]
  hard: { icon: string; text: string }[]
}
export type ProfessionalData = {
  title: string
  experiences: { role: string; description: string; current: boolean }[]
}
