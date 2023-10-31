/**
 * FeatureItem Component - Displays a feature item with an icon, title, and text.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.image - The source URL for the feature icon.
 * @param {string} props.alt - The alternative text for the feature icon.
 * @param {string} props.title - The title of the feature item.
 * @param {string} props.text - The text description of the feature.
 * 
 * @returns {JSX.Element} A JSX element representing a feature item.
 */
const FeatureItem = (props) => {
  return (
      <div className="feature-item">
          <img src={props.image} alt={props.alt} className="feature-icon" />
          <h3 className="feature-item-title">{props.title}</h3>
          <p>
              {props.text}
          </p>
      </div>
  );
};

export default FeatureItem;
