import { Post } from '../..'
import { CardContainer } from './styles'

interface CardProps {
  post: Post
}

export function Card({ post }: CardProps) {
  const resumeFromBody = post.body.substring(0, 175)

  return (
    <CardContainer>
      <header>
        <h4>{post.title}</h4>
        <p>Há 1 dia</p>
      </header>
      <p className="description">{resumeFromBody}...</p>
    </CardContainer>
  )
}
