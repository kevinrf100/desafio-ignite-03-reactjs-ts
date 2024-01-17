import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ProfileContainer,
  ProfileDescription,
  ProfileInfos,
  ProfileItem,
  ProfileItemsContainer,
  ProfileNameContainer,
} from "./styles";
import {
  faBuilding,
  faUpRightFromSquare,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/30449737?v=4" alt="" />
      <ProfileInfos>
        <ProfileNameContainer>
          <span>Kevin Rossetti Fernandes</span>
          <a href="https://github.com/kevinrf100">
            github
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </ProfileNameContainer>
        <ProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileDescription>
        <ProfileItemsContainer>
          <ProfileItem>
            <FontAwesomeIcon size="1x" color="#3A536B" icon={faGithub} />
            kevinrf100
          </ProfileItem>
          <ProfileItem>
            <FontAwesomeIcon size="1x" color="#3A536B" icon={faBuilding} />
            Amdocs
          </ProfileItem>
          <ProfileItem>
            <FontAwesomeIcon size="1x" color="#3A536B" icon={faUserFriends} />0
            seguidores
          </ProfileItem>
        </ProfileItemsContainer>
      </ProfileInfos>
    </ProfileContainer>
  );
}
