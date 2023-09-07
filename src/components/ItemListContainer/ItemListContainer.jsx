const ItemListContainer = ({ greeting }) => {
    return (
        <div className="flex justify-center">
            <div >
                {greeting}
            </div>
        </div>
    );
};

export default ItemListContainer;