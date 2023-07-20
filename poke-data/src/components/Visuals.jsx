import Header from "./Header";
import Piechart from "./Piechart";
//import Jup from "./Jup";

const Visuals = () => {
    return (
        <>
            <Header />
            <div className="visuals-container">
                <h1 className="visuals-title">PieChart Visualization</h1>
                <Piechart />
            </div>
            {/* <div className="jupyter-container">
                <Jup />
            </div> */}
        </>
    );
}

export default Visuals;