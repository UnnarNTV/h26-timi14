type FooterProps = {
  address: string;
  openingHours: string;
};

function Footer({ address, openingHours }: FooterProps) {
  return (
    <footer>
      <p className="info">{address}</p>
      <p className="info">{openingHours}</p>
    </footer>
  );
}

export default Footer;
