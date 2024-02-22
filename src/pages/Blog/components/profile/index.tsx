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
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface ProfileType {
  login: string;
  avatar_url: string;
  name: string;
  followers: string;
  html_url: string;
  company: string | null;
  bio: string | null;
}

export function Profile() {
  const [profile, setProfile] = useState({} as ProfileType);

  const getProfile = useCallback(async () => {
    const response = await api.get(`/users/kevinrf100`);

    setProfile(response.data);
  }, []);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <ProfileContainer>
      <img src={profile.avatar_url} alt="" />
      <ProfileInfos>
        <ProfileNameContainer>
          <span>{profile.name}</span>
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            github
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </ProfileNameContainer>
        <ProfileDescription>{profile.bio}</ProfileDescription>
        <ProfileItemsContainer>
          <ProfileItem>
            <FontAwesomeIcon size="1x" color="#3A536B" icon={faGithub} />
            {profile.login}
          </ProfileItem>
          <ProfileItem>
            <FontAwesomeIcon size="1x" color="#3A536B" icon={faBuilding} />
            {profile.company}
          </ProfileItem>
          <ProfileItem>
            <FontAwesomeIcon size="1x" color="#3A536B" icon={faUserFriends} />
            {profile.followers + " "}
            seguidores
          </ProfileItem>
        </ProfileItemsContainer>
      </ProfileInfos>
    </ProfileContainer>
  );
}
