
const Features = (props) => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {props.children}
        </section>
    );
};

export default Features;