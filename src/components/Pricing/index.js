import React, { Component } from 'react';
import MyButton from '../Utils/MyButton';
import Zoom from 'react-reveal/Zoom';

 class Pricing extends Component {

    state = {
        prices:[100,150,250],
        positions:['Balcony', 'Medium', 'Star'],
        desc:[
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque id non quisquam repellat eveniet saepe at iure impedit quod',
            'Dolorem sit repudiandae sunt numquam odit tempore, impedit et, voluptates laboriosam inventore ad cupiditate reprehenderit voluptatibus nobis vel debitis quod eos tenetur, veritatis optio quia. Aperiam distinctio dolores laborum totam.',
            'Nihil impedit et possimus nemo perspiciatis temporibus maxime! Nostrum unde obcaecati eaque dolorum quas in ea quae autem dolor pariatur consequuntur placeat accusantium fugiat dolorem, itaque iusto odit modi minus quia a quis, animi veniam!' 
        ],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],

        delay:[500,0,500]
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom
            delay={this.state.delay[i]}
            key={i}
            >
            <div className="pricing_item">
                 <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                    <span>{this.state.desc[i]}</span>
                    </div>
                    <div className="pricing_buttons">
                        <MyButton 
                            text="Purchase"
                            bck="#ffa800"
                            color="#ffffff"
                            link={this.state.linkto[i]}
                        />
                    </div>
                </div>
            </div>
            </Zoom>
        ))
    )


    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                     
                </div>
                
            </div>
        )
    }
}

export default Pricing;