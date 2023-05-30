import { BackgroundImage, DirectoryBody, DirectoryItemContainer } from "./directory-item.styles";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ id, title, imageUrl, route }) => {
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
            <BackgroundImage className="background-image" imageUrl={imageUrl} />
            <DirectoryBody>
                <h2>{title}</h2>
                <p>shop now</p>
            </DirectoryBody>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
