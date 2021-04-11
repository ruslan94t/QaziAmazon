




export const initialState ={
    basket:[{
        id:98,
        title:"Hand Watch",
        price:12.45,
        rating:4,
        image:"https://m.media-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg",

    },
        {
            id:99,
            title:"Hand Watch",
            price:12.45,
            rating:4,
            image:"https://m.media-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg",

        }
    ],
    user:null,
};



const reducer = (state, action)=>{

    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logick add to basket
            //you return new state
            return {
                ...state,
                basket:[...state.basket, action.item],

            };

        case 'REMOVE_FROM_BASKET':
            //Remove item from basket
            //we clone basket
            let newBasket = [...state.basket];

            //check to see if product exist
            const index = state.basket.findIndex((basketItem)=> basketItem.id=== action.id)
            if(index >= 0){
                //item exists in basket remote
                newBasket.splice(index, 1);

            }else{
                console.warn(
                    `Cant remove product id ${action.id}as it not`
                )
            }
            return {...state, basket:newBasket};

        default:
            return state;




    }
}

export default reducer;
