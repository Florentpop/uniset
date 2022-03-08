import stevedore from "../../assets/stevedore2.jpg";
import forklift from "../../assets/Teletruck.jpg";

export const serviceList = [
  {
    id: 1,
    image: <img src={stevedore} alt="tuna" />,
    heading: "STEVEDORING SERVICE",
    text: "Our stevedores handle over 180,000 MT of tuna annually and provide our clients with a variety of services: fish sorting, direct discharge to cold stores and canning factory, as well as reefer container stuffing and unloading.",
  },
  {
    id: 2,
    image: <img src={stevedore} alt="tuna" />,
    heading: "Reefer Container Loading & Unloading",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit curae, aptent in auctor lectus ornare nisl sociis non fermentum, commodo duis vulputate malesuada mus metus nibh. Est integer quam semper enim nunc,tincidunt sollicitudin pharetra fringilla ac, eget lacus placerat quisque.",
  },
  {
    id: 3,
    image: <img src={forklift} alt="stevedore" />,
    heading: "FORKLIFT RENTALS",
    text: "We have straight mast forklifts are the best choice for low-height material lifting and lowering tasks performed on rough terrain. forklift truck with a telescopic boom, instead of the conventional vertical mast, to create the JCB Teletruk. <br>This unique design dramatically improves productivity and safety, and saves operational time and yard space.",
  },
];
