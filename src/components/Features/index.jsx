/**
 * Features Component - Wrapper for feature items.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child elements to be rendered within the features section.
 * 
 * @returns {JSX.Element} A JSX element that serves as a container for feature items.
 */
const Features = (props) => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {props.children}
        </section>
    );
};

export default Features;
