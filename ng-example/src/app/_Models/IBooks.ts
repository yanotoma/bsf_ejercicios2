declare module MyApp.Models {
    export interface IBooks {
        id: number;
        title: string;
        author: string;
        year_published: number;
        rating: number;
        price: number;
        imgUrl: string;
    }

    export interface IOptionElement{
        id: number;
        text: string;
        value: string;
    }
    // Load filters from API
    export interface IBooksFilter{
        sortOptions: IOptionElement[];
    }
    // Interfaces from filter parameters sento to API
    export interface IBookFilterParam{
        sortBy: string;
        pageSize: number;
        pageNumber: number;
        searchText: string;
    }
}