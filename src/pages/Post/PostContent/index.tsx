/* eslint-disable react/no-children-prop */
import { Spinner } from '@/components/Spinner'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { ContentContainer } from './styles'

interface PostContentProps {
  content: string
  isLoading: boolean
}

export function PostContent({ content, isLoading }: PostContentProps) {
  return (
    <ContentContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <ReactMarkdown
          children={content}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dracula as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        />
      )}
    </ContentContainer>
  )
}
