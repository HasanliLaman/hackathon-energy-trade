import StyleUserPurchases from "./style";

const UserPurchases = () => {
  return (
    <StyleUserPurchases>
      <ul>
        <li>
          <header>Plangatan 13</header>
          <div>
            <p>Type</p>
            <span>Water</span>
          </div>
          <div>
            <p>Amount (kWh)</p>
            <span>44</span>
          </div>
          <div>
            <p>Price (kWh)</p>
            <span>SEK 35</span>
          </div>
        </li>
        <li>
          <header>Klostergatan 76</header>
          <div>
            <p>Type</p>
            <span>Solar</span>
          </div>
          <div>
            <p>Amount (kWh)</p>
            <span>16</span>
          </div>
          <div>
            <p>Price (kWh)</p>
            <span>SEK 80</span>
          </div>
        </li>
        <li>
          <header>Krokursvagen 23</header>
          <div>
            <p>Type</p>
            <span>Solar</span>
          </div>
          <div>
            <p>Amount (kWh)</p>
            <span>300</span>
          </div>
          <div>
            <p>Price (kWh)</p>
            <span>SEK 45</span>
          </div>
        </li>
        <li>
          <header>Laboratorgrand 2B</header>
          <div>
            <p>Type</p>
            <span>Wind</span>
          </div>
          <div>
            <p>Amount (kWh)</p>
            <span>68</span>
          </div>
          <div>
            <p>Price (kWh)</p>
            <span>SEK 50</span>
          </div>
        </li>
      </ul>
    </StyleUserPurchases>
  );
};

export default UserPurchases;
