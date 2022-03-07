import "../css/styles.css";

const EducationFundPage = () => {
  return (
    <div className="ed-fund-page">
      <h1 style={{ margin: "0 rem", textAlign: "center" }}>
        Abudu/Atampugre Students' Education Fund
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0rem 1rem 1.5rem 1rem" }}>
          <p>
            We are donating to help fund the WAEC remedials and exam fees of
            Ayine's children. Any help you can give is most appreciated. The
            Momo number to send money to is 0544 959 002 and the name is "Hassan
            Abudu Mey IA".
          </p>
          <p>
            If you'd like to do a bank transfer, kindly get in touch via
            WhatsApp on the same number for further details.
          </p>
        </div>
        <div style={{ maxWidth: "600px", margin: "0 1rem" }}>
          <table>
            <tr>
              <th>Transaction ID #</th>
              <th>Amount (GHS)</th>
            </tr>
            <tr>
              <td>16356537019</td>
              <td>150.00</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EducationFundPage;
