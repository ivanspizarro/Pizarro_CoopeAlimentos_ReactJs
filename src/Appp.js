import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer";

function Appp() {

    const edad = 32;

    return (<>

        <NavBar />

        <ItemListContainer name= "Horatio" surname = "Nelson" edad= {edad}  />

        <Footer />

        </>
    
    )
};

export default Appp