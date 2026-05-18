function Card({ children, className = "" }) {
  return <section className={`${className}`.trim()}>{children}</section>;
}

export default Card