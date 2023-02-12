// const url = 'https://www.themealdb.com/api/json/v1/1/random.php';



 function callApi(url) {
    const request = new Request(url, {
        headers: {
            'Accept': 'application/json'
        },
        method: 'GET',
    });

    const response = fetch(request);
    return response.then((res) => res.json());
}

async function getMeal(url) { 
    try {
        const meal = await callApi(url);
        return meal.meals[0];
    } catch(error) {
        throw error;
    }
}  



async function getMeals(N, url) {
    let meals = []
    try {
        for (let i=0; i<N; i++) {
            const meal = await getMeal(url);
            console.log(meal);
            if (!meals.includes(meal.idMeal)) {
                meals.push(meal);
            } else {
                i--;
            }
        }
        return meals;
    } catch(error) {
        throw error;
    }
}


