export type CategoryItem = {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
};

export type Category = {
    title: string;
    imageUrl: string;
    items: CategoryItem[];
};

export type CategoryMap = {
    [key: string]: CategoryItem[];
};

export type CategoriesState = {
    categories: Category[];
};
