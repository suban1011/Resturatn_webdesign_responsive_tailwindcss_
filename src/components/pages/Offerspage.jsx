
import Layout from '../Layout';
import OfferPage from './Offerpage';

const offers = [
    { id: 1, title: 'Combo Meal', description: 'Burger, Fries, and Drink', price: 14.99 },
    { id: 2, title: 'Family Feast', description: 'Pizza, Pasta, and Salad', price: 24.99 },
    // Add more offers as needed
];

const Offerspage = () => {
    return (
        <Layout>
            <div>
                {/* Include any other components or sections */}
                <OfferPage offers={offers} />
            </div>
        </Layout>
    );
};

export default Offerspage;
