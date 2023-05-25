import { Spinner } from '@/components/Spinner'
import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { CardsContainer, HomeContainer } from './styles'

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface Post {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function getPosts(query: string = '') {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${userName}/${repoName}`,
      )

      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <HomeContainer>
      <Profile />
      <Search postsLength={posts.length} getPosts={getPosts} />
      <CardsContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {posts.length > 0 ? (
              posts.map((post) => {
                return <Card key={post.number} post={post} />
              })
            ) : (
              <p>Não tem nenhum post</p>
            )}
          </>
        )}
      </CardsContainer>
    </HomeContainer>
  )
}
