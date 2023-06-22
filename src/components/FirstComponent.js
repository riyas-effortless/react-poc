import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeStartDate } from '../features/filterSlice';
const FirstComponent = () => {
    const filter = useSelector((store) => store.filter)
    const dispatch = useDispatch();
    return (
        <nav>
            <div>
                <button onClick={() => dispatch(changeStartDate([10,6,2000]))} >Change Start Date</button>
                <input type="text" value={(new Date(filter.end_date.join("/"))).toLocaleString()} readOnly />
            </div>
        </nav>
    )
}

export default FirstComponent;