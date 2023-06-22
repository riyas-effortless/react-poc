import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeEndDate } from '../features/filterSlice';
// import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice'

function SecondComponent() {
    const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <br />
                <input type="text" value={(new Date(filter.start_date.join("/"))).toLocaleString()} readOnly />
                <button onClick={() => dispatch(changeEndDate([1,3,2002]))} >Change End date</button>
            </div>
        </div>
    )
}

export default SecondComponent;