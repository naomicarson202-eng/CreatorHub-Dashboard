export default function Dashboard() {
  const items = [
    ["Projects", "12"],
    ["Users", "248"],
    ["Deployments", "36"]
  ]

  return (
    <section className="cards">
      {items.map((item) => (
        <div className="card" key={item[0]}>
          <h3>{item[0]}</h3>
          <p>{item[1]}</p>
        </div>
      ))}
    </section>
  )
}