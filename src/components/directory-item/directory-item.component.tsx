import { DirectoryCategory } from '../../store/categories/category.types';
import { BackgroundImage, DirectoryBody, DirectoryItemContainer } from './directory-item.styles';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ id, title, imageUrl, route }: DirectoryCategory) => {
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
            <BackgroundImage className='background-image' imageurl={imageUrl} />
            <DirectoryBody>
                <h2>{title}</h2>
                <p>shop now</p>
            </DirectoryBody>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
