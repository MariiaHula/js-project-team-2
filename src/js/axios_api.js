import axiosInstance from "axios";


const axios = axiosInstance.create({
    baseURL: 'https://tasty-treats-backend.p.goit.global/api',
})

export class goitGlobalAPI {
    constructor() {
        this.page = 1;
        this.category = '';
        this.title = '';
        this.time = '';
        this.area = 'French';
        this.ingredient = '';
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

    getRecipesById(id) {
        
        return axios.get(`/recipes/${id}`).then(response => response.data);
    }
    
    getIngredients() {

        return axios.get('/ingredients').then(response => response.data);
    }


    getPopularRecipes() {

        return axios.get('/recipes/popular').then(response => response.data);
    }

    getRecipes(perPage) {
                
        const params = new URLSearchParams({
            limit: perPage,
        });
  
        for (const key of Object.keys(this)) {
            if (this[key] !== '') {
                params.set(key, this[key]);
            }
        }
        return axios.get(`/recipes?${params}`).then(response => console.log(response.data));
    }

    addRating(id, ratingData) {
          return axios.patch(`/recipes/${id}/rating`, ratingData);
    }
    
    createOrder(orderData) {

          return axios.post('/orders/add', orderData).then(res => res.data);
    }
}



    // getAllRecipesCategories() {
    //     const options = {
    //         params: {
    //             query: this.query,
    //             page: this.page,
    //             limit: this.perPage,
    //         }
    //     };
    //       return axios.get('/recipes', options).then(response => response.data);
// }
    //     constructor(perPage) {
    //     this.page = 1;
    //     this.perPage = perPage;
    // }


