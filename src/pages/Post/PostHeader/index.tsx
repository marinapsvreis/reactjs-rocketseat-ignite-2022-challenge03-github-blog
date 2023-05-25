import calendarIcon from '@/assets/calendar.svg'
import chatIcon from '@/assets/chat.svg'
import githubIcon from '@/assets/github.svg'
import { Spinner } from '@/components/Spinner'
import { IPost } from '@/pages/Home'
import { relativeDateFormatter } from '@/utils/formatter'
import { ArrowSquareOut, CaretLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import {
  CardTitleContainer,
  LabelContainer,
  LabelsContainer,
  PostTitle,
} from './styles'

interface PostHeaderProps {
  postData: IPost
  isLoading: boolean
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const formattedDate = relativeDateFormatter(postData.created_at)

  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <CardTitleContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <button onClick={goBack}>
              <CaretLeft size={18} weight="bold" />
              <p>VOLTAR</p>
            </button>
            <a href={postData.html_url}>
              <p>VER NO GITHUB</p>
              <ArrowSquareOut size={18} />
            </a>
          </header>
          <PostTitle>{postData.title}</PostTitle>
          <LabelsContainer>
            <LabelContainer>
              <img src={githubIcon} alt="" />
              <p>{postData.user.login}</p>
            </LabelContainer>
            <LabelContainer>
              <img src={calendarIcon} alt="" />
              <p>{formattedDate}</p>
            </LabelContainer>
            <LabelContainer>
              <img src={chatIcon} alt="" />
              <p> {postData.comments} comentários</p>
            </LabelContainer>
          </LabelsContainer>
        </>
      )}
    </CardTitleContainer>
  )
}
