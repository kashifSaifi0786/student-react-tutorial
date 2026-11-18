const Header=()=> {
    return (
        <header>
            <h1>My React Website</h1>
        </header>
    );
}

const Card=() =>{
    return (
        <div>
            <h2>React JS</h2>
            <p>Learning React is fun!</p>
        </div>
    );
}

const Footer=()=> {
    return (
        <footer>
            <p>Copyright 2026</p>
        </footer>
    );
}

const Task1=()=> {
    return (
        <div>
            <Header />
            <Card />
            <Footer />
        </div>
    );
}

export default Task1;