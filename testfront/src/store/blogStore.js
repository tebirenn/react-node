import { makeAutoObservable } from "mobx";

export default class BlogStore {
    constructor () {
        this._blogs = [];
        // this._blogs = [
        //     {id: 1, title: "title1", description: "desc1", userId: 1, img: "https://html5css.ru/css/img_mountains.jpg"},
        //     {id: 2, title: "title2", description: "desc2", userId: 2, img: "https://html5css.ru/css/img_mountains.jpg"},
        //     {id: 3, title: "title3", description: "desc3", userId: 3, img: "https://html5css.ru/css/img_mountains.jpg"},
        // ];
        this._categories = [
            {id: 1, title: "Прогнозы в IT"},
            {id: 2, title: "Веб-разработка"},
            {id: 3, title: "Мобильная разработка"},
            {id: 4, title: "Фриланс"},
            {id: 5, title: "Алгоритмы"},
            {id: 6, title: "Тестирование IT систем"},
            {id: 7, title: "Разработка игр"},
            {id: 8, title: "Дизайн и юзабилити"},
            {id: 9, title: "Искуственный интелект"},
            {id: 10, title: "Машинное обучение"},
        ];
        this._selectedCategory = "Фриланс";
        makeAutoObservable(this);
    }

    setBlogs (blogs) {
        this._blogs = blogs;
    }

    get blogs () {
        return this._blogs;
    }


    setCategories (categories) {
        this._categories = categories;
    }

    get categories () {
        return this._categories;
    }

    setSelectedCategory (category) {
        this._selectedCategory = category;
    }

    get selectCategory () {
        return this._selectedCategory;
    }
}