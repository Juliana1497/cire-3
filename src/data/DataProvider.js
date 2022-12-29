import React, {useState, useEffect, createContext} from 'react';//The react hooks that will be used are imported
import Data from "../data"//the data of the products is imported

export const DataContext = createContext();//A constant is created to save the context

/*
Syntax to create the context within the project, for the handling of the global variables products
Product data is consumed globally in the project
*/
export const DataProvider = (props) =>{//The constant is created where the properties of the function are stored
    const [products, setProducts] = useState([])//Local state handler, which will be a vector since the products are objects
    const [total, setTotal] = useState(0);//Local state handler which stores the total of the sum of the products by the quantity

    useEffect(() =>{//After the page is reloaded
        const product = Data.services//The constant will store the imported JSON data
        product ? setProducts(product): setProducts([])//A conditional is created so that if an error occurs in the search for the products, a vector is displayed
    },[])

    const addCart =(id) =>{//Save the data for the cart. An id is passed as a parameter
        const check = cart.every(services =>{//A check is created where it is evaluated if the services.id is different from the id, it will send a false
            return services.id !== id;
        })
        if(check){
            const data = products.filter(product =>{//the product that is equal to the id is filtered and saved in cart
                return product.id === id
            })
            setCart([...cart, ...data])//A matrix is created in which what is in the cart and what is obtained by filtering the products is saved.
        } 
        else{//If check is false, it is because the product has already been added to the cart
            alert("El producto ya está en tu carrito")
        }
    }
    
    const [cart, setCart] = useState([],()=>{//local data handler that will send the card globally
        const datCart = localStorage.getItem('dataCart');//when the project is initialized, it checks what is inside the local storage of the cart
        const dataCart = JSON.parse(datCart);//The JSON saves what is inside the local storage
        return dataCart;
    });

    useEffect(()=>{//Every time there is a change inside cart the save action is executed in the localStorage in dataCart
        localStorage.setItem('dataCart', JSON.stringify(cart));
    }, [cart]);


    // useEffect(() =>{
    //     const getTotal = () =>{//Las funciones se llaman a si mismas
    //         const res = cart.reduce((prev, services) =>{//The sum of the prices of the service will be accumulated in the constanto
    //             return prev + (services.price * services.amount);//each value of the price and quantity array cart multiplies them and adds them to the accumulator
    //         }, 0)

    //         setTotal(res)
    //     }
    //     getTotal()
    // },[cart])

    const value = {//The constant where the props will be stored is created, so that this information can be accessed in any child component
        products: [products],
        addCart: addCart,
        cart: [cart, setCart],
        total: [total, setTotal],
    }

    return(//The DataContext.Provider where the value object is passed is rendered. The properties will be the children
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}