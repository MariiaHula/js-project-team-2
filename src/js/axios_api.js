import axiosInstance from "axios";


const axios = axiosInstance.create({
    baseURL: 'https://tasty-treats-backend.p.goit.global/api',
})

export class goitGlobalAPI {

    getEvents() {

        return axios.get('/events').then(response => response.data);

    };

    getCategories() {

        return axios.get('/categories').then(response => response.data);
    }

    getAreas() {
 
        return axios.get('/areas').then(response => response.data);
    }

    getRecipesById(id) {
        
        return axios.get(`/recipes/${id}`).then(response => response.data);
    }
    
    getIngredients() {

        return axios.get('/ingredients').then(response => response.data);
    }


    getPopularRecipes() {

        return axios.get('/recipes/popular').then(response => response.data);
    }

    getRecipes(page, limit, params) {
        
        params.page = page;
        params.limit = limit;

        const options = { params: params }
        
        return axios.get('/recipes', options).then(response => response.data);
    }

    addRating(id, ratingData) {
          return axios.patch(`/recipes/${id}/rating`, ratingData);
    }
    
    createOrder(orderData) {

          return axios.post('', orderData).then(res => res.data);
    }
}





