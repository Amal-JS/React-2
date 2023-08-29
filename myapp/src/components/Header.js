import React from 'react'
import './Header.css'


//header component
//getting the componentChange function in props
function Header(props) {




    return (

        <div className='main_div'>
            <h2 onClick={() => {
                props.selected_component('home')  //use arrow function calling a passed function and then pass value
            }
            }>Home</h2>

            <h2 onClick={() => {
                props.selected_component('counter')
            }
            }>Counter</h2>


            <h2 onClick={() => {
                props.selected_component('Counter')
            }
            }>Counter</h2>


            <h2 onClick={() => {
                props.selected_component('Counter')
            }
            }>Counter</h2>


        </div>


    )
}


export default Header;