import './Services.css'

function Services() {
    return (
        <div id='services'>
            <div id='services_top'>
                <strong>Services for every dog</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna.</p>
            </div>
            <div id='services_bottom'>
                <div className='services_cards'>
                    <img src="https://preview.colorlib.com/theme/anipat/img/service/service_icon_1.png" alt="" />
                    <h2>Pet Boarding</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                </div>
                <div className='services_cards'>
                    <img src="https://preview.colorlib.com/theme/anipat/img/service/service_icon_2.png" alt="" />
                    <h2>Healty meals</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                </div>
                <div className='services_cards'>
                    <img src="https://preview.colorlib.com/theme/anipat/img/service/service_icon_3.png" alt="" />
                    <h2>Pet Spa</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                </div>
            </div>
        </div>
    )
}

export default Services;