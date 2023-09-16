import axiosInstance from "axios";


const axios = axiosInstance.create({
    baseURL: 'https://tasty-treats-backend.p.goit.global/api',
})


export class goitGlobalAPI {
    constructor(perPage) {
        this.page = 1;
        this.perPage = perPage;
    }

    getEvents() {
        const options = {
            params: {
                query: this.query,
            }
        };

        return axios.get('/events', options).then(response => response.data);
    };


    getCategories() {
        const options = {
            params: {
                query: this.query,
            }
        };
        return axios.get('/categories', options).then(response => response.data);
    }
    getAreas() {
        const options = {
            params: {
                query: this.query,
            }
        };
        return axios.get('/areas', options).then(response => response.data);
    }
    getAllRecipesCategories() {
        const options = {
            params: {
                query: this.query,
                page: this.page,
                limit: this.perPage,
            }
        };
        return axios.get('/recipes', options).then(response => response.data);
    }
    getPopularRecipes() {
        const options = {
            params: {
                query: this.query,
            }
        };
        return axios.get('/recipes?popular', options).then(response => response.data);
    }

    getIgridients() {
        const options = {
            params: {
                query: this.query,
            }
        };
        return axios.get('/ingredients', options).then(response => response.data);
    }
    addRating(id, ...ratingData) {

        return axios.patch(`/${id}`, ratingData);
    }
    createOrder(data) {

        return axios.post('', data).then(res => res.data);
    }
}





