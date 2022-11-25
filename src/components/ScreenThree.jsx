import React from 'react';
import ItemComponent from './_childs/ItemComponent';



const ScreenThree = (props) => {

    const Items = () => {
        return props.data.map((item, index) => <ItemComponent item={item} key={index}/>)
    }

    return (
        <section className='sectionThree' >
            <h2>Our best</h2>
            <div className="wrapper">
                <Items/>
            </div>
        </section>
    );
};


export default ScreenThree;