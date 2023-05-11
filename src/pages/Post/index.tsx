import calendarIcon from '@/assets/calendar.svg'
import chatIcon from '@/assets/chat.svg'
import githubIcon from '@/assets/github.svg'
import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import {
  CardTitleContainer,
  ContentContainer,
  LabelContainer,
  LabelsContainer,
  PostContainer,
  PostTitle,
} from './styles'

export function Post() {
  return (
    <PostContainer>
      <CardTitleContainer>
        <header>
          <a href="">
            <CaretLeft size={18} weight="bold" />
            <p>VOLTAR</p>
          </a>
          <a href="">
            <p>GITHUB</p>
            <ArrowSquareOut size={18} />
          </a>
        </header>
        <PostTitle>JavaScript data types and data structures</PostTitle>
        <LabelsContainer>
          <LabelContainer>
            <img src={githubIcon} alt="" />
            <p>marinapsvreis</p>
          </LabelContainer>
          <LabelContainer>
            <img src={calendarIcon} alt="" />
            <p>Rockeseat</p>
          </LabelContainer>
          <LabelContainer>
            <img src={chatIcon} alt="" />
            <p> 5 comentários</p>
          </LabelContainer>
        </LabelsContainer>
      </CardTitleContainer>
      <ContentContainer>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types: Programming languages all have
          built-in data structures, but these often differ from one language to
          another. This article attempts to list the built-in data structures
          available in JavaScript and what properties they have. These can be
          used to build other data structures. Wherever possible, comparisons
          with other languages are drawn. Dynamic typing JavaScript is a loosely
          typed and dynamic language. Variables in JavaScript are not directly
          associated with any particular value type, and any variable can be
          assigned (and re-assigned) values of all types: Programming languages
          all have built-in data structures, but these often differ from one
          language to another. This article attempts to list the built-in data
          structures available in JavaScript and what properties they have.
          These can be used to build other data structures. Wherever possible,
          comparisons with other languages are drawn. Dynamic typing JavaScript
          is a loosely typed and dynamic language. Variables in JavaScript are
          not directly associated with any particular value type, and any
          variable can be assigned (and re-assigned) values of all types:
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </ContentContainer>
    </PostContainer>
  )
}
