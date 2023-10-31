/**
 * Main Component - Wrapper for the main content of a page.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.className] - Optional class name for styling the main element.
 * @param {React.ReactNode} props.children - The child elements to be rendered within the main section.
 *
 * @returns {JSX.Element} A JSX element that serves as a container for the main content.
 */
const Main = (props) => {
    return (
        <main className={props.className}>
            {props.children}
        </main>
    );
};

export default Main;
