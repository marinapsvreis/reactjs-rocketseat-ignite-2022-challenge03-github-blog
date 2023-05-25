import { Spinner } from '@/components/Spinner'
import { IPost } from '@/pages/Home'
import { ContentContainer } from './styles'

interface PostHeaderProps {
  postData: IPost
  isLoading: boolean
}

export function PostContent({ postData, isLoading }: PostHeaderProps) {
  return (
    <ContentContainer>
      {isLoading ? <Spinner /> : <p>{postData.body}</p>}
    </ContentContainer>
  )
}
