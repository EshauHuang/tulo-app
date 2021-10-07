import styled from "styled-components";
import { Menu } from "@styled-icons/heroicons-solid";
import { Search } from "@styled-icons/boxicons-regular/Search";
import { ThLargeOutline } from "@styled-icons/typicons";
import { User3 } from "@styled-icons/remix-line";
import { MessageDetail } from "@styled-icons/boxicons-regular";
import { Heart } from "@styled-icons/heroicons-outline";
import { Folder } from "@styled-icons/boxicons-regular";
import { Settings } from "@styled-icons/fluentui-system-regular";
import { InternetExplorer } from "@styled-icons/boxicons-logos";
import { LogOut } from "@styled-icons/boxicons-regular";

export const MenuIcon = styled(Menu)`
  cursor: pointer;
  width: 1.3rem;
`;

export const SiteIcon = styled(InternetExplorer)`
  cursor: pointer;
  width: 1.8rem;
  height: 1.8rem;
`;

export const SearchIcon = styled(Search)`
  width: 1rem;
  z-index: 10;
`;

export const LogOutIcon = styled(LogOut)`
  width: 1rem;
`;

export const ThListIcon = styled(ThLargeOutline)`
  width: ${(props) => props.width}rem;
`;

export const UserIcon = styled(User3)`
  width: ${(props) => props.width}rem;
`;

export const MessageIcon = styled(MessageDetail)`
  width: ${(props) => props.width}rem;
`;

export const HeartIcon = styled(Heart)`
  width: ${(props) => props.width}rem;
`;

export const FolderIcon = styled(Folder)`
  width: ${(props) => props.width}rem;
`;

export const SettingsIcon = styled(Settings)`
  width: ${(props) => props.width}rem;
`;

export const ListIcons = ({ name, width = 1 }) => {
  return (
    <>
      {name.toLowerCase() === "dashboard" && <ThListIcon width={width} />}
      {name.toLowerCase() === "user" && <UserIcon width={width} />}
      {name.toLowerCase() === "message" && <MessageIcon width={width} />}
      {name.toLowerCase() === "loves" && <HeartIcon width={width} />}
      {name.toLowerCase() === "works" && <FolderIcon width={width} />}
      {name.toLowerCase() === "setting" && <SettingsIcon width={width} />}
    </>
  );
};
