import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { SearchContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchInputProps {
  getPosts: (query?: string) => Promise<void>
}

export function Search({ getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h4>Publicações</h4>
        <p>{0} publicações</p>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchContainer>
  )
}
