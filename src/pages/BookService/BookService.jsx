import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const BookService = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const customerName = form.customerName.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price
        }
        console.log(booking);

        fetch('https://car-doctor-server-production-8b56.up.railway.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('Service booked successfully!')
                }
            })
    }

    return (
        <div>
            <h2 className='text-center text-3xl font-bold'>Book Service: {title}</h2>
            <form className="card-body" onSubmit={handleBookService}>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  name='name' defaultValue={user?.displayName} placeholder='Your Name' className="input input-bordered" required />
                    </div> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name='customerName' defaultValue={user?.displayName} placeholder='Your Name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} placeholder="email" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Anount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className='btn btn-error btn-block' type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookService;