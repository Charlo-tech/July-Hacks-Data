import Notebook from 'react-notebook';

const Jup = () => {
    const notebook = require('./Pokemon.ipynb');

    return (
        <Notebook
            notebook={notebook}
            displayName="Pokemon"
            cellStyle={{ fontSize: 16 }}
            cellHeights={[100, 100, 100, 100, 100, 100, 100, 100, 100, 100]}
        />
    );
    
}

export default Jup;