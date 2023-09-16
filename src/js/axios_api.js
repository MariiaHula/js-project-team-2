import axiosInstance from "axios";


const axios = axiosInstance.create({
    baseURL: 'https://tasty-treats-backend.p.goit.global/api',
}) 

export class goitGlobalAPI {

    constructor() {
        this.page = 1;
        
    }

    getEvents() {

        return axios.get('/events').then(response => response.data);

    };

    getCategories() {

        return axios.get('/categories').then(response => response.data);
    }

    getAreas() {
 
        return axios.get('/areas').then(response => response.data);
    }

    getDatailsById(id) {
        
        return axios.get(`/recipes/${id}`).then(response => response.data);
    }
    
    getIgridients() {

        return axios.get('/ingredients').then(response => response.data);
    }


    getPopularRecipes() {

        return axios.get('/recipes/popular').then(response => response.data);
    }

    getAllRecipesCategories(perPage) {

        const options = {
            params: {
                page: this.page,
                limit: perPage,
            }
        };
        
        return axios.get('/recipes', options).then(response => response.data);
    }

    addRating(id, ...ratingData) {

          return axios.patch(`/recipes/${id}/rating`, ratingData);
    }
    
    createOrder(orderData) {

          return axios.post('', orderData).then(res => res.data);
    }
}





