/**
 * Hero Component - Displays the hero section of a page with promotional content.
 *
 * @component
 * 
 * @returns {JSX.Element} A JSX element that represents the hero section.
 */
const Hero = () => {
    return (
        <div className="hero">
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
};

export default Hero;
