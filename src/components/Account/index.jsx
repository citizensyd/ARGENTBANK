/**
 * Account Component - Displays banking account information.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.type - The type of account (e.g., Current, Savings).
 * @param {(string|number)} props.id - The unique identifier for the account.
 * @param {number} props.amount - The available amount in the account.
 * @param {string} props.status - The status of the available amount (e.g., 'Available').
 * 
 * @returns {JSX.Element} A JSX element that represents the account information.
 */
const Account = (props) => {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank {props.type} (x{props.id})</h3>
                <p className="account-amount">${props.amount}</p>
                <p className="account-amount-description">Available {props.status}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
};

export default Account;
