import { ArrowSquareOut } from 'phosphor-react'
import buildingIcon from '../../assets/building.svg'
import followersIcon from '../../assets/followers.svg'
import githubIcon from '../../assets/github.svg'
import {
  HomeContainer,
  InfoContainer,
  LabelContainer,
  LabelsContainer,
  ProfileContainer,
  ProfileName,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileContainer>
        <img src="https://github.com/marinapsvreis.png" alt="" />
        <div>
          <header>
            <ProfileName>Marina Portugal</ProfileName>
            <a href="https://github.com/marinapsvreis">
              <p>GITHUB </p>
              <ArrowSquareOut size={18} />
            </a>
          </header>
          <InfoContainer>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
            <LabelsContainer>
              <LabelContainer>
                <img src={githubIcon} alt="" />
                <p>marinapsvreis</p>
              </LabelContainer>
              <LabelContainer>
                <img src={buildingIcon} alt="" />
                <p>Rockeseat</p>
              </LabelContainer>
              <LabelContainer>
                <img src={followersIcon} alt="" />
                <p>32 seguidores</p>
              </LabelContainer>
            </LabelsContainer>
          </InfoContainer>
        </div>
      </ProfileContainer>
    </HomeContainer>
  )
}
