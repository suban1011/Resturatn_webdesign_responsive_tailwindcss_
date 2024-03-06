

// eslint-disable-next-line react/prop-types
const OfferItem = ({ title, description, price }) => {
    return (
        <div className="border p-4 my-4">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-sm text-gray-700 mt-2">${price}</p>
        </div>
    );
};

export default OfferItem;
