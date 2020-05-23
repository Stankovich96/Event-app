import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../Utils/MyButton';

 class Discount extends Component {

    state ={
        discountStart:0,
        discountEnd:30
    }
    percentage = () =>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }
    
    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade 
                        onReveal={()=> this.percentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>ipsum dolor sit, amet consectetur adipisicing elit. Vel veniam rem delectus quasi ipsam adipisci suscipit odio aliquam animi, consequuntur beatae nihil maxime odit excepturi accusamus dignissimos. Perferendis, praesentium error.</p>

                            <MyButton
                                text="Purchase tickets"
                                bck="#ffa808"
                                color="#ffffff"
                                link="http://google/com"
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default Discount;