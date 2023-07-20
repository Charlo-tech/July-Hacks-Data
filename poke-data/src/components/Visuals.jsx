import Header from "./Header";
import Piechart from "./Piechart";

const Visuals = () => {
    return (
        <>
            <Header />
            <div className="visuals-container">
                <h1 className="visuals-title">PieChart Visualization</h1>
                <Piechart />
            </div>
        </>
    );
}

export default Visuals;