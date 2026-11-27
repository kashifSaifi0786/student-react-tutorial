function Parent() {
    const name = "Harshita";

    return (
        <div>
            <h2>Parent Component</h2>
            <Child name={name} />
        </div>
    );
}

function Child({ name }) {
    return <h3>Hello {name}</h3>;
}

export default Parent;