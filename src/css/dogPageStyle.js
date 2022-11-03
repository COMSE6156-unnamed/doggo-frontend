const dogCardMediaStyle = {
  borderRadius: "10px 10px 0px 0px",
  maxWidth: "100%",
  width: "100%",
  display: "inline"
};

const dogCardStyle = {
  dogCard: {
    display: "inline-flex",
    flexDirection: "column",
    borderRadius: "10px",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width: "400px",
    marginBottom: "3%"
  },
  dogCardMedia: {
    borderRadius: "10px 10px 0px 0px",
    maxWidth: "100%",
    width: "100%",
    display: "inline"
  },
  dogCardContent: {
    maxWidth: "100%",
    justifyContent: "center",
    paddingTop: "0px"
  },
  dogCardHeaderTitle: {
    variant: "h5",
    fontWeight: "600",
    marginRight: "auto"
  }
};

const dogPageStyle = {
  dogCardMediaStyle,
  dogCardStyle,
};

export default dogPageStyle;
