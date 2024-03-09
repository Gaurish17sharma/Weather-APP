import './Present_weather.css';

export default function Present_weather() {
    return (
        <div className="weather">

            <div className="top">
                <div>
                    <p className="city">Belgade</p>
                    <p className='weather-description'>Sunny</p>
                </div>
                <img alt='weather' className='weather-icon' src='icons/01d.png' />
            </div>

            <div className="bottom">
                <p className='temperature'>30°C</p>
                <div className="details">

                    <div className="parameter-row">
                        <span className='parameter-label'>Details</span>
                    </div>

                    <div className="parameter-row">
                        <span className='parameter-label'>Feels Like</span>
                        <span className='parameter-value'>35°C</span>
                    </div>

                    <div className="parameter-row">
                        <span className='parameter-label'>Wind Velocity</span>
                        <span className='parameter-value'>5m/s</span>
                    </div>

                    <div className="parameter-row">
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>20%</span>
                    </div>

                    <div className="parameter-row">
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>10 hPa</span>
                    </div>

                </div>
            </div>
        </div>
    );
};