import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';
import { DirectoryCategory } from '../../store/categories/category.types';

const categories: DirectoryCategory[] = [
    {
        id: 1,
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        route: 'shop/hats',
    },
    {
        id: 2,
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        route: 'shop/jackets',
    },
    {
        id: 3,
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        route: 'shop/sneakers',
    },
    {
        id: 4,
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        route: 'shop/womens',
    },
    {
        id: 5,
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        route: 'shop/mens',
    },
];

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map(({ id, title, imageUrl, route }) => (
                <DirectoryItem key={id} id={id} title={title} imageUrl={imageUrl} route={route} />
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
