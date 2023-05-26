import { useEffect, useState } from 'react'
import { PostHeader } from './PostHeader'
import { PostContainer } from './styles'

import { api } from '@/lib/axios'
import { useParams } from 'react-router-dom'
import { IPost } from '../../pages/Home'
import { PostContent } from './PostContent'

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  async function getPostDetails() {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/${userName}/${repoName}/issues/${id}`,
      )

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <PostContainer>
      <PostHeader postData={postData} isLoading={isLoading} />
      <PostContent content={postData.body} isLoading={isLoading} />
    </PostContainer>
  )
}
