import React from "react";
import Box from "./_childs/Box";
import Btn from "./_childs/Btn";
import Input from "./_childs/Input";

const LastScreen = () => {
    const countries = [
        "Brazil",
        "Zenya",
        "Columbia"
    ]

    const arr = [
        {
            id: 1,
            img: 'coffee.png',
            title: 'AROMISTICO Coffee 1 kg',
            price: 10.73,
            country: "Columbia",
            qt: 0
        },
        {
            id: 2,
            img: 'info.png',
            title: 'AROMISTICO Coffee 1 kg',
            price: 10.73,
            country: "Zenya",
            qt: 10
        },
        {
            id: 3,
            img: 'types.png',
            title: 'AROMISTICO Coffee 1 kg',
            price: 10.73,
            country: "Brazil",
            qt: 0
        },
        {
            id: 1,
            img: 'coffee.png',
            title: 'AROMISTICO Coffee 1 kg',
            price: 10.73,
            country: "Columbia",
            qt: 0
        },
        {
            id: 2,
            img: 'info.png',
            title: 'AROMISTICO Coffee 1 kg',
            price: 10.73,
            country: "Zenya",
            qt: 10
        },
        {
            id: 3,
            img: 'types.png',
            title: 'AROMISTICO Coffee 1 kg',
            price: 10.73,
            country: "Brazil",
            qt: 0
        },
        {
            id: 1,
            img: 'coffee.png',
            title: 'AROMISTICO Coffee 1 kg',
            price: 10.73,
            country: "Columbia",
            qt: 0
        },
        {
            id: 2,
            img: 'info.png',
            title: 'AROMISTICO Coffee 1 kg',
            price: 10.73,
            country: "Zenya",
            qt: 10
        },
        {
            id: 3,
            img: 'types.png',
            title: 'AROMISTICO Coffee 1 kg',
            price: 10.73,
            country: "Brazil",
            qt: 0
        },
    ]


    return ( 
        <section className="lastpage">
            <div className="head">
                <div className="forinp">
                    <p>Looking for</p>
                    <Input/>
                </div>
                <div className="forbtns">
                    <p>Or filter</p>
                    <div className="btns">
                        {countries.map((item, index) => <Btn text={item} key={index}/>)}
                    </div>
                </div>
            </div>
            <div className="forboxes">
                {arr.map((item, index) => <Box title={item.title} price={item.price} country={item.country} key={index}/>)}
            </div>
        </section>
     );
}
 
export default LastScreen;