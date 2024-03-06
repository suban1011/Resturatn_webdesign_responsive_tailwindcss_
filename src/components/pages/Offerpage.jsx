
import OfferItem from './OfferItem';

const Offerpage = ({ offers }) => {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Special Offers</h1>
            {offers.map((offer) => (
                <OfferItem key={offer.id} {...offer} />
            ))}
        </div>
    );
};

export default Offerpage;
