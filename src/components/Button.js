const Button = ({text, styles, onClick}) => {
  return (
        <button className="btn" style={styles} onClick={onClick}>{text}</button>
  )
}

export default Button