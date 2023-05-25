import { SearchContainer } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <header>
        <h4>Publicações</h4>
        <p>{0} publicações</p>
      </header>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
