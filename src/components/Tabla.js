import React from 'react';


const mockData = [
    {id: 1, name: "Agua", price: 1.2, image: "/Img/cb/b1.jpg"},
    {id: 1, name: "Infusiones", price: 1.2, image: "/Img/cb/b2.jpg"},
    {id: 1, name: "Zumo de limon", price: 1.2, image: "/Img/cb/b4.webp"},
    {id: 1, name: "Leche de Almendras", price: 1.2, image: "/Img/cb/b3.webp"},
    {id: 1, name: "Zumo de Limon", price: 1.2, image: "/Img/cb/b5.jpeg"},
    {id: 1, name: "Vino Blanco regional", price: 1.2, image: "/Img/cb/b6.jpg"},
    {id: 1, name: "Vino Tinto Regional", price: 1.2, image: "/Img/cb/b7.jpg"},
    {id: 1, name: "Zumo de Piña", price: 1.2, image: "/Img/cb/b8.jpg"},
    {id: 1, name: "Zumo de Naranja natural", price: 1.2, image: "/Img/cb/b9.jpg"},
    {id: 1, name: "Zumo de tomate", price: 1.2, image: "/Img/cb/b9.webp"},
    {id: 1, name: "Alitas al horno", price: 1.2, image: "/Img/cb/c1.webp"},
    {id: 1, name: "Fogras", price: 1.2, image: "/Img/cb/c2.jpeg"},
    {id: 1, name: "Ensalada de Pasta", price: 1.2, image: "/Img/cb/c3.jpg"},
    {id: 1, name: "Manzana", price: 1.2, image: "/Img/cb/c4.jpg"},
    {id: 1, name: "Patas regionale", price: 1.2, image: "/Img/cb/c5.jpg"},
    {id: 1, name: "Bizcocho casero", price: 1.2, image: "/Img/cb/c6.webp"},
    {id: 1, name: "Bikini", price: 1.2, image: "/Img/cb/c7.webp"},
    {id: 1, name: "Uvas", price: 1.2, image: "/Img/cb/c9.jpeg"},
    {id: 1, name: "Zanahorias", price: 1.2, image: "/Img/cb/c10.jpeg"},
    
];


const Table = () => {
    return (
      <div style={{ overflowX: "auto", padding: "20px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
          <thead>
            <tr style={{ background: "linear-gradient(to right, yellow, pink, purple)", color: "white", fontSize: "18px" }}>
              <th style={styles.th}>Imagen</th>
              <th style={styles.th}>Nombre</th>
              <th style={styles.th}>Precio</th>
              <th style={styles.th}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item) => (
              <tr key={item.id} style={{ textAlign: "center", backgroundColor: "#fff", borderBottom: "1px solid #ccc" }}>
                <td style={styles.td}>
                  <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                </td>
                <td style={styles.td}>{item.name}</td>
                <td style={{ ...styles.td, color: "green", fontWeight: "bold" }}>${item.price.toFixed(2)}</td>
                <td style={styles.td}>
                  <button style={{ ...styles.button, backgroundColor: "blue" }}>+</button>
                  <button style={{ ...styles.button, backgroundColor: "orange" }}>-</button>
                  <button style={{ ...styles.button, backgroundColor: "green" }}>Añadir</button>
                  <button style={{ ...styles.button, backgroundColor: "red" }}>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  const styles = {
    th: {
      padding: "15px",
      border: "1px solid #ccc",
    },
    td: {
      padding: "15px",
      border: "1px solid #ccc",
    },
    button: {
      margin: "5px",
      padding: "8px 12px",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
  
  export default Table;