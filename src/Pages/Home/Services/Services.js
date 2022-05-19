import useServices from '../../../hooks/useServices/useSevices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    // Used Custom Hooks
    const [services, setServices] = useServices();
    return (
        <div id='services'>
            <h1 className='services-title mt-5'>Our Services:</h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;