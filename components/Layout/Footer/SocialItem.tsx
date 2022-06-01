import { IntContactItem } from "./interface";
import { SocialWrapper } from "./styles";
const SocialItem = ({ icon, path, title }: IntContactItem) => {
  return (
    <SocialWrapper
      href={path}
      target="_blank"
      rel="noopener noreferrer index follow"
      title={title}
    >
      <span>{icon}</span>
    </SocialWrapper>
  );
};
export default SocialItem;
