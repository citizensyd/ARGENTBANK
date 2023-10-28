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

