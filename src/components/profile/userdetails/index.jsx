import StyleUserDetails from "./style";

const UserDetails = () => {
  return (
    <StyleUserDetails>
      <ul className="details">
        <li>
          <p>Full name</p>
          <span>Laman Hasanli</span>
        </li>
        <li>
          <p>Social Security Number</p>
          <span>20011109-1111</span>
        </li>
        <li>
          <p>Address</p>
          <span>Laboratorgrand 1A</span>
        </li>
        <li>
          <p>Post code</p>
          <span>931 62</span>
        </li>
        <li>
          <p>Email</p>
          <span>laman@gmail.com</span>
        </li>
      </ul>
      <div className="balance">
        <p>Balance</p>
        <article>
          <span>7500</span>
          <span>tokens</span>
        </article>
        <div>
          <button>Add</button>
          <button>Withdraw</button>
        </div>
      </div>
    </StyleUserDetails>
  );
};

export default UserDetails;
