import { relativeDateFormatter } from '@/utils/formatter'
import { IPost } from '../..'
import { CardContainer } from './styles'

interface CardProps {
  post: IPost
}

export function Card({ post }: CardProps) {
  const resumeFromBody = post.body.substring(0, 220)
  const formattedDate = relativeDateFormatter(post.created_at)

  return (
    <CardContainer to={`/post/${post.number}`}>
      <header>
        <h4>{post.title}</h4>
        <p>{formattedDate}</p>
      </header>
      <p className="description">{resumeFromBody}...</p>
    </CardContainer>
  )
}
