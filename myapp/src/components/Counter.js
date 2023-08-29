import React, { useEffect, useState } from 'react'
import './Counter.css'


function Counter() {

    //useState hook set the state , it will return the value and a function to change that state value in an array
    //to get that value used this array destructing
    //0 will be the initial value for c_value

    const [c_value, valueChange] = useState(0)

    //multi state value
    const [color, colorChange] = useState('white')

    //console.log(c_value)

    //boom effect using useEffect

    const [greensignal,ChangeSignal] = useState(false)



    //useEffect() return function example

    // useEffect(()=>{
        
    //     console.log("value :",c_value)
    //     console.log('=========================================')
    //     return ()=>{
    //         console.log('=========================================')
    //         console.log('value in returning function :',c_value)
            
    //     }
    // })


    useEffect(()=>{
        
        ChangeSignal(false)
        const id = setTimeout(()=>{
            ChangeSignal(true)
        },c_value*1000)

        return ()=>{
            clearTimeout(id);
            
        }


    },[c_value])

    return (

        <div className='counter_main'>

            <div className='counter_inner_div' style={{ background: color }}>
                {/* according to button click the div background will change */}

                <div >
                    <button onClick={() => {
                        valueChange((state) => {   //you change the value of state by this way or another way is showed below
                            return state + 1
                        })
                    }}>
                        Increment
                    </button>

                    <h1>{c_value}</h1>

                    <button onClick={() => {
                        valueChange(c_value - 1)  //second way directly passing the value without using arrow function
                    }}>
                        Decrement
                    </button>
                </div>

                <div>
                    <button onClick={() => {
                        colorChange((state) => {
                            return "red"
                        })
                    }}>
                        Red
                    </button>

                    <button onClick={() => {
                        colorChange((state) => {
                            //console.log(state)
                            state = 'green'
                            return state
                        })
                    }}>

                        Green
                    </button>
                </div>


            </div>
            <div>
        { c_value && greensignal ? <div><h1>Boooomm!!</h1></div> : null}
            </div>




        </div>

    )
}

export default Counter;