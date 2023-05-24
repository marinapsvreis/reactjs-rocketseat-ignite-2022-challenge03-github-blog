import { Issue } from '../..'
import { CardContainer } from './styles'

interface CardProps {
  issue: Issue
}

export function Card({ issue }: CardProps) {
  const resumeFromBody = issue.body.substring(0, 175)

  return (
    <CardContainer>
      <header>
        <h4>{issue.title}</h4>
        <p>Há 1 dia</p>
      </header>
      <p className="description">{resumeFromBody}...</p>
    </CardContainer>
  )
}
